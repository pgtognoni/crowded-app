import { configureStore } from "@reduxjs/toolkit";
import artistSlice from "./artistReducer";

const store = configureStore({
    reducer: {
        artist: artistSlice.reducer
    }
});

export default store;