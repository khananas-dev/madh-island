import { Typography, Grid, Box } from "@mui/material";
import React from "react";
import theme from "../../theme";
import Image from "next/image";
import { getStoreFilters, setStoreFilters } from "../../utils/localStorage";
import NavLink from "../../components/navbar/Navlink";
import { useRouter } from 'next/router'
function OurServiceSection({ serviceList }: any) {

  // States

  // Variables
  const router = useRouter()

  // Functions
  const setFilter = (serviceType: string) => {
    let searchFilters = getStoreFilters();
    searchFilters.serviceType = serviceType;
    setStoreFilters(searchFilters);
  };
  return (
    <Box

      sx={{
        borderRadius: 8,
        [theme.breakpoints.down("md")]: {
          marginTop: `40px`,
        },
        [theme.breakpoints.up("md")]: {
          marginTop: `80px`,
        },
      }}
    >
      <Typography
        variant="h2"
        component="h2"
        color="primary"
        textAlign="left"
        sx={{
          margin: "0px 0px 20px 0px",
        }}
      >
        Services
      </Typography>

      <Grid container spacing={2}>
        {
          serviceList &&
          serviceList.map((service: any, index: number) => (
            <Grid
              key={`service-${index}`}
              item
              xs={12}
              md={3}
            >
              <div
              className="service-card"
                onClick={
                  () => {
                    setFilter(service.route);
                    router.push({
                      pathname: "/propertieslist/",
                        query: {
                          serviceType: service.route,
                        }
                    })
                  }
                }
                >
                <Image
                  className="service-img"
                  src={service?.imageUrl || "https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"}
                  width={150}
                  height={100}
                  layout="responsive"
                />
                <Typography
                  variant="h5"
                  component="h5"
                  color="primary"
                  textAlign="center"
                  sx={{
                    margin: "20px 0px 30px 0px",
                  }}
                >
                  {service.title}
                </Typography>
              </div>

            </Grid>
          ))
        }

        {/* <Grid item xs={12} md={3}>
          <Image
            src="https://images.unsplash.com/photo-1615574687763-200d8561284e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            width={150}
            height={100}
            layout="responsive"
          />
          <Typography
            variant="h5"
            component="h5"
            color="primary"
            textAlign="center"
          >
            Film Locations
          </Typography>
        </Grid>
        <Grid item xs={12} md={3}>
          <Image
            src="https://images.unsplash.com/photo-1425421598808-4a22ce59cc97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
            width={150}
            height={100}
            layout="responsive"
          />
                    <Typography
            variant="h5"
            component="h5"
            color="primary"
            textAlign="center"
          >
            Event Venues
          </Typography>
        </Grid>
        <Grid item xs={12} md={3}>
        <Image
            src="https://images.unsplash.com/photo-1623298317883-6b70254edf31?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            width={150}
            height={100}
            layout="responsive"
          />
          <Typography
            variant="h5"
            component="h5"
            color="primary"
            textAlign="center"
          >
            Villa and Bunglows
          </Typography>
        </Grid> */}
      </Grid>
    </Box>
  );
}

export default OurServiceSection;
