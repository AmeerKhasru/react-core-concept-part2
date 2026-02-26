import { use } from "react";
import Todo from "./Todo";
export default function Todos({ todosPromise}) {

    const todos = use(todosPromise);
    return (
        <div className="card">
            <h3>Todo List</h3>
            {todos.map(todo => (
                <Todo key={todo.id} todo={todo} />
            ))}
            
        </div>
    );
}