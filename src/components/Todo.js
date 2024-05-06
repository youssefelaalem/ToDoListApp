import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPenToSquare} from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { editTodo, toggleCompleted } from '../redux/slice/slice'
import { useDispatch } from 'react-redux'
import { deleteItem } from "../redux/slice/slice";

export const Todo =({todo ,key})=> {

  const dispatch = useDispatch()
  const handleCompleteClick=()=>{
    dispatch(
      toggleCompleted({
        id:todo.id,
        completed : ! todo.completed,
      })
    )
  }
 

  const deleteByid =()=>{
    dispatch( 
      deleteItem({
        id:todo.id,
      })
      )
      console.log(todo.id);
  }
  const apperEditForm=()=>{
    dispatch(
      editTodo({

        id:todo.id,
      }
      )
    )
  }
  
  return (
    <div className='Todo'>
        <p>
        <input type='checkbox' style={{marginRight:".5em"}} checked={todo.completed} onChange={handleCompleteClick}></input>
          <Link to={`/detials/${todo.id}`} state={todo}>{todo.task}</Link>
        </p> 
        <div>
            <FontAwesomeIcon icon={faPenToSquare} onClick={apperEditForm}/>
            <FontAwesomeIcon icon={faTrash} onClick={deleteByid}/>

        </div>
    </div>
  )
}
