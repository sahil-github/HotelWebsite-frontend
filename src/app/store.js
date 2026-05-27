import { configureStore } from '@reduxjs/toolkit';

// Placeholder reducer to prevent "Store does not have a valid reducer" error
const rootReducer = (state = {}, action) => state;

export const store = configureStore({
  reducer: {
    app: rootReducer,
  },
});
