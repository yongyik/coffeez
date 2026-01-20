"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Instagram, Facebook, Mail, Phone, MapPin, Coffee } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[url('/images/background/bg-1.jpg')] bg-cover bg-center text-amber-100">
      <div className="px-6 py-12">
        <div>
          <div className="flex items-center py-3">
            <div className="rounded-2xl  p-3">
              <Coffee className="h-6 w-6" />
            </div>
            <div className="px-3">
              <h3 className="text-2xl font-semibold">Mycoffee</h3>
              <p className="text-sm text-amber-50">用心烘焙，每一杯都有温度</p>
            </div>
          </div>

          <p className="text-sm text-amber-100 py-3">
            我们专注手冲咖啡与自制甜点，欢迎到店坐下慢享。
          </p>

          <div className="flex items-center gap-3 py-2">
            <motion.a
              whileHover={{ scale: 1.08 }}
              href="mailto:hello@coffeeshop.example"
              aria-label="email"
              className="inline-flex items-center gap-2 text-slate-300 hover:text-white"
            >
              <Mail className="h-5 w-5" />
              <span className="text-sm">hello@coffeeshop.example</span>
            </motion.a>
          </div>
        </div>

        <div className="md:col-span-1 grid grid-cols-2 gap-6 py-1">
          <div>
            <h4 className="text-sm font-semibold mb-3">快速链接</h4>

            <ul className="space-y-2 text-amber-200 text-sm">
              <li>
                <Link href="/" className="hover:text-white">
                  首页
                </Link>
              </li>

              <li>
                <Link href="/about" className="hover:text-white">
                  关于我们
                </Link>
              </li>

              <li>
                <Link href="/menu" className="hover:text-white">
                  菜单
                </Link>
              </li>

              <li>
                <Link href="/contact" className="hover:text-white">
                  联系我们
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-3">营业时间</h4>

            <ul className="text-sm text-amber-200 ">
              <li>周一 - 周五: 07:30 - 19:00</li>
              <li>周六 - 周日: 08:00 - 20:00</li>
            </ul>

            <div className="mt-4">
              <h4 className="text-sm font-semibold mb-2">地址</h4>
              <p className="text-sm text-amber-200 flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-1" />
                123 咖啡街，小镇市，邮编 12345
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="pt-2">
            <h4 className="text-sm font-semibold mb-2">关注我们</h4>

            <div className="flex items-center gap-3">
              <motion.a
                whileHover={{ y: -3 }}
                href="#"
                className="rounded-md p-2 hover:bg-slate-800"
              >
                <Instagram className="h-5 w-5 text-slate-200" />
              </motion.a>

              <motion.a
                whileHover={{ y: -3 }}
                href="#"
                className="rounded-md p-2 hover:bg-slate-800"
              >
                <Facebook className="h-5 w-5 text-slate-200" />
              </motion.a>

              <motion.a
                whileHover={{ y: -3 }}
                href="tel:+1234567890"
                className="rounded-md p-2 hover:bg-slate-800"
              >
                <Phone className="h-5 w-5 text-slate-200" />
              </motion.a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-amber-100 ">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md: justify-between items-center gap-3 text-slate-100 text-sm">
          <p>© {new Date().getFullYear()} 小镇咖啡屋。保留所有权利。</p>

          <div className="flex items-center gap-4">
            <Link href="/privacy" className="hover:text-white">
              隐私政策
            </Link>
            <Link href="/terms" className="hover:text-white">
              使用条款
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
