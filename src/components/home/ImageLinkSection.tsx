"use client";


import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface Props {
  href: string;
  src: string;
  alt: string;
  text: string;
}

export default function ImageLinkSection({ href, src, alt, text }: Props) {
  return (
    <motion.div
    className="relative py-8 flex justify-center"
      initial={{y:100, opacity: 0 }}
      whileInView={{y:0, opacity: 1 }}
      viewport={{ once: true,amount: 0.1}}
      transition={{ duration: 0.8 }}

    >
      <Link href={href} className="block w-full">
        <Image
          src={src}
          alt={alt}
          width={233}
          height={233}
          className="w-full h-56 object-cover lg:h-99"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/40">
          <div className="text-amber-50 text-3xl drop-shadow-lg underline underline-offset-3 lg:text-5xl">
            {text}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
