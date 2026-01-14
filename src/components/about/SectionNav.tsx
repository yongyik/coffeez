

interface Props{
    links: { href: string; label: string }[];
}

export default function SectionNav({ links }: Props) {
  return (
    <nav className="flex flex-col gap-0.5 p-0.5">
      {links.map((link) => (
        <a key={link.href} href={link.href} className="h-11 bg-amber-200 flex items-center justify-center">
          {link.label}
        </a>
      ))}
    </nav>
  );
}