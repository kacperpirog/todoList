import { React } from "react";

const TodoList = ({
  todos,
  completeTodo,
  deleteTodo,
  editTodo,
  handleImputContentChange,
  handleTodoTitleChange,
  handleTodoChcnge,
}) => {
  return (
    <ul>
      {todos.map((todo) => {
        const { id, name, age, isEditing, complete, handleTodoChange } = todo;
        return (
          <li
            key={id}
            style={{
              border: "2px solid",
              borderColor: "green",
              width: "500px",
              height: "100px",
              padding: "20px",
              margin: "10px",
            }}
          >
            {isEditing ? (
              <>
                <input
                  type="text"
                  placeholder="new todo name"
                  value={name}
                  onChange={(e) => handleTodoChange(e, id, "name")}
                />
                <textarea
                  placeholder="new todo age"
                  cols="30"
                  rows="10"
                  value={age}
                  onChange={(e) => handleTodoChange(e, id, "age")}
                />
              </>
            ) : (
              <>
                <h3
                  style={{
                    margin: "20px",
                    textDecoration: complete ? "line-through" : "none",
                  }}
                >
                  {name}
                </h3>
                <p
                  style={{
                    padding: "10px",
                    textDecoration: complete ? "line-through" : "none",
                  }}
                >
                  {age}
                </p>

                <button onClick={() => deleteTodo(id)}>Delete</button>
                <button onClick={() => completeTodo(id)}>
                  {complete ? "not complete" : "complete"}
                </button>
              </>
            )}

            <button onClick={() => editTodo(id)}>
              {isEditing ? "stop editing" : "edit"}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default TodoList;
