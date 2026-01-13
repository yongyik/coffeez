
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
    <section id={id} className="p-8">
      {title && <h2 className="text-4xl py-5">{title}</h2>}
      {subtitle && <h3 className="text-3xl py-2">{subtitle}</h3>}
      {paragraphs.map((p, i) => (
        <p key={i} className="py-3">{p}</p>
      ))}
      {image && (
        <Image src={image.src } alt={image.alt} width={133} height={33} className="w-full"/>
      )}
    </section>
  );
}
