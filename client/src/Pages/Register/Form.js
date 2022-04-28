import { LoginSharp } from "@mui/icons-material";
import { Button, TextField, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useState } from "react";
import { registerUser } from "../../Services/registerUser";
import { RegisterForm } from "./styled.register";

const useStyles = makeStyles({
  input: {
    marginTop: ".2rem",
    padding: ".3rem",
  },
});

const Form = () => {
  // store user details in state
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");

  const classes = useStyles();
  return (
    <RegisterForm noValidate autoComplete="off">
      <TextField
        label="username"
        value={username}
        onChange={(event) => {
          setusername(event.target.value);
        }}
        className={classes.input}
      />
      <TextField
        label="password"
        value={password}
        type="password"
        onChange={(event) => {
          setpassword(event.target.value);
        }}
        className={classes.input}
      />
      <Button
        type="submit"
        variant="contained"
        sx={{ width: "100%", margin: "0 auto" }}
        onClick={(event) => {
          registerUser(event, username, password);
        }}
      >
        <Typography style={{ fontWeight: "bold", color: "white" }}>
          REGISTER
        </Typography>
        <LoginSharp style={{ color: "white" }} />
      </Button>
    </RegisterForm>
  );
};

export default Form;
