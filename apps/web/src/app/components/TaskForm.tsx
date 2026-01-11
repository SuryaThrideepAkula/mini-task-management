import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask, toggleModal } from '../store/taskSlice';
import { TaskStatus } from '../types';

export const TaskForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim().length < 3) return alert("Title too short!");
    dispatch(addTask({ title, description, status: TaskStatus.TODO }));
    dispatch(toggleModal());
  };

  return (
    <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <form onSubmit={handleSubmit} className="bg-white w-full max-w-md p-8 rounded-3xl shadow-2xl">
        <h2 className="text-2xl font-black mb-6">New Task</h2>
        <input
          className="w-full border-slate-200 border p-3 rounded-xl mb-4 outline-indigo-500"
          placeholder="What needs to be done?"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          className="w-full border-slate-200 border p-3 rounded-xl mb-6 h-32 outline-indigo-500"
          placeholder="Description (Optional)"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <div className="flex gap-3">
          <button type="button" onClick={() => dispatch(toggleModal())} className="flex-1 py-3 font-bold text-slate-500">Cancel</button>
          <button type="submit" className="flex-1 py-3 bg-indigo-600 text-white font-bold rounded-xl shadow-lg shadow-indigo-200">Create</button>
        </div>
      </form>
    </div>
  );
};
