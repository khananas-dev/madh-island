import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
import Image from "next/image";
import { Box } from "@mui/system";
import React, { Component } from "react";
import Slider from "react-slick";

// const responsive = {
//   superLargeDesktop: {
//     // the naming can be any, depends on you.
//     breakpoint: { max: 4000, min: 3000 },
//     items: 1,
//   },
//   desktop: {
//     breakpoint: { max: 3000, min: 1024 },
//     items: 1,
//   },
//   tablet: {
//     breakpoint: { max: 1024, min: 464 },
//     items: 1,
//   },
//   mobile: {
//     breakpoint: { max: 464, min: 0 },
//     items: 1,
//   },
// };

function VMICarousel({ imgList }: any) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
  };
  return (
    <div className="property-carousel">
      <Slider {...settings}>
        {imgList &&
          imgList.map((item: any, index: number) => (
            <div className="img-wrapper">
              <img src={item?.imageUrl} height={250} alt={item?.title} />
            </div>
          ))}
      </Slider>
    </div>
  );
}

export default VMICarousel;
