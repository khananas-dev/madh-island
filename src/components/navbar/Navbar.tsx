import React, { useContext, useEffect, useState } from "react";
import {
  Nav,
  NavMenu,
  NavBtn,
  Bars,
  SearchBoxContainer,
  StartGrid,
  CenterGrid,
  EndGrid,
  NavbarGridContainer,
} from "./NavbarElements";
import Link from "./Navlink";
import NavLink from "./Navlink";
import { SidebarProps } from "../props";
import Image from "next/image";
import logo from "../../../public/logo.png";
import ProfileAvatar from "../ProfileAvatar/ProfileAvatar";
import { Autocomplete } from "@mui/lab";
import {
  IconButton,
  TextField,
  Box,
  Container,
  Grid,
  Avatar,
  Menu,
  MenuItem,
  Modal,
  styled,
} from "@mui/material";
import { Search } from "@mui/icons-material";
import Login from "../../../src/components/Login/Login";
import { getStoreFilters, setStoreFilters } from "../../utils/localStorage";
import { ServiceCategory } from "../../services/serviceCategory/serviceCategory";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import AuthContext from "../../context/AuthContext";
const top100Films = [
  { label: "The Shawshank Redemption", year: 1994 },
  { label: "The Godfather", year: 1972 },
];
function Navigation(sideBarProps: SidebarProps) {
  // States
  const [showAutocomplete, setShowAutocomplete] = useState(false);
  const [jwt, setJwt] = useLocalStorage("jwt", null);
  const [loggedIn, setLoggedIn] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [open, setOpen] = useState(false);
  const [loginModel, setLoginModel] = React.useState(false);
  const [signupModel, setSignupModel] = React.useState(false);

  // Context
  const { authenticated, setAuthenticated } = useContext(AuthContext);

  // Variable
  const accountMenu = Boolean(anchorEl);

  // Funciton

  const OpenLoginForm = () => {
    setLoginModel(true);
  };
  const OpenSignupForm = () => {
    setLoginModel(false);
    setSignupModel(true);
  };

  const setFilter = (serviceType: string) => {
    let searchFilters = getStoreFilters();
    searchFilters.serviceType = serviceType;
    setStoreFilters(searchFilters);
  };

  const verifyAuth = () => {
    if (localStorage.getItem("jwt")) {
      // go to your dashboard or home route
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
    // stay on this route since the user is not authenticated
  };
  const handleOpen = () => {
    setAuthenticated(true);
    setOpen(true);
  };
  const handleClose = () => {
    setAuthenticated(false);
    setOpen(false);
  };

  const accountMenuHandleClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    setAnchorEl(event.currentTarget);
  };

  const accountMenuHandleClose = () => {
    setAnchorEl(null);
  };

  const logoutHandle = () => {
    // localStorage.setItem('jwt', 'null')
    setJwt(null);
    setAnchorEl(null);
  };

  const displayUserName = () => {
    let userName = localStorage.getItem("jwt");
    if (userName) {
      return JSON.parse(userName)?.firstName;
    } else {
      return "";
    }
  };

  // Effects
  // useEffect(() => {
  //   _getAllServiceList();
  // }, []);

  useEffect(() => {
    verifyAuth();
  }, [jwt]);

  return (
    <>
      <Nav style={{ height: 80 }}>
        <NavbarGridContainer container spacing={2}>
          <StartGrid item xs={6} md={3}>
            <NavLink href="/">
              <Image
                src={logo}
                width="175"
                height="60"
                alt="Logo of Visit Madh Island"
              />
            </NavLink>
          </StartGrid>
          <CenterGrid item xs={6} md={6}>
            <Bars onClick={sideBarProps.toggleSidebar} />
            <NavMenu>
              {sideBarProps?.serviceCategoryList &&
                sideBarProps?.serviceCategoryList.map(
                  (service: any, index: number) => (
                    <NavLink
                      key={index}
                      onClick={() => setFilter(service.route)}
                      href={{
                        pathname: "/propertieslist/",
                        query: {
                          serviceType: service.route,
                        },
                      }}
                    >
                      {service.title}
                    </NavLink>
                  )
                )}
            </NavMenu>
          </CenterGrid>
          <EndGrid item xs={12} md={3}>
            <SearchBoxContainer>
              {showAutocomplete && (
                <Autocomplete
                  style={{}}
                  id="combo-box-demo"
                  options={top100Films}
                  sx={{ width: 300 }}
                  renderInput={(params) => (
                    <TextField {...params} label="Search Property" />
                  )}
                />
              )}
              <IconButton
                color="primary"
                aria-label="Search Property"
                onClick={() => setShowAutocomplete(!showAutocomplete)}
              >
                <Search style={{ width: 24 }} />
              </IconButton>
            </SearchBoxContainer>
          </EndGrid>
        </NavbarGridContainer>
        {loggedIn && loggedIn ? (
          <Box>
            <IconButton onClick={accountMenuHandleClick}>
              <Avatar
                sx={{ bgcolor: "orange", textTransform: "uppercase" }}
                alt={displayUserName()}
                src="/broken-image.jpg"
              />
            </IconButton>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={accountMenu}
              onClose={accountMenuHandleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={logoutHandle}>Logout</MenuItem>
            </Menu>
          </Box>
        ) : (
          <IconButton onClick={handleOpen}>
            <Avatar src="/broken-image.jpg" />
          </IconButton>
        )}
      </Nav>

      <Modal
        open={authenticated}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <LoginWrapper>
          <Login jwt={jwt} setJwt={setJwt} handleClose={handleClose} />
        </LoginWrapper>
      </Modal>
    </>
  );
}

export default Navigation;

const LoginWrapper = styled(Box)`
  max-width: 510px;
  margin: 90px auto 0px auto;
  /* padding: 30px 20px; */
  border-radius: 16px;
  box-shadow: 0px 1px 1px rgba(110, 110, 110, 0.14),
    0px 2px 1px rgba(110, 110, 110, 0.12), 0px 1px 3px rgba(110, 110, 110, 0.2);
  background: white;
`;
