import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import type { AppProps } from "next/app";
import Head from "next/head";
import theme from "../src/theme";
import Layout from "../src/components/Layout";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../public/css/style.css'
import '../src/global.css'
 
 

export default function MyApp(props: AppProps) {
  const { Component, pageProps } = props;
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
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
     </React.Fragment>
  );
}
