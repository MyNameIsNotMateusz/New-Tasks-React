import { createSlice } from "@reduxjs/toolkit";
import { getTasksFromLocalStorage } from "./tasksLocalStorage";

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: getTasksFromLocalStorage(),
  reducers: {
    addTasks: (state, action) => {
      state.tasks.push(action.payload);
    },
    completeAllTasks: (state) => {
      const areAllTasksCompleted = state.tasks.every((task) => task.completed);
      const newCompletedValue = !areAllTasksCompleted;
      state.tasks = state.tasks.map((task) => {
        return { ...task, completed: newCompletedValue };
      });
    },
    hideCompletedTasks: (state) => {
      state.tasks = state.tasks.map((task) => {
        if (task.completed && task.isHidden) {
          return { ...task, isHidden: false };
        } else if (task.completed && !task.isHidden) {
          return { ...task, isHidden: true };
        } else {
          return task;
        }
      });
    },
    removeTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    completeTask: (state, action) => {
      const task = state.tasks.find((task) => task.id === action.payload);
      if (task) {
        task.completed = !task.completed;
      }
    },
    fetchExampleTasks: () => { },
    setTasks: (state, { payload: tasks }) => {
      state.tasks = tasks;
    },
  },
});





export const { addTasks, completeAllTasks, hideCompletedTasks, removeTask, completeTask, fetchExampleTasks, setTasks } = tasksSlice.actions;

export const selectTasks = state => state.tasks

export default tasksSlice.reducer