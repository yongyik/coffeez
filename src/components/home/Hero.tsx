import Image from "next/image";

interface HeroProps {
  src: string;
  alt: string;
  title: string;
  desc: string;
}
export default function Hero({src,alt, title, desc }: HeroProps) {
  return (

    <header className="relative w-full h-70">
      
      <Image src={src} alt={alt} fill className="object-cover" priority />
      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute top-14 left-7 text-amber-50 flex flex-col gap-1.5">
        <h1 className="text-2xl">{title}</h1>
        <p className="text-sm w-69 h-auto">{desc}</p>
      </div>
    </header>
  );
}
