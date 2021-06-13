import React, { useState } from "react";
import {
  Grid,
  CircularProgress,
  Typography,
  Button,
  Tabs,
  Tab,
  TextField,
  Fade,
} from "@material-ui/core";
import { withRouter } from "react-router-dom";
import useStyles from "./styles";
import logo from "./logo.svg";
import axios from "axios";
import { authService } from "../../services/auth";
import { useDispatch } from "react-redux";
import { LOGIN } from "../../store/actions/types";

const Login = (props) => {
  const classes = useStyles();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [activeTabId, setActiveTabId] = useState(0);
  const [nameValue, setNameValue] = useState("");
  const [phoneValue, setPhoneValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const dispatch = useDispatch()
  axios.defaults.baseURL = "https://money-divider-app-be.herokuapp.com";

  const submitRegisterForm = async (e) => {
    e.preventDefault();
    const userRegisterInfo = {
      name: nameValue,
      phone: phoneValue,
      email: emailValue,
      password: passwordValue,
    };
    try {
      setIsLoading(true);
      const response = await axios.post("/user/register", userRegisterInfo);
      console.log(response);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  const submitLoginForm = async (e) => {
    e.preventDefault();
    const userLoginInfo = {
      email: loginEmail,
      password: loginPassword,
    };

    try {
      // setIsLoading(true);
      // const response = await axios.post("/user/login", userLoginInfo);
      // console.log(response);
      const { data } = await authService.login(userLoginInfo)
      localStorage.setItem('auth', JSON.stringify(data))
      dispatch({ type: LOGIN, payload: { data: data } })
      const queryParams = new URLSearchParams(window.location.search);
      const redirect = queryParams.get('redirect')
      redirect !== null ? props.history.push(redirect) : props.history.push('/my-profile')

    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }

  };

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
            indicatorColor="primary"
            textColor="primary"
            centered
          >
            <Tab label="Login" classes={{ root: classes.tab }} />
            <Tab label="New User" classes={{ root: classes.tab }} />
          </Tabs>
          {activeTabId === 0 && (
            <React.Fragment>
              <Typography variant="h1" className={classes.greeting}>
                Good Morning, User
              </Typography>
              <Fade in={error}>
                <Typography color="secondary" className={classes.errorMessage}>
                  Something is wrong with your login or password :(
                </Typography>
              </Fade>
              <form onSubmit={(e) => submitLoginForm(e)}>
                <TextField
                  id="email"
                  InputProps={{
                    classes: {
                      underline: classes.textFieldUnderline,
                      input: classes.textField,
                    },
                  }}
                  value={loginEmail}
                  onChange={(e) => setLoginEmail(e.target.value)}
                  margin="normal"
                  placeholder="Email Adress"
                  type="email"
                  fullWidth
                />

                <TextField
                  id="password"
                  InputProps={{
                    classes: {
                      underline: classes.textFieldUnderline,
                      input: classes.textField,
                    },
                  }}
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                  margin="normal"
                  placeholder="Password"
                  type="password"
                  fullWidth
                />

                <div className={classes.formButtons}>
                  {isLoading ? (
                    <CircularProgress
                      size={26}
                      className={classes.loginLoader}
                    />
                  ) : (
                    <Button
                      disabled={
                        loginEmail.length === 0 || loginEmail.length === 0
                      }
                      variant="contained"
                      color="primary"
                      size="large"
                      fullWidth={true}
                      type="submit"
                      value="Submit"
                    >
                      Login
                    </Button>
                  )}
                </div>
              </form>
            </React.Fragment>
          )}
          {activeTabId === 1 && (
            <React.Fragment>
              <Typography variant="h1" className={classes.greeting}>
                Welcome!
              </Typography>
              <Typography variant="h2" className={classes.subGreeting}>
                Create your account
              </Typography>
              <Fade in={error}>
                <Typography color="secondary" className={classes.errorMessage}>
                  Something is wrong with your login or password :(
                </Typography>
              </Fade>
              <form onSubmit={(e) => submitRegisterForm(e)}>
                <TextField
                  id="name"
                  InputProps={{
                    classes: {
                      underline: classes.textFieldUnderline,
                      input: classes.textField,
                    },
                  }}
                  value={nameValue}
                  onChange={(e) => setNameValue(e.target.value)}
                  margin="normal"
                  placeholder="Full Name"
                  type="text"
                  fullWidth
                />

                <TextField
                  id="email"
                  InputProps={{
                    classes: {
                      underline: classes.textFieldUnderline,
                      input: classes.textField,
                    },
                  }}
                  value={emailValue}
                  onChange={(e) => setEmailValue(e.target.value)}
                  margin="normal"
                  placeholder="Email Adress"
                  type="email"
                  fullWidth
                />
                <TextField
                  id="phone"
                  InputProps={{
                    classes: {
                      underline: classes.textFieldUnderline,
                      input: classes.textField,
                    },
                  }}
                  value={phoneValue}
                  onChange={(e) => setPhoneValue(e.target.value)}
                  margin="normal"
                  placeholder="Phone Number"
                  type="text"
                  fullWidth
                />
                <TextField
                  id="password"
                  InputProps={{
                    classes: {
                      underline: classes.textFieldUnderline,
                      input: classes.textField,
                    },
                  }}
                  value={passwordValue}
                  onChange={(e) => setPasswordValue(e.target.value)}
                  margin="normal"
                  placeholder="Password"
                  type="password"
                  fullWidth
                />

                <div className={classes.creatingButtonContainer}>
                  {isLoading ? (
                    <CircularProgress size={26} />
                  ) : (
                    <Button
                      disabled={
                        emailValue.length === 0 ||
                        passwordValue.length === 0 ||
                        nameValue.length === 0
                      }
                      size="large"
                      variant="contained"
                      color="primary"
                      fullWidth
                      className={classes.createAccountButton}
                      type="submit"
                      value="Submit"
                    >
                      Create your account
                    </Button>
                  )}
                </div>
              </form>
            </React.Fragment>
          )}
        </div>
      </div>
    </Grid>
  );
};

export default withRouter(Login);
