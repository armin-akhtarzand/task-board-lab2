import { useState } from "react";

const TaskForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [assignee, setAssignee] = useState("");
  const [category, setCategory] = useState("");
  const [priority, setPriority] = useState("");
  const handleSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log("Uppgift tillagd - ")
    console.log("Prioritet: " + priority)
    console.log("Titel: " + title)
    console.log("Kategori: " + category)
    console.log("Beskrivning: " + description)
    console.log("Tilldelad: " + assignee)
  }

  return (
    <>
      <form action="POST" className="form" onSubmit={handleSubmit}>
        <div>
            <label htmlFor="title" className="form-label">Titel</label>
          <input
            type="text"
            id="title"
            value={title}
            required
            onChange={(event) => setTitle(event.target.value)}
          />
        </div>
        <div>
            <label htmlFor="assignee" className="form-label">Tilldelad</label>
          <input
            type="text"
            value={assignee}
            id="assignee"
            required
            onChange={(event) => setAssignee(event.target.value)}
          />
        </div>
        <div>
            <label htmlFor="category" className="form-label">Kategori</label>
          <input
            type="text"
            value={category}
            id="category"
            required
            onChange={(event) => setCategory(event.target.value)}
          />
        </div>
         <div>
            <label htmlFor="description" className="form-label">Beskrivning</label>
          <textarea
            value={description}
            id="description"
            onChange={(event) => setDescription(event.target.value)}
          />
        </div>
        <div>
            <label htmlFor="priority" className="form-label"></label>
          <select
            name="priority"
            id="priority"
            value={priority}
            required
            onChange={(event) => setPriority(event.target.value)}
          >
            <option value="Låg">Låg</option>
            <option value="Medel">Medel</option>
            <option value="Hög">Hög</option>
          </select>
        </div>
        <button type="submit">Spara</button>
        
      </form>
    </>
  );
};

export default TaskForm;
