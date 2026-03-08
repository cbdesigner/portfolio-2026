"use client";

import { useEffect, useRef } from "react";

interface HeroVideoProps {
  src: string;
  className?: string;
}

export default function HeroVideo({ src, className = "" }: HeroVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Safari has native HLS support
    if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = src;
      return;
    }

    // For other browsers, dynamically import hls.js
    let hls: import("hls.js").default | null = null;

    import("hls.js").then((HlsModule) => {
      const Hls = HlsModule.default;
      if (Hls.isSupported()) {
        hls = new Hls({
          enableWorker: true,
          lowLatencyMode: false,
        });
        hls.loadSource(src);
        hls.attachMedia(video);
      }
    });

    return () => {
      hls?.destroy();
    };
  }, [src]);

  return (
    <video
      ref={videoRef}
      autoPlay
      loop
      muted
      playsInline
      className={className}
      style={{
        marginLeft: "0",
        transform: "scale(1.2)",
        transformOrigin: "left center",
      }}
    />
  );
}
