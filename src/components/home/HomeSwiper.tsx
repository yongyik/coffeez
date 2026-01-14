"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { menu } from "@/data/menu";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SwiperCard from "./SwiperCard";

interface MenuItem {
  name: string;
  description: string;
  fullDescription: string;
  photo: string;
  price: number;
  inSwiper: boolean;
}

export default function HomeSwiper() {
  const swiperItems: MenuItem[] = [];
  menu.forEach((category) => {
    category.items.forEach((item) => {
      if (item.inSwiper) {
        swiperItems.push(item);
      }
    });
  });

  return (
    <div className="w-full max-w-3xl mx-auto">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={1}
        spaceBetween={5}
        loop={true}
        speed={1600}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        
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
    </div>
  );
}
