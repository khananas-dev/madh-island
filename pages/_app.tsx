import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import type { AppProps } from "next/app";
import Head from "next/head";
import theme from "../src/theme";
import Layout from "../src/components/Layout";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../public/css/style.css";
import "../src/global.css";
import { useEffect, useState } from "react";
import { ServiceCategory } from "../src/services/serviceCategory/serviceCategory";
import AuthContext from "../src/context/AuthContext";

export default function MyApp(props: AppProps) {
  // States\
  const [serviceList, setServiceList] = useState<any>();
  const [authenticated, setAuthenticated] = useState(false);

  // Variables
  const { Component, pageProps } = props;
  const serviceCategory = new ServiceCategory();

  // Functions

  // Effects
  const _getAllServiceList = () => {
    const serviceListData = serviceCategory.getServiceCategoryList();
    serviceListData.then((res: any) => {
      if (res.status == 200) {
        // console.log(res.data.data);
        // #1. Adding data in state in the for catergoryList
        setServiceList(res.data.data);
      }
    });
  };

  // Effects
  useEffect(() => {
    _getAllServiceList();
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>VisitsMadh Island</title>
        <link href="/favicon.ico" rel="icon" />
        <meta
          content="minimum-scale=1, initial-scale=1, width=device-width"
          name="viewport"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AuthContext.Provider value={{ authenticated, setAuthenticated }}>
          <Layout serviceList={serviceList}>
            <Component serviceList={serviceList} {...pageProps} />
          </Layout>
        </AuthContext.Provider>
      </ThemeProvider>
    </React.Fragment>
  );
}
