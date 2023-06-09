import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Task } from 'interfaces/task';

interface CurrentListState {
  currentList: Task[];
}

export const initialData = [
  {
    id: 1,
    name: 'Mock',
    description: '',
    completed: false,
    labels: ['family', 'work']
  },
  {
    id: 2,
    name: 'Example',
    description: '',
    completed: false,
    labels: ['work']
  }
];

const initialState: CurrentListState = {
  currentList: initialData
};

export const currentListSlice = createSlice({
  name: 'currentList',
  initialState,
  reducers: {
    addTask: (state: CurrentListState, { payload }: PayloadAction<Task>) => {
      state.currentList.push({ ...payload });
    },
    removeTask: (state: CurrentListState, { payload }: PayloadAction<number>) => {
      const taskIndex = state.currentList.findIndex(({ id }) => id === payload);
      state.currentList.splice(taskIndex, 1);
    },
    editTask: (state: CurrentListState, { payload }: PayloadAction<Task | number>) => {
      const taskId = typeof payload === 'number' ? payload : payload.id;
      const task = state.currentList.find(({ id }) => id === taskId);

      if (task) {
        if (typeof payload === 'number') {
          task.completed = !task.completed;
        } else {
          task.name = payload.name;
          task.description = payload.description;
        }
      }
    }
  }
});

export const { addTask, removeTask, editTask } = currentListSlice.actions;

export default currentListSlice.reducer;
