import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

// create a circle progress rotate while the page is leaded
import CircularProgress from "@mui/material/CircularProgress";

const Todo = () => {
  // "id" will recieve from parameter that passing from request
  // and assign it to id
  const { id } = useParams();

  const [todoDetail, setTododetail] = useState();

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then((res) => {
        const responseTodo = res.data;
        setTododetail(responseTodo);
      });
  }, []);

  // || {} mean assign an empty value to the todoDetail if data was not fetch
  const { id: todoId, userId, title, completed } = todoDetail || {};

  return (
    <div>
      {todoDetail ? (
        <div>
          <h3> Todo ID: {todoId} </h3>
          <h3> User ID: {userId} </h3>
          <h3> Title: {title} </h3>
          <h3> {`Completed: ${completed}`} </h3>
        </div>
      ) : (
        <CircularProgress />
      )}
    </div>
  );
};

export default Todo;
