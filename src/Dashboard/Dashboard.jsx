import { useNavigate } from "react-router";
import { useAuth } from "../providers/AuthProvider";
// import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";

const Dashboard = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-green-500">
        {user?.displayName}-এর Task Dashboard
      </h1>
      <button
        className="btn btn-primary mt-4"
        onClick={() => navigate("/add-task")}
      >
        Add new task
      </button>
    </div>
  );
};

export default Dashboard;
