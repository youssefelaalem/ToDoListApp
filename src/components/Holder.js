import React from "react";
import { FormTodo } from "./FormTodo";
import { Todo } from "./Todo";
import EditFormTodo from "./EditFormTodo";
import { useSelector } from "react-redux";


export const Holder = () => {
  

  const state = useSelector((state) => state.todo);

 

  // const editTodo = (id) => {
  //   state.todos.map((todo) =>
  //     todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
  //   );
  // };

  const editTisk = (task, id) => {
    state.todos.map((todo) =>
      todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
    );
  };
  console.log(state.todos);

return (
  <div className="TodoWrapper">
    <h1>To Do List</h1>
    <FormTodo todo={state.todos}  />
    {state.todos.map(todo =>{
      return todo.isEditing ?(
        <EditFormTodo  editTodo={editTisk} task={todo} />
      ):(
        <Todo todo={todo} key={todo.id} />
      )

    })}
  </div>
);
};

/////////////////////////////

// const [todos, setTodos] = useState([]);

// const addTodo = (todo,describ) => {
//   const newTodo = {
//     id: uuidv4(), // Generate a unique ID
//     task: todo,
//     describe: describ,
//     completed: false,
//     isEditing: false,
//   };

//   // Set the new todo object in local storage
//   window.localStorage.setItem("todo_" + newTodo.id, JSON.stringify(newTodo));

//   // Add the new todo to the state
//   setTodos((oldTodos) => [...oldTodos, newTodo]);
// };

// const deleteByid = id => {
//   setTodos(todos.filter((todo) => todo.id !== id));
// };

// const editTodo= id=>{
//   setTodos(todos.map(todo => todo.id===id ?{...todo,isEditing :!todo.isEditing}:todo))
// }

// const editTisk=(task,id) =>{

//   setTodos(todos.map(todo=> todo.id ===id?{...todo,task,isEditing :!todo.isEditing}:todo))

// }
