import React, { useState } from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import Collapse from "@material-ui/core/Collapse";
import { useContext } from "react";
import ListCollapse from "./ListCollapse";
import useStyles from "./styles";
import LayoutContext from "../../context/LayoutContext";
const SidebarProps = (props) => {
  const [profileOpen, setProfileOpen] = useState(false);
  const [friendsOpen, setFriendsOpen] = useState(false);
  const [groupsOpen, setGroupsOpen] = useState(false);
  const [billsOpen, setBillsOpen] = useState(false);
  const { isOpen } = useContext(LayoutContext);
  const classes = useStyles();

  const handleProfileOpen = () => {
    setProfileOpen(!profileOpen);
  };

  const handleFriendOpen = () => {
    setFriendsOpen(!friendsOpen);
  };

  const handleGroupOpen = () => {
    setGroupsOpen(!groupsOpen);
  };

  const handleBillOpen = () => {
    setBillsOpen(!billsOpen);
  };

  let handle, open;
  switch (props.id) {
    case "Profile":
      handle = handleProfileOpen;
      open = profileOpen;
      break;
    case "Friends":
      handle = handleFriendOpen;
      open = friendsOpen;
      break;
    case "Groups":
      handle = handleGroupOpen;
      open = groupsOpen;
      break;
    case "Bills":
      handle = handleBillOpen;
      open = billsOpen;
      break;
    default:
      break;
  }

  let expandButton;
  if (props.sideBarOpen) {
    if (open) {
      expandButton = <ExpandLess />;
    } else {
      expandButton = <ExpandMore />;
    }
  } else {
    expandButton = "";
  }

  return (
    <div id={props.id}>
      <ListItem button onClick={handle}>
        <ListItemIcon style={{ minWidth: "2.5em" }}>
          {props.parrentIcon}
        </ListItemIcon>
        <ListItemText
          primary={props.id}
          style={{ marginLeft: "4px" }}
        />
        {expandButton}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <ListCollapse
          open={open}
          classes={classes}
          childIcon={props.childIcon}
          sideBarOpen={props.sideBarOpen}
        />
      </Collapse>
    </div>
  );
};

export default SidebarProps;
