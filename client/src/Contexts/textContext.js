import { useState, createContext } from "react";

export const taskContext = createContext();

export const TaskContextProvider = ({ children }) => {
  // state to store a task
  const [task, settask] = useState("");

  // state to handle task description
  const [description, setdescription] = useState("");

  // state to handle task completion
  // const [completed, setcompleted] = useState(false);

  // state to handle task priority
  const [priority, setpriority] = useState(true);

  // state to handle rask array
  const [tasksArray, settasksArray] = useState([]);

  // state to handle login or logout button
  const [navbarToggle, setnavbarToggle] = useState(false);

  return (
    <taskContext.Provider
      value={{
        task,
        settask,
        description,
        setdescription,
        priority,
        setpriority,
        tasksArray,
        settasksArray,
        navbarToggle,
        setnavbarToggle,
      }}
    >
      {children}
    </taskContext.Provider>
  );
};
