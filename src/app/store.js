import { configureStore } from "@reduxjs/toolkit";
import blogReducer from '../Features/blogs/blogSlice';

const store = configureStore({
    reducer: {
        blogs : blogReducer,
    },
})

export default store