"use client";

import Lottie from "lottie-react";
import lootieAnimation from "./animation.json";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  return (
    <section className="pt-10 sm:pb-28">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 items-center">
          <div className="flex flex-col items-start gap-8 sm:gap-10">
            <div className="flex max-w-xl flex-col items-start gap-4 sm:gap-6">
              <h1
                className="text-4xl font-medium tracking-tight sm:text-5xl lg:text-6xl"
                data-aos="fade-right"
              >
                <TypeAnimation
                  sequence={[
                    // Same substring at the start will only be typed out once, initially
                    "Tavs sapnis",
                    1000, // wait 1s before replacing "Mice" with "Hamsters"
                    "Mūsu realitāte",
                    1000,
                    "kld solutions",
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  // style={{ fontSize: "2em", display: "inline-block" }}
                  repeat={Infinity}
                />
              </h1>
              <p
                className="text-primary-950/70 dark:text-primary-200/70 text-lg sm:text-xl"
                data-aos="fade-right"
                data-aos-delay="400"
              >
                Realizēsim jebkuras jūsu idejas
              </p>
            </div>
          </div>
          <div className="h-full w-full rounded-3xl">
            <Lottie animationData={lootieAnimation} loop={true} />
          </div>
        </div>
      </div>
    </section>
  );
}
