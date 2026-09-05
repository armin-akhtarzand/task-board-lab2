type ColumnProps = {
    title: string;
}

const Column = ({title}: ColumnProps) =>{
    <section>
        <h1>{title}</h1>
    </section>

}

export default Column;