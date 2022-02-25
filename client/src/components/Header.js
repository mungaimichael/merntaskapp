import React, { useContext } from "react";
import axios from "axios";
import { todoContext } from "../context/TodoProvider";

// mui imports
import { TextField, Typography, InputAdornment } from "@mui/material";
import { Add } from "@mui/icons-material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  title: {
    fontFamily: "Montserrat",
    fontWeight: "900",
  },
  btn: {
    "&:hover": {
      cursor: "pointer",
    },
  },
});
const Header = () => {
  const { todoInput, settodoInput, todos, settodos } = useContext(todoContext);
  const classes = useStyles();

  // post todo function to DB and to todos state
  const addTodo = async () => {
    try {
      const todo = {
        task: todoInput,
        complete: false,
      };
      await axios.post("http://localhost:8083/api/todos/add", todo);
      settodos([...todos, { task: todoInput, completed: false }]);
      settodoInput("");
      console.log(todo);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Typography variant="h3" gutterBottom className={classes.title}>
        app header
      </Typography>
      <TextField
        value={todoInput}
        onChange={(event) => {
          settodoInput(event.target.value);
        }}
        gutterBottom
        variant="outlined"
        label="add a todo"
        fullWidth
        required
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <Add color="primary" onClick={addTodo} className={classes.btn} />
            </InputAdornment>
          ),
        }}
      />
    </>
  );
};

export default Header;
