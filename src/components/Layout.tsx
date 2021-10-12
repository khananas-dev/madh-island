import React, { useState } from "react";
import Navigation from "./navbar/Navbar";
import Sidebar from "./sidebar/Sidebar";

function Layout({ children }: any) {
  const [isOpen, setisOpen] = useState(false);
  const toggleSidebar = () => {
      console.log(isOpen)
    setisOpen(!isOpen);
  };
  return (
    <div>
      <Sidebar isOpen={isOpen} toggleSidebar={()=>(setisOpen(!isOpen))} />

      <Navigation isOpen={isOpen} toggleSidebar={()=>(setisOpen(!isOpen))} />
      {children}
    </div>
  );
}

export default Layout;
