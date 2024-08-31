import { configureStore } from "@reduxjs/toolkit";
import { gamingReducer } from ".";

export const store = configureStore({
  reducer: {
    game: gamingReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
