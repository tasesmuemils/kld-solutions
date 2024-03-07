import Hero from "@/components/home/Hero";
import Tabs from "@/components/home/Tabs";
import VideoTabs from "@/components/home/VideoTabs";
import Services from "@/components/home/Services";
import About from "@/components/home/About";
import Cta from "@/components/home/Cta";

export default function Home() {
  return (
    <div>
      <Hero />
      <Tabs />
      <VideoTabs />
      <Services />
      <About />
      <Cta />
    </div>
  );
}
