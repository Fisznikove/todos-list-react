import "./style.css";
const Tasks = ({tasks, hideDoneTask})=> (
<ul className="section__list">
    {tasks.map(task => (
        <li 
        key= {task.id}
        className={`list__item ${
            task.done && hideDoneTask 
            ? "tasks__item--hidden" 
            : ""}`
        } 
        >
            <button 
        className="list__button list__button--done">
            {task.done ? "✔" 
            : ""}</button>
        <span 
        className={`task__list ${
            task.done 
        ? "list__item--done" 
        : ""}`}> 
        {task.content}
        </span>
        <button className="list__button list__button--remove">🗑</button> 
        </li>
    ))}
</ul>
    );

    export default Tasks;