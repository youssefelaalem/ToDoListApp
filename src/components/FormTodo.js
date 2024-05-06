import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/slice/slice";

export const FormTodo = ({todos}) => {
  console.log(todos);//undefined !!!!!
  const [value, setValue] = useState("");
  const [describe, setDescribe] = useState("");
  const dispatch = useDispatch();
  const textChange = (e) => {
    setValue(e.target.value);
  };
  const describeChange = (e) => {
    setDescribe(e.target.value);
  };
  const addNewTask = (e) => {
    e.preventDefault();
    if (value.length === 0) {
      return undefined;
    }
    // let finded = todos.find((todo) => todo.task === value);
    // if (finded !== undefined) {
    //   alert("Task already exist");
    //   return;
    // }
   
    dispatch(addTodo({title:value,describe}));
    setDescribe("");
    setValue("");
  };
  return (
    <div>
      <form className="TodoForm" onSubmit={addNewTask}>
        <input
          type="text"
          className="todo-input"
          onChange={textChange}
          value={value}
          placeholder="enter your task"
        />
        <input
          type="text"
          className="todo-input"
          onChange={describeChange}
          value={describe}
          placeholder="enter your describtion"
        />
        <button type="submit" className="todo-btn">
          Add
        </button>
      </form>
    </div>
  );
};
//////////////////////////////////////////////////////////////////////////
// import React, { useState } from "react";

// export const FormTodo = () => {
//   const [value, setValue] = useState("");
//   const [valuedesc, setValuedesc] = useState("");
//   const handleChange = (e) => {
//     setValue(e.target.value);

//   };
//   const handleChangedesc= (e) => {
//     setValuedesc(e.target.value);

//   };
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (value.length === 0) {
//       return undefined;
//     }
//     let finded = todos.find((todo) => todo.task === value);
//     if (finded !== undefined) {
//       alert("Task already exist");
//       return;
//     }
//     console.log(valuedesc)
//     addTodo(value,valuedesc);
//     setValue("");
//     setValuedesc("")
//   };
//   return (
//     <div>
//       <form className="TodoForm" onSubmit={handleSubmit}>
//         <input
//           type="text"
//           className="todo-input"
//           onChange={handleChange}
//           value={value}
//           placeholder="enter your task"
//         />
//         <input
//           type="text"
//           className="todo-input"
//           onChange={handleChangedesc}
//           value={valuedesc}
//           placeholder="enter your describtion"
//         />
//         <button type="submit" className="todo-btn">
//           Add
//         </button>
//       </form>
//     </div>
//   );
// };
