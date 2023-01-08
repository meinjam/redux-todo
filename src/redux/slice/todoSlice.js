import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todo: [],
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo(state, action) {
      state.todo.push(action.payload);
    },

    updateTodo(state, action) {
      const data = state.todo.map((todo) => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            name: action.payload.name,
          };
        }
        return todo;
      });
      state.todo = data;
    },

    updateTodoStatus(state, action) {
      const data = state.todo.map((todo) => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            isCompleted: action.payload.isCompleted,
          };
        }
        return todo;
      });
      state.todo = data;
    },

    deleteTodo(state, action) {
      const data = state.todo.filter((todo) => todo.id !== action.payload);
      state.todo = data;
    },
  },
});

export const { addTodo, deleteTodo, updateTodo, updateTodoStatus } = todoSlice.actions;

export default todoSlice.reducer;
