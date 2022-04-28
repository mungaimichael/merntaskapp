import React, { useEffect, useContext } from "react";
import AddDescription from "./AddDescrip";
import AddTask from "./AddTask ";
import {
  AddDescriptionsWrapper,
  AddTasksWrapper,
  ExistingTasksWrapper,
  HomePageContentWrapper,
  MainHomePageWrapper,
} from "./LoggedHome.Elements";

// import task fetch funtion to run at first reload

// import { fetchTasks } from "../../Services/fetchTasks";

// import task context
import { taskContext } from "../../Contexts/textContext";
import axios from "axios";
import AllTasksComponent from "./Tasks";

const LoggedInHomePage = () => {
  const { settasksArray } = useContext(taskContext);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        // get token from local storage
        let token = localStorage.getItem("access_token");

        const res = await axios.get(
          "http://localhost:8086/api/taskmern/tasks/all",
          {
            headers: {
              authorization: `Bearer ${token}`,
            },
          }
        );
        const tasks = await res.data;
        console.log(res);
        settasksArray(tasks);
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchTasks();
  }, [settasksArray]);
  return (
    <MainHomePageWrapper>
      <HomePageContentWrapper>
        <ExistingTasksWrapper style={{ color: "white" }}>
          <AllTasksComponent />
        </ExistingTasksWrapper>
        <AddTasksWrapper>
          <AddTask />
        </AddTasksWrapper>
        <AddDescriptionsWrapper>
          <AddDescription />
        </AddDescriptionsWrapper>
      </HomePageContentWrapper>
    </MainHomePageWrapper>
  );
};

export default LoggedInHomePage;
