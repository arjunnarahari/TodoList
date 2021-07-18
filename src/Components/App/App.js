import React, { useState } from "react";
import TodoList from "../TodoList/TodoList";
import "./App.css";

const App = () => {
  const [inputTodo, setInputTodo] = useState("");
  const [items, setItems] = useState([]);

  const onInputChangeHolder = (event) => {
    setInputTodo(event.target.value);
  };

  const onAddItemHandler = (event) => {
    event.preventDefault();
    setItems((oldItems) => {
      return [...oldItems, inputTodo];
    });
    setInputTodo("");
  };

  const onDeleteItemHandler = (id) => {
    console.log("ondelete called");
    setItems((oldItems) => {
      return oldItems.filter((arrElem, index) => {
        return index !== id;
      });
    });
  };

  return (
    <div className="main_div">
      <div className="center_div">
        <br />
        <h1> Todo List </h1>
        <br />
        <input
          type="text"
          placeholder="Add item"
          value={inputTodo}
          onChange={onInputChangeHolder}
        />
        <button onClick={onAddItemHandler}>+</button>
        <TodoList items={items} onSelect={onDeleteItemHandler} />
      </div>
    </div>
  );
};

export default App;
