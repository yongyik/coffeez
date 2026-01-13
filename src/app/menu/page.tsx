import MenuCard from "@/components/menu/MenuCard";
import { menu } from "@/data/menu";

export default function MenuPage() {
  return (
    <main className="p-8">
      
      <MenuCard
        src={menu[0].items[0].photo}
        alt={menu[0].items[0].name}
        name={menu[0].items[0].name}
        description={menu[0].items[0].description}
        fullDescription={menu[0].items[0].fullDescription}
        price={menu[0].items[0].price}
      />
    </main>
  );
}
