import Hero from "@/components/home/Hero";
import HomeSwiper from "@/components/home/HomeSwiper";
import ImageLinkSection from "@/components/home/ImageLinkSection";

export default function HomePage() {
  return (
    <div className="text-amber-50">
      <Hero
        src="/images/home/hero.jpg"
        alt="桌子和咖啡"
        title="手工烘焙 · 一杯温暖你的咖啡"
        desc="「我们是一家位于市中心的小咖啡馆，精选咖啡豆，用心冲泡每一杯。」"
      />
      <h2 className="text-3xl text-center p-5">推荐饮品</h2>
      <HomeSwiper />
      <ImageLinkSection
        href="/about#story"
        src="/images/home/link-story.jpg"
        alt="一个人在拉花"
        text="我们的故事"
      />
      <ImageLinkSection
        href="/about#space"
        src="/images/home/link-space.jpg"
        alt="一个人在拉花"
        text="我们的环境"
      />
      <ImageLinkSection
        href="/about#team"
        src="/images/home/link-team.jpg"
        alt="一个人在拉花"
        text="我们的团队"
      />
    </div>
  );
}
