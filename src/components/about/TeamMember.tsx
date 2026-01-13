import Image from "next/image";

interface Props {
  id: string;
  title: string;
  members: { src: string; alt: string; name: string; desc: string }[];
}

export default function TeamMember({ id, title, members }: Props) {
  return (
    <section id={id} className="p-7">
      <h2 className="text-4xl">{title}</h2>
      <ul>
        {members.map((m) => (
          <li key={m.name} className="py-7 flex flex-col gap-2.5">
            <Image
              src={m.src}
              alt={m.alt}
              width={333}
              height={333}
              className="w-full"
            />
            <h3 className="text-3xl">{m.name}</h3>
            <p>{m.desc}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
