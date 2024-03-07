"use client";

import { useState } from "react";

import ReactCompareImage from "react-compare-image";

import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player/vimeo"), { ssr: false });

// Images
import Image1 from "../../../public/image_apartment.jpeg";
import Image2 from "../../../public/image_apartment6.webp";
import Image3 from "../../../public/image_apartment3.png";
import Image4 from "../../../public/image_apartment4.png";
import Image5 from "../../../public/image_apartment5.jpeg";
import Image6 from "../../../public/image_apartment6.jpeg";
import Image7 from "../../../public/image_apartment6.webp";
import Image8 from "../../../public/image_apartment.jpeg";

import ServicesCarousel from "./tabsContent/ServicesCarousel";

export default function Tabs() {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const tabLabels = [
    "Āriene",
    "Interjers",
    "Animācijas",
    "Pirms un Pēc",
    "Produktu vizualizācijas",
  ];

  return (
    <section id="click_tabs" className="py-16 sm:py-20">
      <div className="flex flex-col text-center mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="">
          <h2 className="text-5xl py-8 font-medium">VIZUALIZĀCIJAS SERVISI</h2>
        </div>
        <div className="">
          <div className="flex flex-row items-center">
            <div className="mx-24 grow tab-buttons grid grid-flow-col text-center items-center text-gray-500 bg-gray-100 rounded-lg p-1">
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
              <div className="grid grid-cols-3">
                <div className="col-start-1 col-end-3">
                  <ServicesCarousel images={[Image1, Image2, Image3, Image4]} />
                </div>
                <div className="flex flex-col justify-end px-10 text-left">
                  <p className="pb-12">
                    Izveidojiet vēlmi un stāstu par savu vēl neuzcelto projektu.
                    Patiesi detalizēta digitālā vide atspoguļos jūsu turpmākās
                    attīstības labākās iezīmes.
                  </p>
                  <div>
                    <a href="/contact" className="text text-2xl">
                      Piesakies
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className={activeTab === 1 ? "animate-fade block" : "hidden"}>
              <div className="grid grid-cols-3">
                <div className="col-start-1 col-end-3">
                  <ServicesCarousel images={[Image5, Image6, Image7, Image8]} />
                </div>
                <div className="flex p-4 text-left items-end">
                  <p>
                    Izveidojiet vēlmi un stāstu par savu vēl neuzcelto projektu.
                    Patiesi detalizēta digitālā vide atspoguļos jūsu turpmākās
                    attīstības labākās iezīmes.
                  </p>
                </div>
              </div>
            </div>
            <div className={activeTab === 2 ? "animate-fade block" : "hidden"}>
              <div className="grid grid-cols-3">
                <div className="col-start-1 col-end-3">
                  <div className="relative aspect-w-16 aspect-h-9">
                    {" "}
                    <ReactPlayer
                      url="https://vimeo.com/917278056"
                      controls
                      muted
                      playing
                      loop
                      //   className="absolute top-0 left-0 w-full h-full"
                      width="100%"
                      height="100%"
                      style={{ height: "auto", aspectRatio: "16/9" }}
                      config={{
                        vimeo: {
                          playerOptions: {
                            quality: "1080p",
                          },
                        },
                      }}
                    />
                  </div>
                </div>
                <div className="flex p-4 text-left items-end">
                  <p>
                    Izveidojiet vēlmi un stāstu par savu vēl neuzcelto projektu.
                    Patiesi detalizēta digitālā vide atspoguļos jūsu turpmākās
                    attīstības labākās iezīmes.
                  </p>
                </div>
              </div>
            </div>
            <div className={activeTab === 3 ? "animate-fade block" : "hidden"}>
              <div className="grid grid-cols-3">
                <div className="col-start-1 col-end-3">
                  <ReactCompareImage
                    leftImage={Image1.src}
                    rightImage={Image3.src}
                  />
                </div>
                <div className="flex p-4 text-left items-end">
                  <p>
                    Izveidojiet vēlmi un stāstu par savu vēl neuzcelto projektu.
                    Patiesi detalizēta digitālā vide atspoguļos jūsu turpmākās
                    attīstības labākās iezīmes.
                  </p>
                </div>
              </div>
            </div>
            <div className={activeTab === 4 ? "animate-fade block" : "hidden"}>
              <div className="grid grid-cols-3">
                <div className="col-start-1 col-end-3">
                  <ServicesCarousel images={[Image1, Image2, Image3, Image4]} />
                </div>
                <div className="flex p-4 text-left items-end">
                  <p>
                    Izveidojiet vēlmi un stāstu par savu vēl neuzcelto projektu.
                    Patiesi detalizēta digitālā vide atspoguļos jūsu turpmākās
                    attīstības labākās iezīmes.
                  </p>
                </div>
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
    <button
      className={
        isActive
          ? "text-primary-950 dark:text-primary-200 dark:bg-primary-400/10 bg-primary-500/10 border-b-2 border-b-primary-500 dark:border-b-primary-200  p-2"
          : "p-2 border-b-2 border-b-primary-200 dark:border-b-primary-500 text-primary-500 dark:text-primary-500"
      }
      onClick={onClick}
    >
      {label}
    </button>
  );
}
