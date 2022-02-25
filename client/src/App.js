import React from "react";
import Header from "./components/Header";
import { Container } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TodoProvider from "./context/TodoProvider";
import Todos from "./components/Todos";

const theme = createTheme();
const App = () => {
  return (
    <TodoProvider>
      <ThemeProvider theme={theme}>
        <Container maxWidth="sm">
          <Header />
          <Todos />
        </Container>
      </ThemeProvider>
    </TodoProvider>
  );
};

export default App;
