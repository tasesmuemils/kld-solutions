"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player/youtube"), {
  ssr: false,
});

export default function VideoTabs() {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const tabLabels = ["Aero", "Video montāža"];

  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="" data-aos="fade-up">
          <div className="flex flex-row items-center">
            <div className="">
              <h2 className="text-4xl pr-4">VIDEO</h2>
            </div>
            <div className="ml-14 grow tab-buttons grid grid-flow-col text-center items-center text-gray-500 bg-gray-100 rounded-lg p-1">
              {tabLabels.map((label, index) => (
                <Tab
                  key={index}
                  label={label}
                  isActive={index === activeTab}
                  onClick={() => handleTabClick(index)}
                />
              ))}
            </div>
          </div>
          <div className="tab-content animate-fade pt-5">
            <div className={activeTab === 0 ? "animate-fade block" : "hidden"}>
              <div className="relative aspect-w-16 aspect-h-9">
                {" "}
                <ReactPlayer
                  url="https://www.youtube.com/watch?v=4Aqn7ubbeIY"
                  controls={false}
                  muted
                  playing
                  loop
                  //   className="absolute top-0 left-0 w-full h-full"
                  width="100%"
                  height="100%"
                  style={{ height: "auto", aspectRatio: "16/9" }}
                  // config={{
                  //   vimeo: {
                  //     playerOptions: {
                  //       quality: "1080p",
                  //     },
                  //   },
                  // }}
                />
              </div>
            </div>
            <div className={activeTab === 1 ? "animate-fade block" : "hidden"}>
              <div className="relative aspect-w-16 aspect-h-9">
                {" "}
                <ReactPlayer
                  url="https://www.youtube.com/watch?v=my7M3RlUMmw"
                  controls={false}
                  muted
                  playing
                  loop
                  //   className="absolute top-0 left-0 w-full h-full"
                  width="100%"
                  height="100%"
                  style={{ height: "auto", aspectRatio: "16/9" }}
                  // config={{
                  //   vimeo: {
                  //     playerOptions: {
                  //       quality: "1080p",
                  //     },
                  //   },
                  // }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Tab({ label, isActive, onClick }) {
  return (
    <a
      href={`/services`}
      className={
        isActive
          ? "text-primary-950 dark:text-primary-200 dark:bg-primary-400/10 bg-primary-500/10 hover:bg-primary-500/10 dark:hover:bg-primary-400/10 border-b-2 p-2"
          : "p-2 text-primary-400 dark:text-primary-500"
      }
      onMouseEnter={onClick}
    >
      {label}
    </a>
  );
}
