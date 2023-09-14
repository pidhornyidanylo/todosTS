import { useState } from 'react'
import Todo from '../../models/todo';

import './TodoItem.css';

interface TodoItemProps {
  todo: Todo;
  removeTodo(id:number):void;
}

const TodoItem = ({ todo, removeTodo }: TodoItemProps) => {
  const { id, name } = todo;
  const [ editMode, setEditMode ] = useState<boolean>(false);
  const [ nameVal, setNameVal ] = useState<string>(name);

  const deleteTodo = (id: number):void => {
    removeTodo(id)
  }

  return (
    <li className="todo-item" key={id}>
        {
          editMode ? <input type='text' value={nameVal} className='edit-input' onChange={(e) => setNameVal(e.target.value) } /> : nameVal
        }
        <div className="buttons">
            <button className="edit" onClick={() => {
              setEditMode(!editMode)  
            }}>{
                editMode ? 'Done' : 'Edit'
            }</button>
            <button className="delete" onClick={() => deleteTodo(id)}>Delete</button>
        </div>
    </li>
  )
}

export default TodoItem
