"use client";

// Images
import Image from "next/image";
import Image1 from "../../../public/squere_image.jpeg";
import Image2 from "../../../public/vertical_image.jpeg";
import Image3 from "../../../public/image_apartment3.png";
import Image4 from "../../../public/image_apartment4.png";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function GraphicsSection() {
  // Using ref to capture container
  const container = useRef();
  const imageRef = useRef();

  useGSAP(
    () => {
      gsap.set(".image_item", { translateX: 0 }); // Sets initial state
      let leftImages = gsap.utils.toArray(".image_item");
      leftImages.forEach((element, i) => {
        console.log(element);
        gsap.from(element, {
          translateX: element.classList.contains("from_left_image")
            ? -element.offsetWidth
            : element.offsetWidth,
          duration: 1,
          scrollTrigger: {
            trigger: ".wrapper",
            //   toggleActions: "play none reverse none",
            end: "20%",
            scrub: true,
          },
        });
      });

      console.log(leftImages);
    },
    { scope: container }
  );

  return (
    <section className="py-28 sm:py-28" ref={container}>
      <div className="wrapper mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="relative flex flex-row flex-wrap">
          {/* TEXT */}
          <div className="absolute w-1/2 text-4xl">
            <div>
              <p>29 YEARS 30+ BRANDS</p>
            </div>
            <div>
              Our expertise is to cater every bit of fulfillment and to create
              sumptuous delights to your luxury home living.
            </div>
            <div>ABOUT KLD</div>
          </div>
          {/* IMAGES */}
          <div className="relative basis-full w-full">
            <div className="pl-[48%] flex flex-wrap items-baseline">
              <div
                className="image_item from_left_image absolute left-0 bottom-5 pl-0 p-4 w-[48%]"
                ref={imageRef}
              >
                {" "}
                <Image
                  src={Image3}
                  alt="first hero image"
                  className="rounded-2xl"
                />
              </div>
              <div
                className="image_item from_left_image p-4 w-3/12"
                ref={imageRef}
              >
                {" "}
                <Image
                  src={Image1}
                  alt="first hero image"
                  className=" rounded-2xl"
                />
              </div>
              <div className="image_item from_right_image p-4 w-9/12">
                {" "}
                <Image
                  src={Image2}
                  alt="first hero image"
                  className=" rounded-2xl"
                />
              </div>
              <div className="image_item from_right_image p-4 w-4/5">
                {" "}
                <Image
                  src={Image4}
                  alt="first hero image"
                  className=" rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
