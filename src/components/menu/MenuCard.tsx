"use client";

import Image from "next/image";
import { useState } from "react";

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

      {showMore && (
        <dialog
          open
          className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-77  border-amber-300 border  text-amber-100 flex flex-col gap-3 items-center bg-[url('/images/background/bg-1.jpg')] bg-cover bg-center p-8 rounded-3xl"
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
         
        </dialog>
      )}
    </article>
  );
}
