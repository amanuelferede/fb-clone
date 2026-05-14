import { configureStore } from "@reduxjs/toolkit";
import { addPostSlice } from "./slices/addpost";
import { OriginalUserPostSlice } from "./slices/post/user/origianl";
import { userSharePostSlice } from "./slices/post/user/share";
import { originalPagePostSlice } from "./slices/post/page/origianl";
import { pageSharePostSlice } from "./slices/post/page/share";
import { originalPostSlice } from "./slices/post/group/origianl";
import { toGroupSharePostSlice } from "./slices/post/group/share";
export const store = configureStore({
  reducer: {
    addPost: addPostSlice.reducer,
    originalUserPost: OriginalUserPostSlice.reducer,
    userSharePost: userSharePostSlice.reducer,
    originalPagePost: originalPagePostSlice.reducer,
    pageSharePost: pageSharePostSlice.reducer,
    originalGroupPost: originalPostSlice.reducer,
    toGroupSharePost: toGroupSharePostSlice.reducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
