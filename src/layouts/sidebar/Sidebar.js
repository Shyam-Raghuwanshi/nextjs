import React from "react";
import NextLink from "next/link";
import PropTypes from "prop-types";
import Link from "next/link";
import {
  Box,
  Drawer,
  useMediaQuery,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import FeatherIcon from "feather-icons-react";
import Menuitems from "./MenuItems";
import { useRouter } from "next/router";

const Sidebar = ({ isMobileSidebarOpen, onSidebarClose, isSidebarOpen }) => {
  const [open, setOpen] = React.useState(true);

  const lgUp = useMediaQuery((theme) => theme.breakpoints.up("lg"));

  const handleClick = (index) => {
    if (open === index) {
      setOpen((prevopen) => !prevopen);
    } else {
      setOpen(index);
    }
  };
  let curl = useRouter();
  const location = curl.pathname;

  const SidebarContent = (
    <>
      <Box >
        <Link href="">
          <div className="flex items-center" style={{
            "paddingTop": "49px",
            "paddingBottom": "30px",
            "color": "#03c9d7"
          }} >
            <img className="brightness-50 cursor-pointer h-14" src="/logo.png" alt="img" srcSet="" />
            <span style={{ "textShadow": "2px 1px #00f0ff" }} className="cursor-pointer text-xl font-extrabold underline pb-4 "> CodesWear Admin </span>
          </div>
        </Link>
        <Box >
          <List>
            {Menuitems.map((item, index) => (
              <List component="li" disablePadding key={item.title}>
                <NextLink href={item.href}>
                  <ListItem
                    onClick={() => handleClick(index)}
                    button
                    selected={location === item.href}
                    sx={{
                      mb: 1,
                      ...(location === item.href && {
                        color: "white",
                        backgroundColor: (theme) =>
                          `${theme.palette.primary.main}!important`,
                      }),
                    }}
                  >
                    <ListItemIcon>
                      <FeatherIcon
                        style={{
                          color: `${location === item.href ? "white" : ""} `,
                        }}
                        icon={item.icon}
                        width="20"
                        height="20"
                      />
                    </ListItemIcon>

                    <ListItemText onClick={onSidebarClose}>
                      {item.title}
                    </ListItemText>
                  </ListItem>
                </NextLink>
              </List>
            ))}
          </List>
        </Box>

      </Box >
    </>
  );
  if (lgUp) {
    return (
      <Drawer
        anchor="left"
        open={isSidebarOpen}
        variant="persistent"
        PaperProps={{
          sx: {
            width: "265px",
            border: "0 !important",
            boxShadow: "0px 7px 30px 0px rgb(113 122 131 / 11%)",
          },
        }}
      >
        {SidebarContent}
      </Drawer>
    );
  }
  return (
    <Drawer
      anchor="left"
      open={isMobileSidebarOpen}
      onClose={onSidebarClose}
      PaperProps={{
        sx: {
          width: "265px",
          border: "0 !important",
        },
      }}
      variant="temporary"
    >
      {SidebarContent}
    </Drawer>
  );

};

Sidebar.propTypes = {
  isMobileSidebarOpen: PropTypes.bool,
  onSidebarClose: PropTypes.func,
  isSidebarOpen: PropTypes.bool,
};

export default Sidebar;
