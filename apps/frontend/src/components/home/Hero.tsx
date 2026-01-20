import Image from "next/image";

interface HeroProps {
  src: string;
  alt: string;
  title: string;
  desc: string;
}
export default function Hero({ src, alt, title, desc }: HeroProps) {
  return (
    <header className="relative w-full h-70 lg:h-176">
      <Image src={src} alt={alt} fill className="object-cover" priority />
      <div className="absolute inset-0 bg-black/40" />
      <div
        className="
          absolute
          top-14 lg:top-24
          left-7 lg:left-27
        text-amber-50 flex flex-col gap-1.5"
      >
        <h1 className="text-2xl lg:text-6xl">{title}</h1>
        <p className="text-sm lg:text-2xl lg:py-5 lg:w-169 h-auto">{desc}</p>
      </div>
    </header>
  );
}
