import React, { useContext } from "react";
import axios from "axios";
import styled from "styled-components";
import { taskContext } from "../../../Contexts/textContext";
import {
  Card,
  CardHeader,
  Grid,
  IconButton,
  Box,
  CardContent,
  Typography,
} from "@mui/material";

import { Check, DeleteOutline } from "@mui/icons-material";

const TaskCard = styled(Card)`
  text-decoration: ${({ completed }) => (completed ? "line-through" : "none")};
  opacity: ${({ completed }) => (completed ? ".4" : "1")};
`;

const AllTasksComponent = () => {
  // import local copy of tasks
  const { tasksArray, settasksArray } = useContext(taskContext);

  // function to handle completing a task
  const handleCompleteTask = async (id) => {
    try {
      const task = tasksArray.filter((task) => task._id === id)[0];
      // send edited task to local copy
      task.completed = !task.completed;
      settasksArray([...tasksArray], task);

      // get token from local storage
      let token = localStorage.getItem("access_token");

      // send edited task to db
      const res = await axios.put(
        `http://localhost:8086/api/taskmern/tasks/edit/${id}`,
        task,
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      );

      console.log(res.data);
    } catch (err) {
      console.log(err.message);
    }
  };

  // funtion to handle task delete
  const handleTaskDelete = async (id) => {
    try {
      // set array to new array without deleted task
      const newArr = tasksArray.filter((task) => task._id !== id);
      settasksArray(newArr);

      // get token from local storage
      let token = localStorage.getItem("access_token");

      // delete task from db
      const res = await axios.delete(
        `http://localhost:8086/api/taskmern/tasks/delete/${id}`,
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      );

      console.log(res.data);
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <>
      <Grid container spacing={2}>
        {tasksArray.map((task) => {
          return (
            <Grid key={task._id} item md={3} xs={12} sm={6}>
              <TaskCard
                completed={task.completed ? 1 : 0}
                sx={{
                  paddingRight: ".6rem",
                }}
              >
                <CardHeader
                  action={
                    <Box>
                      <IconButton
                        onClick={() => {
                          handleCompleteTask(task._id);
                          console.log(task._id);
                        }}
                        color="primary"
                      >
                        <Check />
                      </IconButton>
                      <IconButton onClick={() => handleTaskDelete(task._id)}>
                        <DeleteOutline color="error" />
                      </IconButton>
                    </Box>
                  }
                  title={task.task}
                />
                <CardContent>
                  <Typography>{task.description}</Typography>
                </CardContent>
              </TaskCard>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default AllTasksComponent;
