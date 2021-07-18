import React from "react";
import Todo from "../Todo/Todo";

const TodoList = (props) => {
  return (
    <div>
      {props.items.map((item, index) => {
        return (
          <Todo
            items={item}
            key={index}
            id={index}
            deleteItem={props.onSelect}
          />
        );
      })}
    </div>
  );
};

export default TodoList;
