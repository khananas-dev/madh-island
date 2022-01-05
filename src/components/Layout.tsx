import { Box } from "@mui/system";
import React, { useState } from "react";
import Navigation from "./navbar/Navbar";
import Sidebar from "./Sidebar/Sidebar";

function Layout({ children }: any) {
  const [isOpen, setisOpen] = useState(false);
  const toggleSidebar = () => {
    setisOpen(!isOpen);
  };
  return (
    <Box sx={{ height: `100%` }}>
      <Sidebar isOpen={isOpen} toggleSidebar={() => setisOpen(!isOpen)} />
      <Navigation isOpen={isOpen} toggleSidebar={() => setisOpen(!isOpen)} />
      <Box sx={{ height: `calc(100vh - 80px)`, overflowX: `auto` }}>
        {children}
      </Box>
    </Box>
  );
}

export default Layout;
