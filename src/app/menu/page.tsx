"use client";

import MenuCard from "@/components/menu/MenuCard";
import { menu } from "@/data/menu";
import { motion } from "framer-motion";

export default function MenuPage() {
  return (
    <div className="flex flex-col gap-3 p-6 pt-16  ">
      <motion.nav
        initial={{ x: 200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col gap-2 rounded-2xl border-amber-500/50 border bg-[url('/images/background/bg-1.jpg')] bg-cover bg-center text-amber-50 py-5 px-2.5"
      >
        <h2 className=" text-3xl py-1.5 text-center ">分类</h2>
        {menu.map((c) => (
          <a
            key={c.categoryKey}
            className="border border-amber-50/30 text-xl text-center bg-amber-50/10 p-1.5 hover:bg-amber-50/20"
            href={`#${c.categoryKey}`}
          >
            {c.category}
          </a>
        ))}
      </motion.nav>

      <section className="flex flex-col gap-5   text-amber-50">
        {menu.map((c) => (
          <motion.div
            initial={{ x: -200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true,amount: 0.1 }}
            transition={{ duration: 1.3 }}
            id={c.categoryKey}
            key={c.categoryKey}
            className="p-5 rounded-2xl border-amber-500/50 border bg-[url('/images/background/bg-1.jpg')] bg-cover bg-center"
          >
            <h2 className="text-3xl">{c.category}</h2>

            <ul className="flex flex-col gap-2 py-3 ">
              {c.items.map((a) => (
                <li key={`${c.categoryKey}-${a.name}`}>
                  <MenuCard
                    src={a.photo}
                    alt={a.name}
                    name={a.name}
                    description={a.description}
                    fullDescription={a.fullDescription}
                    price={a.price}
                  />
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </section>
    </div>
  );
}
