import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Task, TaskStatus } from '../types';

// Add the 'export' keyword here to fix the ts(4023) error
export interface TaskState {
  tasks: Task[];
  isModalOpen: boolean;
}

const initialState: TaskState = {
  tasks: [
    {
      id: '1',
      title: 'Setup NX Monorepo',
      description: 'Initialize the project with React and Tailwind.',
      status: TaskStatus.DONE,
      createdAt: new Date().toISOString()
    },
  ],
  isModalOpen: false,
};

const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<Omit<Task, 'id' | 'createdAt'>>) => {
      const newTask: Task = {
        ...action.payload,
        id: Math.random().toString(36).substring(2, 9),
        createdAt: new Date().toISOString(),
      };
      state.tasks.push(newTask);
    },
    updateTaskStatus: (state, action: PayloadAction<{ id: string; status: TaskStatus }>) => {
      const task = state.tasks.find(t => t.id === action.payload.id);
      if (task) {
        task.status = action.payload.status;
      }
    },
    toggleModal: (state) => {
      state.isModalOpen = !state.isModalOpen;
    },
  },
});

export const { addTask, updateTaskStatus, toggleModal } = taskSlice.actions;
export default taskSlice.reducer;
