"use client";

import Link from "next/link";

export default function Nav() {
  return (
    <nav className=" fixed top-0 left-0 right-0 z-50 transition-colors duration-300 text-amber-50 px-4 py-3 flex items-center justify-between bg-[url('/images/background/bg-1.jpg')] bg-cover bg-center shadow-md">
      <div>
        <Link href="/">Mycoffee</Link>
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
