import { useState } from "react";

const TaskForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [assignee, setAssignee] = useState("");
  const [category, setCategory] = useState("");
  const [priority, setPriority] = useState("Låg");
  const handleSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log("Uppgift tillagd - ");
    console.log("Prioritet: " + priority);
    console.log("Titel: " + title);
    console.log("Kategori: " + category);
    console.log("Beskrivning: " + description);
    console.log("Tilldelad: " + assignee);
  };

  return (
      <form
        method="POST"
        className="mx-auto w-full max-w-2xl rounded-lg border-2 border-gray-300 bg-orange-400 p-6 shadow-md"
        onSubmit={handleSubmit}
      >
        <div className="mb-4 grid grid-cols-1 gap-2 sm:grid-cols-[8rem_1fr] sm:items-center">
          <label htmlFor="title" className="sm:text-right">
            Titel
          </label>
          <input
            className="w-full rounded-md border border-gray-400 bg-white px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
            type="text"
            id="title"
            value={title}
            required
            onChange={(event) => setTitle(event.target.value)}
          />
        </div>
        <div className="mb-4 grid grid-cols-1 gap-2 sm:grid-cols-[8rem_1fr] sm:items-center">
          <label htmlFor="assignee" className="sm:text-right">
            Tilldelad
          </label>
          <input
            className="w-full rounded-md border border-gray-400 bg-white px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
            type="text"
            value={assignee}
            id="assignee"
            required
            onChange={(event) => setAssignee(event.target.value)}
          />
        </div>
        <div className="mb-4 grid grid-cols-1 gap-2 sm:grid-cols-[8rem_1fr] sm:items-center">
          <label htmlFor="category" className="sm:text-right">
            Kategori
          </label>
          <input
            className="w-full rounded-md border border-gray-400 bg-white px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
            type="text"
            value={category}
            id="category"
            required
            onChange={(event) => setCategory(event.target.value)}
          />
        </div>
        <div className="mb-4 grid grid-cols-1 gap-2 sm:grid-cols-[8rem_1fr] sm:items-center">
          <label htmlFor="description" className="sm:text-right">
            Beskrivning
          </label>
          <textarea
            className="w-full rounded-md border border-gray-400 bg-white px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
            value={description}
            id="description"
            onChange={(event) => setDescription(event.target.value)}
          />
        </div>
        <div className="mb-4 grid grid-cols-1 gap-2 sm:grid-cols-[8rem_1fr] sm:items-center">
          <label htmlFor="priority" className="sm:text-right">
            Prioritet
          </label>
          <select
            className="w-full rounded-md border border-gray-400 bg-white px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
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
        <div className="grid grid-cols-1 sm:grid-cols-[8rem_1fr]">
          <button className="w-full cursor-pointer rounded-md bg-blue-500 px-4 py-2 font-semibold text-white transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:col-start-2 sm:w-auto sm:justify-self-start" type="submit">Spara</button>
        </div>
      </form>

  );
};

export default TaskForm;
