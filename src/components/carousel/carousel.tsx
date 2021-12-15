import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";
import { Box } from "@mui/system";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

function VMICarousel() {
  return (
    <Carousel
      swipeable
      infinite={true}
      autoPlay={false}
      autoPlaySpeed={12}
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
      <Box
      sx={{width:100,height:'250px'}}>

      <Image
        src="https://a0.muscache.com/im/pictures/929085db-c910-4332-a179-4134d259dfd8.jpg?im_w=1200"
        alt="Picture of the author"
        layout="fill"
        objectFit="contain"
        quality={100}
      />
      </Box>
      <Box>
      <Image
        src="https://a0.muscache.com/im/pictures/929085db-c910-4332-a179-4134d259dfd8.jpg?im_w=1200"
        alt="Picture of the author"
        layout="fill"
        objectFit="contain"
        quality={100}
      />
      </Box>
    
    </Carousel>
  );
}

export default VMICarousel;
