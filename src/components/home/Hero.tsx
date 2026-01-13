interface HeroProps {
  title: string;
  desc: string;
}
export default function Hero({ title, desc }: HeroProps) {
  return (
    <section className="p-5">
      <h1>{title}</h1>
      <p>{desc}</p>
    </section>
  );
}
