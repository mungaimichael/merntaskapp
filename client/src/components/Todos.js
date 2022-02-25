import React, { useContext } from "react";
import { todoContext } from "../context/TodoProvider";

// mui imports
import { ButtonGroup, Button } from "@mui/material";
const Todos = () => {
  const { todos } = useContext(todoContext);
  return (
    <div>
      <ButtonGroup fullWidth>
        <Button variant="contained">all</Button>
        <Button variant="contained">completed</Button>
        <Button variant="contained">pending</Button>
      </ButtonGroup>
      <div>
        {todos.map((todo) => {
          return <h2>{todo.task}</h2>;
        })}
      </div>
    </div>
  );
};

export default Todos;
