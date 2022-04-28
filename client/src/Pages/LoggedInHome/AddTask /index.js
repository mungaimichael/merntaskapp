import React, { useContext } from "react";

// import context provider
import { taskContext } from "../../../Contexts/textContext";

// import add task function
// import addTask from "../../../Services/addTask";
import { InputBox, TaskTextField } from "./AddTask.Styled";

const AddTask = () => {
  const { task, settask } = useContext(taskContext);

  return (
    <InputBox>
      <TaskTextField
        label="add task"
        name="task"
        sx={{ margin: ".5rem 1rem", width: "90%", padding: ".2rem" }}
        value={task}
        onChange={(event) => {
          settask(event.target.value);
        }}
        required
        variant="standard"
        color="secondary"
      />
    </InputBox>
  );
};

export default AddTask;
