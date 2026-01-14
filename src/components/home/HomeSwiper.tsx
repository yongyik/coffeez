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
        spaceBetween={5} // slide 之间的间距（单位 px）
        loop={true} // 开启循环播放（到最后一张后回到第一张）
        speed={1600} // 切换动画时长（单位 ms）
        autoplay={{
          // 自动播放设置
          delay: 2500, // 每张停留 2.5 秒
          disableOnInteraction: false, // 用户操作后是否停止自动播放（false = 不停止）
        }}
        pagination={{ clickable: true }} // 开启分页器（小圆点）
        navigation // 开启导航按钮（左右箭头）
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
