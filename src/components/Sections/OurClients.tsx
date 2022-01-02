import { Typography, Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { ClientService } from '../../services/clients/clientsService';
import Slider from "react-slick";

function OurClients() {
  // States
  const [clientList, setClientList] = useState<any>();

  // Variable
  const clientService = new ClientService();
  const list = [ 1,2,3,4,5,6,7,8,9,10,11];

  const settings = {
    dots: false,
    arrows: false,
    infinite: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 577,
        settings: {
          slidesToShow: 2,
        }
      }
    ]
  };

  // Functions

  const _getClientsList = () => {
    const clientListData = clientService.getClients();
    clientListData.then((res: any) => {
      if (!res?.data?.error) {
        // console.log(res.data.data);
        // #1. Adding the response into the state
        setClientList(res?.data?.data);

      }
    })
  }

  // Effects
  useEffect(() => {
    _getClientsList();
  }, []);

  return (
    <>
    <section className="section-client">
      <Typography
        variant="h2"
        component="h2"
        color="primary"
        textAlign="center"
        sx={{
          margin: "48px 0px 48px 0px",
        }}
      >
        Our Clients
      </Typography>
        {/* <Slider {...settings}>
          {
              clientList &&
              clientList.map((item:any, index:any)=>(
                // <Grid key={`client-${index}`} item xs={4} md={2}>
                //   <img className="client-img" src={item.imageUrl} alt={item?.title} title={item.title} />
                //   <span></span>
                // </Grid>
                <div className="client-card" key={`client-${index}`}>
                  <img src={item.imageUrl} alt={item?.title} title={item.title} />
                </div>
              ))
            }
        </Slider> */}
        <Slider {...settings}>
          {
              clientList &&
              clientList.map((item:any, index:any)=>(
                <div className="client-card" key={`client-${index}`}>
                  <img src={item.imageUrl} alt={item?.title} title={item.title} />
                </div>
              ))
            }
        </Slider>

      <Grid container spacing={2}>
        {/* {
          list &&
          list.map((item:any, index:any)=>(
            // <Grid key={`client-${index}`} item xs={4} md={2}>
            //   <img className="client-img" src={item.imageUrl} alt={item?.title} title={item.title} />
            //   <span></span>
            // </Grid>
            <Grid key={`client-${index}`} item xs={4} md={2}>
              <img className="client-img" src='https://upload.wikimedia.org/wikipedia/en/b/b1/THE_VIRAL_FEVER_OFFICIAL_LOGO.jpg' alt='' />
            </Grid>
          ))
        }
         */}
        {/* <Grid item xs={4} md={2}>
            <span>Some Icon</span>
          </Grid>
          <Grid item xs={4} md={2}>
            <span>Some Icon</span>
          </Grid>
          <Grid item xs={4} md={2}>
            <span>Some Icon</span>
          </Grid>
          <Grid item xs={4} md={2}>
            <span>Some Icon</span>
          </Grid>
          <Grid item xs={4} md={2}>
            <span>Some Icon</span>
          </Grid> */}
      </Grid>
      </section>
    </>
  )
}

export default OurClients
