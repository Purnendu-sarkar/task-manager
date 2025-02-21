import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddTask = () => {
  const navigate = useNavigate();
  const [task, setTask] = useState({
    title: "",
    description: "",
    category: "To-Do",
  });

  // Input change handler
  const handleChange = (e) => {
    const { name, value } = e.target;

    // Controlling the length of the title and description
    if (name === "title" && value.length > 50) return;
    if (name === "description" && value.length > 200) return;

    setTask({ ...task, [name]: value });
  };

  // ✅ Form submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Title cheek
    if (!task.title.trim()) {
      alert("A title must be given for the task!");
      return;
    }

    const newTask = {
      ...task,
      timestamp: new Date().toISOString(),
    };

    // ✅ Sending to backend
    const response = await fetch("http://localhost:5000/tasks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newTask),
    });

    if (response.ok) {
      alert("✅ Task added successfully!");
      navigate("/dashboard"); 
    }
  };

  return (
    <div className="w-full max-w-md mx-auto p-6 bg-white shadow-lg rounded-md">
      <h2 className="text-2xl font-bold mb-4">Add new task</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Title */}
        <div>
          <label className="block font-semibold">Title (Max 50 chars)</label>
          <input
            type="text"
            name="title"
            value={task.title}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        {/* Description */}
        <div>
          <label className="block font-semibold">
            Description (Max 200 chars)
          </label>
          <textarea
            name="description"
            value={task.description}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>

        {/* Category */}
        <div>
          <label className="block font-semibold">Category</label>
          <select
            name="category"
            value={task.category}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          >
            <option value="To-Do">To-Do</option>
            <option value="In Progress">In Progress</option>
            <option value="Done">Done</option>
          </select>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          ✅ Add Task
        </button>
      </form>
    </div>
  );
};

export default AddTask;
