import "../assets/css/TodoList.css";
import TodoItem from "./TodoItem";
import useTodoStore from "../hooks/useTodoStore";
import { fetchTodos } from "../services/api";
import { useEffect } from "react";
import ClipLoader from "react-spinners/ClipLoader";

function TodoList() {
  const { todos, loadTodos, loading, error } = useTodoStore();

  // console.log(fetchTodos());

  useEffect(() => {
    loadTodos();
  }, [loadTodos]);

  if (error) {
    return (
      <div>
        <div style={{ textAlign: "center" }}>
          <span className="material-symbols-outlined">error</span>
          불편을 드려 죄송합니다.
        </div>
      </div>
    );
  }

  return (
    <div className="todo-list">
      <ClipLoader
        color="#38d9a9"
        loading={loading}
        cssOverride={{
          position: "fixed",
          top: "calc(50% - (35px / 2))",
          right: "calc(50% - (35px / 2))",
        }}
        size={35}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          text={todo.text}
          done={todo.done}
        />
      ))}
    </div>
  );
}

export default TodoList;
