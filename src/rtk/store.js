import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "../rtk/book/bookSlice";

export const store = configureStore({
    reducer: {
        book: bookReducer,
    },
});