import { Box } from "@mui/system";
import React, { useState } from "react";
import Navigation from "./navbar/Navbar";
import Sidebar from "./Sidebar/Sidebar";

function Layout({ serviceList, children }: any) {
  const [isOpen, setisOpen] = useState(false);
  const toggleSidebar = () => {
    setisOpen(!isOpen);
  };
  return (
    <Box sx={{ height: `100%` }}>
      {/* {JSON.stringify(serviceList)} */}
      <Sidebar
        serviceCategoryList={serviceList}
        isOpen={isOpen}
        toggleSidebar={() => setisOpen(!isOpen)}
      />
      <Navigation
        isOpen={isOpen}
        serviceCategoryList={serviceList}
        toggleSidebar={() => setisOpen(!isOpen)}
      />
      {/* <Component {...pageProps} /> */}
      <Box sx={{ height: `calc(100vh - 80px)`, overflowX: `auto` }}>
        {children}
      </Box>
    </Box>
  );
}

export default Layout;
