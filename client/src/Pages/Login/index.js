import { Person, LoginSharp } from "@mui/icons-material";
import { Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import {
  LoginWrapper,
  LoginForm,
  LoginFormWrapper,
  LoginTextFieldsWrapper,
} from "./styled.elements";
import { Link } from "react-router-dom";

// import user login function

import loginUser from "../../Services/loginUser";

const Login = () => {
  // store user login data in state
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");

  return (
    <LoginWrapper>
      <LoginFormWrapper>
        <LoginForm
          onSubmit={(event) => {
            loginUser(event, username, password);
          }}
        >
          <Person sx={{ height: 170, width: 200 }} color="primary" />
          <LoginTextFieldsWrapper>
            <TextField
              label="username"
              name="username"
              color="primary"
              sx={{ margin: ".5rem 1rem", width: "90%" }}
              value={username}
              onChange={(event) => {
                setusername(event.target.value);
              }}
            />
            <TextField
              label="password"
              color="primary"
              name="password"
              sx={{ margin: "1rem 1rem", width: "90%" }}
              type="password"
              value={password}
              onChange={(event) => {
                setpassword(event.target.value);
              }}
            />
          </LoginTextFieldsWrapper>
          <Button
            type="submit"
            variant="contained"
            sx={{ width: "50%", margin: "0 auto" }}
          >
            <Typography style={{ fontWeight: "bold", color: "white" }}>
              LOGIN
            </Typography>
            <LoginSharp style={{ color: "white" }} />
          </Button>

          <Link style={{ marginTop: "1rem" }} to="/register">
            <Typography>don't have an account ? Sign up here</Typography>
          </Link>
        </LoginForm>
      </LoginFormWrapper>
    </LoginWrapper>
  );
};

export default Login;
