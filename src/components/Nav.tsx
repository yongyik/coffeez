"use client";

import Link from "next/link";

export default function Nav() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-amber-700 text-amber-50">
      <div>
        <Link href="/">MyApp</Link>
      </div>
      <ul className="flex gap-6">
        <li>
          <Link href="/">首页</Link>
        </li>
        <li>
          <Link href="/about">关于</Link>
        </li>
        <li>
          <Link href="/menu">菜单</Link>
        </li>
        <li>
          <Link href="/contact">联系</Link>
        </li>
      </ul>
    </nav>
  );
}
