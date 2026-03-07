"use client";

import Link from "next/link";
import Image from "next/image";

interface ProjectCardProps {
  href: string;
  title: string;
  thumbnail: string;
}

export default function ProjectCard({
  href,
  title,
  thumbnail,
}: ProjectCardProps) {
  const isSvg = thumbnail.endsWith(".svg");

  return (
    <Link
      href={href}
      className="group reveal relative block aspect-[4/3] overflow-hidden bg-[var(--color-bg-primary)] border border-[var(--color-border)]/30"
    >
      {/* Image hidden by default, appears on hover in grayscale */}
      {isSvg ? (
        /* eslint-disable-next-line @next/next/no-img-element */
        <img
          src={thumbnail}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover opacity-0 grayscale group-hover:opacity-60 transition-all duration-700 ease-editorial group-hover:scale-105"
        />
      ) : (
        <Image
          src={thumbnail}
          alt={title}
          fill
          className="object-cover opacity-0 grayscale group-hover:opacity-60 transition-all duration-700 ease-editorial group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      )}
      {/* Title centered */}
      <div className="absolute inset-0 flex items-center justify-center p-6">
        <h3 className="font-heading text-xl text-[var(--color-text-primary)] text-center transition-colors duration-300">
          {title}
        </h3>
      </div>
    </Link>
  );
}
