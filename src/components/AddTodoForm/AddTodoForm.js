import React from "react";

const AddTodoForm = ({ addTodoUsers }) => {
  return (
    <form onSubmit={addTodoUsers}>
      <input type="text" placeholder="Name" name="nameTodo"></input>
      <input type="number" placeholder="Age" name="ageTodo"></input>
      <button type="submit">Send</button>
    </form>
  );
};

export default AddTodoForm;
