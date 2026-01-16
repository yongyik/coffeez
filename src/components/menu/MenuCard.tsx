"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { div } from "framer-motion/client";

interface Props {
  src: string;
  alt: string;
  name: string;
  description: string;
  fullDescription: string;
  price: number;
}

export default function MenuCard({
  src,
  alt,
  name,
  description,
  fullDescription,
  price,
}: Props) {
  const [showMore, setShowMore] = useState(false);

  function handleClick() {
    setShowMore(!showMore);
  }

  return (
    <article className="flex flex-row p-5.5 gap-3 w-full  ">
      <figure>
        <Image
          src={src}
          alt={alt}
          width={153}
          height={133}
          className="h-auto"
        />
      </figure>
      <section className="flex flex-col gap-1 justify-between">
        <div className="flex flex-col gap-2">
          <h3 className="text-2xl">{name}</h3>
          <p className="text-sm">{description}</p>
        </div>

        <div className="flex flex-row w-full justify-between">
          <p className="font-semibold">
            <span className="sr-only">价格：</span>${price}
          </p>
          <button
            className="underline underline-offset-2"
            onClick={handleClick}
          >
            {!showMore ? "了解更多" : "收起来"}
          </button>
        </div>
      </section>

      <AnimatePresence>
        {showMore && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/30 z-50"
          >
            <motion.div
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-77  border-amber-300 border  text-amber-100 flex flex-col gap-3 items-center bg-[url('/images/background/bg-1.jpg')] bg-cover bg-center p-8 rounded-3xl"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <figure>
                <Image
                  src={src}
                  alt={alt}
                  width={153}
                  height={133}
                  className="h-auto"
                />
              </figure>
              <section className="flex flex-col gap-1 justify-between ">
                <div className="flex flex-col items-center gap-3.5">
                  <h2 className="text-4xl">{name}</h2>
                  <p className="text-sm py-2.5">{fullDescription}</p>
                </div>

                <div className="flex flex-row w-full justify-between py-4">
                  <p className="font-semibold">
                    <span className="sr-only">价格：</span>${price}
                  </p>
                  <button
                    className="underline underline-offset-2"
                    onClick={handleClick}
                  >
                    {!showMore ? "了解更多" : "收起来"}
                  </button>
                </div>
              </section>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </article>
  );
}
