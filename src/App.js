import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Todos from "./Todos";
import Todo from "./Todo";

import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>ToDo Project</h1>

      <Router>
        <Routes>
          <Route exact path="/" element={<Todos />} />
          <Route path="/todo/:id" element={<Todo />} />
        </Routes>
      </Router>
    </div>
  );
}
