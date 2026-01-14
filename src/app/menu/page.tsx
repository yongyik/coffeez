import MenuCard from "@/components/menu/MenuCard";
import { menu } from "@/data/menu";
import Link from "next/link";

export default function MenuPage() {
  return (
    <div className="flex flex-col gap-3 p-6">
      <h1 className="text-4xl ">菜单</h1>
      <nav className="flex flex-col gap-2 bg-amber-300 p-5">
        <h2 className="text-3xl py-1.5">分类</h2>
        {menu.map((c) => (
          <div key={c.categoryKey}>
            <a className="text-2xl" href={`#${c.categoryKey}`}>
              {c.category}
            </a>
          </div>
        ))}
      </nav>

      <section className="flex flex-col gap-5 p-5 bg-amber-300">
        {menu.map((c) => (
          <div id={c.categoryKey} key={c.categoryKey}>
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
