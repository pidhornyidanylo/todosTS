import { useState } from 'react';
import './Input.css';

interface InputProps {
  addTodo(val: string): void;
}

const Input = ({ addTodo }: InputProps) => {

  const [ value, setValue ] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if(!value) return;
    addTodo(value);
    setValue('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input value={value} className='todo-input' type="text" onChange={(e) => setValue(e.target.value)} />
      <button type='submit' className='add'>Add</button>
    </form>
  )
}

export default Input
