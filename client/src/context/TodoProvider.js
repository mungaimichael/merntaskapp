import React, { useState, createContext, useEffect } from "react";
import axios from "axios";

export const todoContext = createContext();

const TodoProvider = ({ children }) => {
  // set todos from db to local state
  const [todos, settodos] = useState([]);

  // input value mapped to todoInput state
  const [todoInput, settodoInput] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("http://localhost:8083/api/todos");
      const data = await res.data;
      settodos(data);
    };
    fetchData();
  }, []);
  return (
    <todoContext.Provider value={{ todos, settodos, todoInput, settodoInput }}>
      {children}
    </todoContext.Provider>
  );
};

export default TodoProvider;
