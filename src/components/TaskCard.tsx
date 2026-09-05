type TaskCardProp = {
    title: string;
    id: number;
    description: string;
    assignee: string;
    category: string;
    priority: string;
}


const TaskCard = ({title, description, assignee, category, priority}: TaskCardProp) => {

    return(
        <article className="tasks">
            <h2>{title}</h2>
            <p>{category}</p>
            <p>{description}</p>
            <p>Ansvarig: {assignee}</p>
            <p className="priority">Prioritet: {priority}</p>
        </article>
    )
};

export default TaskCard;