import React from "react";
import { toast } from "react-toastify";

const StatusData = ({ cardDisable, setcardDisable }) => {

  const handleComplete = (task) => {
    setcardDisable(prev =>
      prev.map(t => t.id === task.id ? { ...t, resolved: true } : t)
    );
    toast.success("Task Completed Successfully!");
  };

  // Task Status - filter for unresolved tasks
  const activeTasks = cardDisable.filter(t => !t.resolved);

  // Resolved Tasks - filter for resolved tasks
  const resolvedTasks = cardDisable.filter(t => t.resolved);

  return (
    <div className="py-5 md:py-0 lg:w-[30%]">

      {/* Task Status Section */}
      <h1 className="text-2xl font-bold mt-5 mb-3 text-gray-500">Task Status</h1>
      <div className="space-y-3">
        {activeTasks.length === 0 && <p className="text-gray-400">Select a ticket to add to Task Status</p>}
        {activeTasks.map(task => (
          <div key={task.id} className="p-3 rounded-md shadow bg-white">
            <h2 className="text-xl">{task.title}</h2>
            <button
              className="mt-2 bg-green-600 text-white w-full rounded-sm"
              onClick={() => handleComplete(task)}
            >
              Complete
            </button>
          </div>
        ))}
      </div>

      {/* Resolved Tasks Section */}
      <h1 className="text-2xl font-bold mt-8 mb-3 text-gray-500">Resolved Tasks</h1>
      <div className="space-y-3">
        {resolvedTasks.length === 0 && <p className="text-gray-400">No resolved tasks yet.!</p>}
        {resolvedTasks.map(task => (
          <div key={task.id} className="p-3 rounded-md bg-blue-200/30 backdrop-blur-sm">
            <h2 className="text-xl">{task.title}</h2>
          </div>
        ))}
      </div>

    </div>
  );
};

export default StatusData;