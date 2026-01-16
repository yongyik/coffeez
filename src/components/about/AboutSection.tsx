
import { div } from "framer-motion/m";
import Image from "next/image";

type Props = {
  id?: string;
  title?: string;
  subtitle?: string;
  paragraphs?: string[];
  image?:{src: string; alt: string}
};

export default function AboutSection({
  id,
  title,
  subtitle,
  paragraphs = [],
  image
}: Props) {
  return (
    <section id={id} className="p-8 flex flex-col items-center ">
      {title && <h2 className="text-4xl py-5 lg:text-6xl">{title}</h2>}
      {subtitle && <h3 className="text-3xl py-2 lg:text-4xl">{subtitle}</h3>}
      {paragraphs.map((p, i) => (
        <p key={i} className="py-3 max-w-198 lg:text-2xl">{p}</p>
      ))}
      {image && (
        <Image src={image.src } alt={image.alt} width={333} height={333} className="w-full max-w-88"/>
      )}
    </section>
  );
}
