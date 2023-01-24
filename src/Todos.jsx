import React, { useEffect, useState } from "react";
// library to call api request
import axios from "axios";
// create a circle progress rotate while the page is leaded
import CircularProgress from "@mui/material/CircularProgress";

import TodoCard from "./TodoCard";
import Todo from "./Todo";

const Todos = () => {
  const [todos, setTodos] = useState();

  // this effect will run first after the component is called
  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/todos`).then((res) => {
      const responseTodos = res.data;
      setTodos(responseTodos);
    });
    // with [] is empty, if the component is called or mounted again
    // this useEffect will only run once
  }, []);

  console.log(todos);
  return (
    <div>
      {/* if the page is loaded, print "Todos have been loaded" 
          else, create a rotated circle which represent the page is loading
      */}
      {todos ? (
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {/* Slice(0, 10) which will take first 10 record and do mapping */}
          {todos.slice(0, 10).map((todo) => (
            <TodoCard todo={todo} />
          ))}
        </div>
      ) : (
        <CircularProgress />
      )}
    </div>
  );
};

export default Todos;
