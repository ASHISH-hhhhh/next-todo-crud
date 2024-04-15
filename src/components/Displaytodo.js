import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTodo, toggleTodo } from "@/app/redux/todoSlice";
import { nanoid } from "@reduxjs/toolkit";
function Displaytodo() {
  const todoList = useSelector((data) => data.todos);
  const dispatch = useDispatch();
  return (
    <div className="render-div-MP">
      {todoList &&
        todoList.map((item) => (
          <div
            style={{ backgroundColor: item.completed ? "green" : "red" }}
            className="render-div"
            key={nanoid()}
          >
            <p>Id : {item.id}</p>
            <p>Task : {item.task}</p>
            <p>Completed : {item.completed ? "True" : "False"}</p>
            <button onClick={() => dispatch(deleteTodo(item.id))}>
              Delete Todo
            </button>
            <button onClick={() => dispatch(toggleTodo(item.id))}>
              Mark as Completed
            </button>
          </div>
        ))}
    </div>
  );
}

export default Displaytodo;
