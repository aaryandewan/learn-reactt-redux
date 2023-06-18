import { configureStore } from "@reduxjs/toolkit";

import postsReducer from "../posts/postSlice";

export default configureStore({
  reducer: {
    posts: postsReducer,
  },
});
