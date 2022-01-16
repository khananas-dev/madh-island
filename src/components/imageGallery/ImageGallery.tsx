import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Masonry from "@mui/lab/Masonry";
import MasonryItem from "@mui/lab/MasonryItem";
import Image from "next/image";
import { Button, ImageList } from "@mui/material";
import ImageListItem from "@mui/material/ImageListItem";
import "react-bnb-gallery/dist/style.css";
import ReactBnbGallery from "react-bnb-gallery";
import useMediaQuery from "@mui/material/useMediaQuery";
import VMICarousel from "../carousel/carousel";

function ImageGallery({ imageList }: any) {
  const [isOpen, setIsOpen] = useState(false);
  const [activePhoto, setActivePhoto] = useState(0);
  const openLightbox = (index: number) => {
    setActivePhoto(index);
    setIsOpen(true);
  };
  return (
    // <Box sx={{ margin: `0px 64px`, height: `auto`, position: `relative` }}>
    //   <Box
    //     sx={{
    //       height: "250px",
    //       display: {
    //         md: "none",

    //         xs: "block",
    //       },
    //     }}
    //   >
    //     <VMICarousel />
    //   </Box>
    //   <Box
    //     sx={{
    //       display: {
    //         xs: "none",
    //         md: "block",
    //       },
    //     }}
    //   >
    //     <ImageList
    //       variant="masonry"
    //       cols={6}
    //       gap={10}
    //       sx={{
    //         minHeight: `fit-content`,
    //         maxHeight: `400px`,
    //         overflow: `hidden`,
    //       }}
    //     >

    //       {
    //         imageList &&
    //       imageList?.map((item:any, index:any) => (
    //         <ImageListItem key={item.img}>
    //           <img
    //             onClick={() => {
    //               openLightbox(index);
    //             }}
    //             src={`${item.imageUrl}`}
    //             //   srcSet={`${item.img}?w=348&fit=crop&auto=format&dpr=2 2x`}
    //             alt={item.title}
    //             loading="lazy"
    //           />
    //         </ImageListItem>
    //       ))}
    //       <Button
    //         variant="contained"
    //         color="info"
    //         sx={{
    //           position: `absolute`,
    //           background: "#EAFCF7",
    //           bottom: 0,
    //           color: "#191919",
    //           ":hover": {
    //             background: "#b9e2d6",
    //           },
    //           width: `150px`,
    //           right: `0px`,
    //         }}
    //         onClick={() => setIsOpen(true)}
    //       >
    //         View More
    //       </Button>
    //     </ImageList>
    //   </Box>
    //   {/* <pre>
    //       {JSON.stringify(imageList)}
    //       </pre> */}

    //   <ReactBnbGallery
    //     activePhotoIndex={activePhoto}
    //     show={isOpen}
    //     photos={
    //       imageList &&
    //       imageList?.map((item:any,index:any)=>(
    //         item?.imageUrl
    //       )
    //       )
    //     }
    //     onClose={() => setIsOpen(false)}
    //   />
    // </Box>
    <>
      <Box
        sx={{
          display: {
            xs: "none",
            sm: "block",
          },
        }}
      >
        <div className="img-gallery">
          <div className="grid-container">
            {itemData?.slice(0, 3)?.map((item: any, index: number) => (
              <div className={`item${index + 1}`}>
                <img
                  onClick={() => {
                    openLightbox(index);
                  }}
                  src={item?.img}
                  alt=""
                />
              </div>
            ))}
          </div>
          {imageList?.length > 3 ? (
            <a className="viewAll" onClick={() => setIsOpen(true)}>
              + <span>{itemData?.length} photos</span>
            </a>
          ) : null}
        </div>
      </Box>
      <Box
        sx={{
          height: "250px",
          display: {
            md: "none",

            xs: "block",
          },
        }}
      >
        <VMICarousel imgList={itemData} />
      </Box>

      <ReactBnbGallery
        activePhotoIndex={activePhoto}
        show={isOpen}
        photos={
          imageList && imageList?.map((item: any, index: any) => item?.imageUrl)
        }
        onClose={() => setIsOpen(false)}
      />
    </>
  );
}

export default ImageGallery;
const photosArray = [
  "https://images.unsplash.com/photo-1549388604-817d15aa0110",
  "https://images.unsplash.com/photo-1525097487452-6278ff080c31",
  "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6",
  "https://images.unsplash.com/photo-1563298723-dcfebaa392e3",
  "https://images.unsplash.com/photo-1588436706487-9d55d73a39e3",
  "https://images.unsplash.com/photo-1574180045827-681f8a1a9622",
];
const itemData = [
  {
    img: "https://vmi-assets.s3.us-east-2.amazonaws.com/property/61bfce8ff9552e100d65d7fb--5bf5fbbe-ab49-42db-bf43-6634315c3167.webp",
    title: "Bed",
  },
  {
    img: "https://vmi-assets.s3.us-east-2.amazonaws.com/property/61bfce8ff9552e100d65d7fb--5bf5fbbe-ab49-42db-bf43-6634315c3167.webp",
    title: "Books",
  },
  {
    img: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6",
    title: "Sink",
  },
  {
    img: "https://images.unsplash.com/photo-1563298723-dcfebaa392e3",
    title: "Kitchen",
  },
  {
    img: "https://images.unsplash.com/photo-1588436706487-9d55d73a39e3",
    title: "Blinds",
  },
  {
    img: "https://images.unsplash.com/photo-1574180045827-681f8a1a9622",
    title: "Chairs",
  },
  {
    img: "https://images.unsplash.com/photo-1530731141654-5993c3016c77",
    title: "Laptop",
  },
  {
    img: "https://images.unsplash.com/photo-1481277542470-605612bd2d61",
    title: "Doors",
  },
  {
    img: "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7",
    title: "Coffee",
  },
  {
    img: "https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee",
    title: "Storage",
  },
  {
    img: "https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62",
    title: "Candle",
  },
  {
    img: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4",
    title: "Coffee table",
  },
];
