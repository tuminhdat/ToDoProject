import React from "react";
import { useNavigate } from "react-router-dom";

const TodoCard = (props) => {
  const { todo } = props;
  const { title, completed, id } = todo;

  // allow to make navigation
  const navigate = useNavigate();

  return (
    <div
      key={id}
      style={{
        backgroundColor: "grey",
        margin: "10px",
        padding: "15px",
        width: "150px"
      }}
      // passing request with id
      onClick={() => navigate(`/todo/${id}`)}
    >
      <h4> {title} </h4>
      {/* to print the true or false */}
      <h4> {`Completed: ${completed}`} </h4>
    </div>
  );
};

export default TodoCard;
