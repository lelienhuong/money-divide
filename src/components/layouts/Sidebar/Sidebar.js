import React, { useState } from "react";
import { useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import ReceiptIcon from "@material-ui/icons/Receipt";
import SidebarProps from "./SidebarProps";
import clsx from "clsx";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import useStyles from "./styles";

const Sidebar = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(!open);
  };

  return (
    <div>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </div>

        <List>
          <Divider />
          <SidebarProps
            id="Profile"
            parrentIcon={<AccountCircleIcon />}
            childIcon={[
              {
                icon: <AccountCircleIcon />,
                text: "Details",
              },
              {
                icon: <AccountCircleIcon />,
                text: "All my lends",
              },
              {
                icon: <AccountCircleIcon />,
                text: "All my borrows",
              },
            ]}
          />

          <SidebarProps
            id="Friends"
            parrentIcon={<PeopleAltIcon />}
            childIcon={[
              {
                icon: <AccountCircleIcon />,
                text: "Details",
              },
              {
                icon: <AccountCircleIcon />,
                text: "Details",
              },
              {
                icon: <AccountCircleIcon />,
                text: "Details",
              },
            ]}
          />

          <SidebarProps
            id="Groups"
            parrentIcon={<SupervisedUserCircleIcon />}
            childIcon={[
              {
                icon: <AccountCircleIcon />,
                text: "Details",
              },
              {
                icon: <AccountCircleIcon />,
                text: "Details",
              },
              {
                icon: <AccountCircleIcon />,
                text: "Details",
              },
            ]}
          />

          <SidebarProps
            id="Bills"
            parrentIcon={<ReceiptIcon />}
            childIcon={[
              {
                icon: <AccountCircleIcon />,
                text: "Details",
              },
              {
                icon: <AccountCircleIcon />,
                text: "Details",
              },
              {
                icon: <AccountCircleIcon />,
                text: "Details",
              },
            ]}
          />
        </List>
      </Drawer>
    </div>
  );
};

export default Sidebar;
