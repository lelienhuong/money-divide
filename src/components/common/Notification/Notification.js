import React from "react";
import { Button } from "@material-ui/core";
import {
  NotificationsNone as NotificationsIcon,
  ThumbUp as ThumbUpIcon,
  ShoppingCart as ShoppingCartIcon,
  LocalOffer as TicketIcon,
  BusinessCenter as DeliveredIcon,
  SmsFailed as FeedbackIcon,
  DiscFull as DiscIcon,
  Email as MessageIcon,
  Report as ReportIcon,
  Error as DefenceIcon,
  AccountBox as CustomerIcon,
  Done as ShippedIcon,
  Publish as UploadIcon,
} from "@material-ui/icons";
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CancelIcon from '@material-ui/icons/Cancel';
import { useTheme } from "@material-ui/styles";
import classnames from "classnames";

// styles
import useStyles from "./styles";

// components
import Typography from '@material-ui/core/Typography';

const typesIcons = {
  "e-commerce": <ShoppingCartIcon />,
  notification: <NotificationsIcon />,
  offer: <TicketIcon />,
  info: <ThumbUpIcon />,
  message: <MessageIcon />,
  feedback: <FeedbackIcon />,
  customer: <CustomerIcon />,
  shipped: <ShippedIcon />,
  delivered: <DeliveredIcon />,
  defence: <DefenceIcon />,
  report: <ReportIcon />,
  upload: <UploadIcon />,
  disc: <DiscIcon />,
};

export default function Notification({ variant, ...props }) {
  var classes = useStyles();
  var theme = useTheme();

  const icon = getIconByType(props.type);
  const iconWithStyles = React.cloneElement(icon, {
    classes: {
      root: classes.notificationIcon,
    },
    style: {
      color:
        variant !== "contained" &&
        theme.palette[props.color] &&
        theme.palette[props.color].main,
    },
  });
  const handleAccept = () => {
    alert("Accept")
  }
  const handleDelete = () => {
    alert("Delete")
  }
  return (
    <div style={{ width: "100%" }}>
      <div
        className={classnames(classes.notificationContainer, props.className, {
          [classes.notificationContained]: variant === "contained",
          [classes.notificationContainedShadowless]: props.shadowless,
        })}
        style={{
          backgroundColor:
            variant === "contained" &&
            theme.palette[props.color] &&
            theme.palette[props.color].main,
          alignItems:"flex-start"
        }}
      >
        <div
          className={classnames(classes.notificationIconContainer, {
            [classes.notificationIconContainerContained]: variant === "contained",
            [classes.notificationIconContainerRounded]: variant === "rounded",
          })}
          style={{
            backgroundColor:
              variant === "rounded" &&
              theme.palette[props.color],
              display:"block"
          }}
        >
          {iconWithStyles}
        </div>
        <div className={classes.messageContainer}>
          <Typography
            className={classnames({
              [classes.containedTypography]: variant === "contained",
            })}
            variant={props.typographyVariant}
            size={variant !== "contained" && !props.typographyVariant && "md"}
          >
            <span style={{ fontWeight: "bold" }}>Lien Huong</span> {props.message}
          </Typography>
          {/* {props.extraButton && props.extraButtonClick && (
          <Button
            onClick={props.extraButtonClick}
            disableRipple
            className={classes.extraButton}
          >
            {props.extraButton}
          </Button>
        )} */}
        <div style={{ width: "100%",marginTop:"0.5vw"}}>
        <Button onClick={handleAccept} style={{ color: "#39b539", fontWeight: "700",marginRight:"1vw" }}><CheckCircleIcon style={{ marginRight: "4px" }} /> Accept</Button>
        <Button onClick={handleDelete} style={{ color: "red", fontWeight: "700" }}><CancelIcon style={{ marginRight: "4px" }} /> Delete</Button>
        </div>
        </div>
      </div>
    </div>
  );
}

// ####################################################################
function getIconByType(type = "offer") {
  return typesIcons[type];
}
