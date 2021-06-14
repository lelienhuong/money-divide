import React, { useState } from "react";
import { Grid, Typography, Tabs, Tab, Fade } from "@material-ui/core";
import { withRouter } from "react-router-dom";
import useStyles from "./styles";
import logo from "./logo.svg";
import LoginTab from "./LoginTab";
import RegisterTab from "./RegisterTab";
import Alert from "@material-ui/lab/Alert";
import AlertTitle from "@material-ui/lab/AlertTitle";
import { useSelector } from "react-redux";
const Login = (props) => {
  const classes = useStyles();
  const [activeTabId, setActiveTabId] = useState(0);
  const { auth } = useSelector((state) => state);
  console.log(auth);
  return (
    <Grid container className={classes.container}>
      <div className={classes.logotypeContainer}>
        <img src={logo} alt="logo" className={classes.logotypeImage} />
        <Typography className={classes.logotypeText}>Material Admin</Typography>
      </div>

      <div className={classes.formContainer}>
        <div className={classes.form}>
          <Tabs
            value={activeTabId}
            onChange={(e, id) => setActiveTabId(id)}
            indicatorColor="secondary"
            textColor="info"
            centered
          >
            <Tab label="Login" classes={{ root: classes.tab }} />
            <Tab label="New User" classes={{ root: classes.tab }} />
          </Tabs>
          {activeTabId === 0 && <LoginTab history={props.history} />}
          {activeTabId === 1 && <RegisterTab history={props.history} />}
        </div>
      </div>
    </Grid>
  );
};

export default withRouter(Login);
