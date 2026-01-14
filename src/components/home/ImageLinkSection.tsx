import Image from "next/image";
import Link from "next/link";

interface Props {
  href: string;
  src: string;
  alt: string;
  text: string;
};

export default function ImageLinkSection({
  href,
  src,
  alt,
  text,
}: Props) {
  return (
    <div className="relative py-8 flex justify-center">
      <Link href={href} className="block w-full">
        <Image
          src={src}
          alt={alt}
          width={133}
          height={33}
          className="w-full h-56 object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/40">
          <div className="text-amber-50 text-3xl drop-shadow-lg underline underline-offset-3">
            {text}
          </div>
        </div>
      </Link>
    </div>
  );
}
