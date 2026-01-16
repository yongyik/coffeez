"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { menu } from "@/data/menu";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SwiperCard from "./SwiperCard";
import { motion } from "framer-motion";

interface MenuItem {
  name: string;
  description: string;
  fullDescription: string;
  photo: string;
  price: number;
  inSwiper: boolean;
}

export default function HomeSwiper() {
  const swiperItems: MenuItem[] = menu.flatMap((category) =>
    category.items.filter((item) => item.inSwiper)
  );

  return (
    <motion.div
      className="w-full max-w-6xl mx-auto"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        
        
        loop={true}
        speed={1600}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 1, spaceBetween: 5 },
          768: { slidesPerView: 2, spaceBetween: 30 },
          
        }}
      >
        {swiperItems.map((i) => (
          <SwiperSlide key={i.name}>
            <SwiperCard
              src={i.photo}
              alt={i.name}
              name={i.name}
              description={i.description}
              price={i.price}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  );
}
