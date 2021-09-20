import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
  const [todo, setTodo] = useState("");
  const [todoArr, setTodoArr] = useState([]);

  useEffect(() => {
    const data = localStorage.getItem("todoList");
    if (data) {
      setTodoArr(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoArr));
  });

  const todoItem = {
    value: todo,
    completed: false,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo.length <= 0) {
      return;
    }

    setTodoArr([todoItem, ...todoArr]);
    setTodo("");
  };

  const handleToDelete = (delIndex) => {
    const filterTodoArr = todoArr.filter(
      (_elementTodo, ind) => ind !== delIndex
    );
    setTodoArr(filterTodoArr);
  };

  const handleCheckBox = (idx) => {
    const todoUpdated = todoArr.map((elementTodo, i) => {
      if (idx === i) {
        elementTodo.completed = !elementTodo.completed;
      }
      return elementTodo;
    });

    setTodoArr(todoUpdated);
  };

  return (
    <div className="App">
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          name="todo"
          id="todo"
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
        />
        <button style={{ margin: "10px" }} type="submit">
          Add
        </button>
      </form>
      <div>
        <p>My TODO List</p>
        {todoArr.map((todo, index) => (
          <div key={index}>
            <label
              className={todo.completed && "strike-through"}
              htmlFor="todocheck"
            >
              {todo.value}
            </label>
            <input
              type="checkbox"
              name="todocheck"
              id="todocheck"
              checked={todo.completed}
              onChange={(e) => handleCheckBox(index)}
            />
            <button
              style={{ margin: "10px" }}
              onClick={(e) => handleToDelete(index)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
