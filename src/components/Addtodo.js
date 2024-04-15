import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "@/app/redux/todoSlice";

function Addtodo() {
  const dispatch = useDispatch();
  const [todo, setTodo] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.value = "";
  };
  const dispatchFunc = () => {
    if (todo.length < 3) {
      alert("Enter valid Task");
    } else {
      dispatch(addTodo(todo));
    }
  };
  return (
    <form className="add-Todo" onSubmit={handleSubmit}>
      <input
        className="input-field"
        value={todo}
        type="text"
        placeholder="Create Todo"
        onChange={(e) => setTodo(e.target.value)}
      />
      <button onClick={dispatchFunc}>Add Todo</button>
    </form>
  );
}

export default Addtodo;
