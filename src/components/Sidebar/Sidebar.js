import React, { useContext, useState } from "react";
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
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import ViewListIcon from '@material-ui/icons/ViewList';
import SidebarProps from "./SidebarProps";
import clsx from "clsx";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import useStyles from "./styles";
import LayoutContext from "../../context/LayoutContext";
import { Typography } from "@material-ui/core";

const Sidebar = (props) => {
  const classes = useStyles();
  var { isOpen } = useContext(LayoutContext)
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
        }}>
        <div style={{display:"flex",alignItems:"center",marginTop:"15px",paddingLeft:"12px"}}>
          <img className={clsx(classes.logoSideBar)} src="/image/dollar.svg"/>
           <Typography className={clsx({[classes.hide]:!isOpen})} variant="h5">Money Divider</Typography>
        </div>
        {/* <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </div> */}

        <List>
          {/* <Divider /> */}
          <SidebarProps
            id="Profile"
            sideBarOpen={isOpen}
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
            sideBarOpen={isOpen}
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
            sideBarOpen={isOpen}
            parrentIcon={<SupervisedUserCircleIcon />}
            childIcon={[
              {
                icon: <ViewListIcon />,
                text: "Group List",
                path: '/my-profile/groups/groups-index'
              },
              {
                icon: <AddCircleOutlineIcon />,
                text: "Create new group",
                path: '/my-profile/groups/groups-create'
              }
            ]}
          />

          <SidebarProps
            id="Bills"
            sideBarOpen={isOpen}
            parrentIcon={<ReceiptIcon />}
            childIcon={[
              {
                icon: <ViewListIcon />,
                text: "Bills List",
                path: '/my-profile/bills/bills-index'
              },
              {
                icon: <AddCircleOutlineIcon />,
                text: "Create new bill",
                path: '/my-profile/bills/bills-create'
              }
            ]}
          />
        </List>
      </Drawer>
    </div>
  );
};

export default Sidebar;
