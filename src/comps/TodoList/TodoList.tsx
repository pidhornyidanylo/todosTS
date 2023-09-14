import Todo from "../../models/todo";
import TodoItem from "../Todo/TodoItem";
import './TodoList.css';

interface TodoListProps {
    todos: Todo[];
    removeTodo(id:number):void;
}

const TodoList = ({ todos, removeTodo }: TodoListProps) => {
  
  return (
    <ul className="todos-list">
      {todos.map(todo => <TodoItem removeTodo={removeTodo} key={todo.id} todo={todo} />)}
    </ul>
  )
}

export default TodoList
