import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todo: [],
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo(state, action) {
      const todos = [action.payload, ...state.todo];
      state.todo = todos;
      localStorage.setItem('todos', JSON.stringify(todos));
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
      localStorage.setItem('todos', JSON.stringify(data));
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
      localStorage.setItem('todos', JSON.stringify(data));
    },

    deleteTodo(state, action) {
      const data = state.todo.filter((todo) => todo.id !== action.payload);
      state.todo = data;
      localStorage.setItem('todos', JSON.stringify(data));
    },

    getLocalTodo: (state, action) => {
      state.todo = action.payload;
    },
  },
});

export const { addTodo, deleteTodo, updateTodo, updateTodoStatus, getLocalTodo } = todoSlice.actions;

export default todoSlice.reducer;
