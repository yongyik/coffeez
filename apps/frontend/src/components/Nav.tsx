"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { useAuth } from "@/contexts/UserContext";

import { useEffect, useRef, useState } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const ticking = useRef(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  const { user } = useAuth();

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 50);

    const onScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          update();

          ticking.current = false;
        });
        ticking.current = true;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    update();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        open &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  return (
    <div>
      <nav
        className={` fixed top-0 left-0 right-0 z-50 transition-colors duration-300 text-amber-50 px-4 py-3 flex items-center justify-between
     ${scrolled ? "bg-[url('/images/background/bg-1.jpg')] bg-cover bg-center" : ""} shadow-md`}
      >
        <div>
          <Link href="/">Mycoffee</Link>
        </div>

        <ul className="hidden md:flex gap-6">
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

          {user ? (
            <li className="border border-amber-50 px-1 rounded-lg text-sm bg-amber-50/20">
              <Link href="/dashboard">{user.username}</Link>
            </li>
          ) : (
            <li className="border border-amber-50 px-1 rounded-lg text-sm bg-amber-50/20">
              <Link href="/login">登录/注册</Link>
            </li>
          )}
        </ul>
        <button
          ref={buttonRef}
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.nav
            ref={menuRef}
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 200 }}
            transition={{ duration: 0.3 }}
            className={`md:hidden fixed top-12 right-0 z-60 text-amber-50 bg-black/70`}
          >
            <ul className="flex flex-col gap-6 w-53 p-6">
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
              <li>
                <Link href="/login">登录</Link>
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  );
}
