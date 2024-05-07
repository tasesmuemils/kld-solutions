import Hero from "@/components/home/Hero";
import Tabs from "@/components/home/Tabs";
import VideoTabs from "@/components/home/VideoTabs";
import Services from "@/components/home/Services";
import About from "@/components/home/About";
import Cta from "@/components/home/Cta";
import GraphicsSection from "@/components/home/GraphicsSection";

export default function Home() {
  return (
    <div>
      <Hero />
      <GraphicsSection />
      {/* <Tabs /> */}
      {/* <VideoTabs /> */}
      <Services />
      <About />
      <Cta />
    </div>
  );
}
