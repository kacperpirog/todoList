import React, { Component } from "react";
import AddTodoForm from "../components/AddTodoForm/AddTodoForm.js";
import TodoList from "../components/TodoList/TodoList.js";

class App extends Component {
  state = {
    todos: [],

    inputValue: "",
  };
  // editTask = this.editTask.bind(this);

  addTodoUsers = (e) => {
    e.preventDefault();
    // console.log(e.target.nameTodo.value);
    // console.log(e.target.ageTodo.value);
    const newTodoUsers = {
      id: Math.floor(Math.random() * 100),
      name: e.target.nameTodo.value,
      age: e.target.ageTodo.value,
      complete: false,
      isEditing: false,
    };
    console.log(newTodoUsers);

    this.setState({
      todos: [...this.state.todos, newTodoUsers],
    });

    e.target.reset();
  };

  completeTodo = (todoId) => {
    const mappedTodos = this.state.todos.map((todo) => {
      if (todo.id === todoId) {
        return {
          ...todo,
          complete: !todo.complete,
        };
      } else {
        return todo;
      }
    });

    this.setState({
      todos: [...mappedTodos],
    });
  };

  deleteTodo = (delateId) => {
    const filterTodo = this.state.todos.filter((todo) => todo.id !== delateId);
    this.setState({
      todos: filterTodo,
    });
  };

  editTodo = (todoId) => {
    const mappedTodos = this.state.todos.map((todo) => {
      if (todo.id === todoId) {
        return {
          ...todo,
          isEditing: !todo.isEditing,
        };
      } else {
        return todo;
      }
    });

    this.setState({
      todos: [...mappedTodos],
    });
  };

  hendleInputChange = (e) => {
    this.setState({
      inputValue: e.target.value,
    });
  };

  handleTodoChange = (e, todoId, keyToChange) => {
    const mappedTodos = this.state.todos.map((todo) => {
      if (todo.id === todoId) {
        return {
          ...todo,
          [keyToChange]: e.target.value,
        };
      } else return todo;
    });

    this.setState({
      todos: [...mappedTodos],
    });
  };

  handleTodoTitleChange = (e, todoId) => {
    const mappedTodos = this.state.todos.map((todo) => {
      if (todo.id === todoId) {
        return {
          ...todo,
          name: e.target.value,
        };
      } else return todo;
    });

    this.setState({
      todos: [...mappedTodos],
    });
  };

  handleImputContentChange = (e, todoId) => {
    const mappedTodos = this.state.todos.map((todo) => {
      if (todo.id === todoId) {
        return {
          ...todo,
          age: e.target.value,
        };
      } else return todo;
    });

    this.setState({
      todos: [...mappedTodos],
    });
  };
  handleImputContentChange = (e, todoId) => {
    const mappedTodos = this.state.todos.map((todo) => {
      if (todo.id === todoId) {
        return {
          ...todo,
          age: e.target.value,
        };
      } else return todo;
    });

    this.setState({
      todos: [...mappedTodos],
    });
  };

  render() {
    return (
      <>
        <h1>TODO Users</h1>
        <AddTodoForm addTodoUsers={this.addTodoUsers} />
        <TodoList
          todos={this.state.todos}
          completeTodo={this.completeTodo}
          deleteTodo={this.deleteTodo}
          editTodo={this.editTodo}
          handleTodoChange={this.handleTodoChange}
          handleTodoTitleChange={this.handleTodoTitleChange}
          handleImputContentChange={this.handleImputContentChange}
        />
      </>
    );
  }
}

export default App;
