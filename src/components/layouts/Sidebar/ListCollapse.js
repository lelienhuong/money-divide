import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

const ListCollapse = (props) => {
  return (
    <List component="div" disablePadding>
      {props.childIcon.map((icon) => {
        return (
          <ListItem button className={props.classes.nested}>
            <ListItemIcon style={{ minWidth: "2.5em" }}>
              {icon.icon}
            </ListItemIcon>
            <ListItemText primary={icon.text} />
          </ListItem>
        );
      })}
    </List>
  );
};

export default ListCollapse;
