import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
// import register page
import Register from "./Pages/Register";

// import Home page
import Home from "./Pages/Home";
import Header from "./Pages/Home/Header/index";

import { ThemeProvider, createTheme } from "@mui/material";
import Login from "./Pages/Login";
import { green, grey } from "@mui/material/colors";
import LoggedInHomePage from "./Pages/LoggedInHome";

// import task context

import { TaskContextProvider } from "./Contexts/textContext";

// import NeedAuthRoutes from "./NeedAuthRoutes";,.
const theme = createTheme({
  typography: {
    fontFamily: "Quicksand",
  },
  palette: {
    primary: green,
    secondary: grey,
    background: {
      paper: "#E1E0E0",
    },
  },
});

const App = () => {
  return (
    <TaskContextProvider>
      <Router>
        <ThemeProvider theme={theme}>
          <>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} exact />
              <Route
                path="/taskmern/home"
                element={<LoggedInHomePage />}
                exact
              />
              <Route path="taskmern/login" element={<Login />} />
              <Route path="taskmern/register" element={<Register />} exact />
            </Routes>
          </>
        </ThemeProvider>
      </Router>
    </TaskContextProvider>
  );
};

export default App;
