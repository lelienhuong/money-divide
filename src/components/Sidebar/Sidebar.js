import React, { useContext } from "react";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import ReceiptIcon from "@material-ui/icons/Receipt";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import ViewListIcon from "@material-ui/icons/ViewList";
import SidebarProps from "./SidebarProps";
import clsx from "clsx";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import useStyles from "./styles";
import LayoutContext from "../../context/LayoutContext";
import { Typography } from "@material-ui/core";
const Sidebar = (props) => {
  const classes = useStyles();
  const { isOpen } = useContext(LayoutContext);

  const SidebarDetails = [
    {
      id: "Profile",
      parrentIcon: <AccountCircleIcon />,
      childIcon: [
        {
          icon: <AccountCircleIcon />,
          text: "Details",
          path: "/my-profile",
        },
      ],
    },
    {
      id: "Friends",
      parrentIcon: <PeopleAltIcon />,
      childIcon: [
        {
          icon: <ViewListIcon />,
          text: "Friends list",
          path: "/my-profile/friends/friends-index",
        },
        {
          icon: <AddCircleOutlineIcon />,
          text: "Add friend",
          path: "/my-profile/friends/friends-create",
        },
      ],
    },
    {
      id: "Groups",
      parrentIcon: <SupervisedUserCircleIcon />,
      childIcon: [
        {
          icon: <ViewListIcon />,
          text: "Group List",
          path: "/my-profile/groups/groups-index",
        },
        {
          icon: <AddCircleOutlineIcon />,
          text: "Create new group",
          path: "/my-profile/groups/groups-create",
        },
      ],
    },
    {
      id: "Bills",
      parrentIcon: <ReceiptIcon />,
      childIcon: [
        {
          icon: <ViewListIcon />,
          text: "Bills List",
          path: "/my-profile/bills/bills-index",
        },
        {
          icon: <AddCircleOutlineIcon />,
          text: "Create new bill",
          path: "/my-profile/bills/bills-create",
        },
      ],
    },
  ];
  return (
    <div style={{ width: "fit-content" }}>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: isOpen,
          [classes.drawerClose]: !isOpen,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: isOpen,
            [classes.drawerClose]: !isOpen,
          }),
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginTop: "15px",
            paddingLeft: "12px",
          }}
        >
          <img
            className={clsx(classes.logoSideBar)}
            src="/image/dollar.svg"
            alt="logo"
          />
          <Typography
            className={clsx({ [classes.hide]: !isOpen })}
            variant="h5"
          >
            Money Divider
          </Typography>
        </div>

        <List component="div">
          {SidebarDetails.map((item) => (
            <SidebarProps
              id={item.id}
              sideBarOpen={isOpen}
              parrentIcon={item.parrentIcon}
              childIcon={item.childIcon}
              path={item.path}
              key={item.id}
            />
          ))}
        </List>
      </Drawer>
    </div>
  );
};

export default Sidebar;
