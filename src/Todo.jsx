export default function Todo({ todo }) {

    const { title, completed } = todo;
  return (
    <div className="todo card">
      <h4>{title}</h4>
      <p>{completed ? "Completed" : "Not Completed"}</p>
    </div>
  );    
}