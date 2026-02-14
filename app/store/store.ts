import { configureStore } from "@reduxjs/toolkit";
import { addPostSlice } from "./slices/addpost";
import { postSlice } from "./slices/post";
export const store = configureStore({
  reducer: {
    addPost: addPostSlice.reducer,
    post: postSlice.reducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
