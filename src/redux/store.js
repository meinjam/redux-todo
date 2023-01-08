import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from './slice/apiSlice';
import todoSlice from './slice/todoSlice';

const store = configureStore({
  reducer: {
    todos: todoSlice,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
});

export default store;
