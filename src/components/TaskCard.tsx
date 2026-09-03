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
        <article>
            <h2>{title}</h2>
            <p>{category}</p>
            <p>{description}</p>
            <p>Ansvarig: {assignee}</p>
            <p>{priority}</p>
        </article>
    )
};

export default TaskCard;