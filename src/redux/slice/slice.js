import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const TodoListLocal =
  localStorage.getItem("todoListLocal") != null
    ? JSON.parse(localStorage.getItem("todoListLocal") ?? "")
    : [];
const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: TodoListLocal,
  },
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: uuidv4(), // Generate a unique ID
        task: action.payload.title,
        describe: action.payload.describe,
        completed: false,
        isEditing: false,
      };
      state.todos.push(newTodo);
      localStorage.setItem("todoListLocal", JSON.stringify(state.todos));
    },
    toggleCompleted: (state, action) => {
      const index = state.todos.findIndex(
        (todo) => todo.id === action.payload.id
      );
      state.todos[index].completed = action.payload.completed;
      localStorage.setItem("todoListLocal", JSON.stringify(state.todos));
    },
    deleteItem: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
      localStorage.setItem("todoListLocal", JSON.stringify(state.todos));
    },
    editTodo: (state, action) => {
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, isEditing: !todo.isEditing }
          : todo
      );
      localStorage.setItem("todoListLocal", JSON.stringify(state.todos));
    },
    editTisk: (state, action) => {
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, task: action.payload.title, isEditing: !todo.isEditing }
          : todo
      );
      localStorage.setItem("todoListLocal", JSON.stringify(state.todos));
    },
  },
});

export const { addTodo, toggleCompleted, deleteItem, editTodo, editTisk } =
  todoSlice.actions;
export default todoSlice;
