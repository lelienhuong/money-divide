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
import Alert from "@material-ui/lab/Alert";
import AlertTitle from "@material-ui/lab/AlertTitle";
import { authService } from "../../services/auth";
import { useDispatch } from "react-redux";
import { REGISTER } from "../../store/actions/types";
import { useSelector } from "react-redux";
import useStyles from "./styles";

const RegisterTab = (props) => {
  const [nameValue, setNameValue] = useState("");
  const [phoneValue, setPhoneValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [registerError, setRegisterError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const classes = useStyles();
  const dispatch = useDispatch();
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
      const { data } = await authService.register(userRegisterInfo);
      localStorage.setItem("auth", JSON.stringify(data));
      dispatch({ type: REGISTER, payload: { data: data } });

      const queryParams = new URLSearchParams(window.location.search);
      const redirect = queryParams.get("redirect");
      redirect !== null
        ? props.history.push(redirect)
        : props.history.push("/my-profile");
    } catch (err) {
      if (err.response.status === 400) setRegisterError(true);
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  function validateEmail(email) {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  return (
    <React.Fragment>
      <Fade
        in={registerError}
        style={{
          marginTop: "32px",
          display: registerError ? "" : "none",
        }}
      >
        <Alert severity="error" variant="outlined">
          <AlertTitle>
            Register failed
            <br></br>
            The email is already existed
          </AlertTitle>
        </Alert>
      </Fade>
      <Typography variant="h1" className={classes.greeting}>
        Welcome!
      </Typography>
      <Typography variant="h2" className={classes.subGreeting}>
        Create your account
      </Typography>

      <form onSubmit={(e) => submitRegisterForm(e)} noValidate>
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
          error={!validateEmail(emailValue) && emailValue.length !== 0}
          value={emailValue}
          onChange={(e) => setEmailValue(e.target.value)}
          margin="normal"
          placeholder="Email Adress"
          type="email"
          helperText={
            !validateEmail(emailValue) && emailValue.length !== 0
              ? "Invalid email"
              : ""
          }
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
          error={!(passwordValue <= 6 && passwordValue !== 0)}
          helperText={
            passwordValue >= 6 && passwordValue !== 0
              ? "Password must be longer or equal to 6 digits"
              : ""
          }
          value={passwordValue}
          onChange={(e) => setPasswordValue(e.target.value)}
          margin="normal"
          placeholder="Password"
          type="password"
          fullWidth
        />

        <div className={classes.creatingButtonContainer}>
          {isLoading ? (
            <CircularProgress size={26} color="secondary" />
          ) : (
            <Button
              disabled={
                emailValue.length === 0 ||
                passwordValue.length === 0 ||
                nameValue.length === 0
              }
              size="large"
              variant="contained"
              color="secondary"
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
  );
};

export default RegisterTab;
