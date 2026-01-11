import { configureStore } from '@reduxjs/toolkit';
import taskReducer from './taskSlice';

export const store = configureStore({
  reducer: {
    taskManager: taskReducer,
  },
});

// These types are now safe because TaskState is exported
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
