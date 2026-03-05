import Link from "next/link";
import Image from "next/image";

interface ProjectCardProps {
  href: string;
  title: string;
  thumbnail: string;
}

export default function ProjectCard({ href, title, thumbnail }: ProjectCardProps) {
  const isSvg = thumbnail.endsWith(".svg");

  return (
    <Link href={href} className="group relative block overflow-hidden aspect-[4/3]">
      {isSvg ? (
        /* eslint-disable-next-line @next/next/no-img-element */
        <img
          src={thumbnail}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      ) : (
        <Image
          src={thumbnail}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />
      )}
      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <h3 className="text-white text-lg font-bold text-center px-4">{title}</h3>
      </div>
    </Link>
  );
}
