import { Routes, Route } from "react-router-dom";

import App from "../App";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import Dashboard from "../Dashboard/Dashboard";
import AddTask from "../pages/AddTask";

function Main() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/add-task" element={<AddTask />} />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default Main;
