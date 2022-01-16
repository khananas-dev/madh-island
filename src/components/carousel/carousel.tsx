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
      {/* <Carousel
        swipeable
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={1}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        arrows={false}
        minimumTouchDrag={50}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-10-px"
        draggable
        responsive={responsive}
      >
        {imgList &&
          imgList.map((item: any, index: number) => (
            // <Box
            //   key={`property-slide-${index}`}
            //   sx={{ width: 100, height: "250px" }}
            // >
            //   <Image
            //     src="https://a0.muscache.com/im/pictures/929085db-c910-4332-a179-4134d259dfd8.jpg?im_w=1200"
            //     // src={item?.img}
            //     alt="Picture of the author"
            //     layout="fill"
            //     objectFit="contain"
            //     quality={100}
            //   />
            // </Box>
            <div className="img-wrapper">
              <img src={item?.img} height={250} alt="Picture of the author" />
            </div>
          ))} */}

      {/* <Box>
        <Image
          src="https://a0.muscache.com/im/pictures/929085db-c910-4332-a179-4134d259dfd8.jpg?im_w=1200"
          alt="Picture of the author"
          layout="fill"
          objectFit="contain"
          quality={100}
        />
      </Box> */}
      {/* </Carousel> */}
      <Slider {...settings}>
        {imgList &&
          imgList.map((item: any, index: number) => (
            <div className="img-wrapper">
              <img src={item?.img} height={250} alt="Picture of the author" />
            </div>
          ))}
      </Slider>
    </div>
  );
}

export default VMICarousel;
