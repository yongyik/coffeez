import MenuCard from "@/components/menu/MenuCard";
import { menu } from "@/data/menu";
import Link from "next/link";

export default function MenuPage() {
  return (
    <div className="flex flex-col gap-3 p-6 pt-16  ">
      <nav className="flex flex-col gap-1 rounded-2xl border-amber-500/50 border bg-[url('/images/background/bg-1.jpg')] bg-cover bg-center text-amber-50 py-5 px-1.5">
        <h2 className=" text-3xl py-1.5 text-center ">分类</h2>
        {menu.map((c) => (
          <a
            key={c.categoryKey}
            className="text-xl text-center bg-amber-50/10 p-1.5"
            href={`#${c.categoryKey}`}
          >
            {c.category}
          </a>
        ))}
      </nav>

      <section className="flex flex-col gap-5   text-amber-50">
        {menu.map((c) => (
          <div
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
          </div>
        ))}
      </section>
    </div>
  );
}
