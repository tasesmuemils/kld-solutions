import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function HomeCarousel({ images }) {
  if (images != undefined) {
    return (
      <Carousel
        autoPlay={true}
        // selectedItem={selectedIndex}
        infiniteLoop={true}
        interval={2000}
        showArrows={false}
        showStatus={false}
        showThumbs={false}
        showIndicators={false}
        stopOnHover={false}
      >
        <div>
          <Image src={images[0]} alt="" />
        </div>
        <div>
          <Image src={images[1]} alt="" />
        </div>
        <div>
          <Image src={images[2]} alt="" />
        </div>
        <div>
          <Image src={images[3]} alt="" />
        </div>
      </Carousel>
    );
  }
}
