import React from 'react';
import { useDispatch } from 'react-redux';
import { updateTaskStatus } from '../store/taskSlice';
import { Task, TaskStatus } from '../types';

export const TaskCard = ({ task }: { task: Task }) => {
  const dispatch = useDispatch();

  const statusColors = {
    [TaskStatus.TODO]: 'bg-yellow-100 text-yellow-800',
    [TaskStatus.IN_PROGRESS]: 'bg-blue-100 text-blue-800',
    [TaskStatus.DONE]: 'bg-green-100 text-green-800',
  };

  return (
    <div className="bg-white border border-slate-200 p-5 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <span className={`text-xs font-bold px-2 py-1 rounded-md ${statusColors[task.status]}`}>
          {task.status}
        </span>
      </div>
      <h3 className="text-lg font-bold text-slate-900 mb-1">{task.title}</h3>
      <p className="text-slate-500 text-sm mb-6 line-clamp-2">{task.description}</p>

      <select
        value={task.status}
        onChange={(e) => dispatch(updateTaskStatus({ id: task.id, status: e.target.value as TaskStatus }))}
        className="w-full bg-slate-50 border-none text-sm rounded-lg p-2 focus:ring-2 focus:ring-indigo-500"
      >
        {Object.values(TaskStatus).map((status) => (
          <option key={status} value={status}>{status}</option>
        ))}
      </select>
    </div>
  );
};
