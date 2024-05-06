import React, {useState} from 'react'
import { useDispatch } from "react-redux";
import { editTisk } from '../redux/slice/slice';

export default function EditFormTodo({editTodo ,task}) {

  const dispatch = useDispatch();

  const [value, setValue] = useState(task.task)
  const handleChange=(e)=>{ 
      setValue(e.target.value)
  }
  const handleSubmit=(e)=>{
      e.preventDefault();
      dispatch(editTisk(
        {
          id:task.id,
          title : value,
        }
      ))

      setValue("")

  }
return (
  <div>
      <form className="TodoForm" onSubmit={handleSubmit}>
          <input type='text' className='todo-input'onChange={handleChange} value={value} placeholder='update name of title'/>
          <button type='submit' className='todo-btn' >Update</button>
          </form>
  </div>
)
}


