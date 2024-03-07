import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AOSComponent({ children }) {
  useEffect(() => {
    AOS.init({
      duration: 500,
      easing: "ease-out-cubic",
      once: true,
      offset: 100,
    });
  }, []);

  return <>{children}</>;
}
