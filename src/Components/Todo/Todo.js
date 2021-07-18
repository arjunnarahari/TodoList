import React from "react";

const Todo = (props) => {
  const deleteItem = () => {
    props.deleteItem(props.id);
  };

  return (
    <div>
      <ol>
        <div className="todo_style">
          <i className="fa fa-times" aria-hidden="true" onClick={deleteItem} />
          <li>{props.items}</li>
        </div>
      </ol>
    </div>
  );
};

export default Todo;
