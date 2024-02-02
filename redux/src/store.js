import { configureStore } from "@reduxjs/toolkit";

import filterReducer from './redurcers/filterReducer'
import noteReducer from './redurcers/noteReducer'

const store = configureStore({
    reducer: {
        notes: noteReducer,
        filter: filterReducer
    }
})

export default store