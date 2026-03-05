import React from "react";

const StatusData = ({ cardDisable, setcardDisable }) => {

  const handleComplete = (task) => {
    setcardDisable(prev =>
      prev.map(t => t.id === task.id ? { ...t, resolved: true } : t)
    );
  };

  return (
    <div className="py-5 md:py-0 lg:w-[30%]">
      
      <h1 className="text-2xl font-bold mt-5 mb-3 text-gray-500">Task Status</h1>
      {cardDisable.filter(t => !t.resolved).map(task => (
        <div key={task.id} className="mb-3 p-3 rounded-md shadow bg-white">
          <h2 className="text-xl">{task.title}</h2>
          <button
            className="mt-2 bg-green-600 text-white w-full rounded-sm"
            onClick={() => handleComplete(task)}
          >
            Complete
          </button>
        </div>
      ))}
      <h1 className="text-2xl font-bold mt-5 mb-3 text-gray-500">Resolved Tasks</h1>
      {cardDisable.filter(t => t.resolved).map(task => (
        <div key={task.id} className="mb-3 p-3 rounded-md bg-blue-200/30 backdrop-blur-sm">
          <h2 className="text-xl">{task.title}</h2>
        </div>
      ))}
    </div>
  );
};

export default StatusData;