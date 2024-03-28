import { configureStore, combineReducers } from "@reduxjs/toolkit";
import appReducer from "./appSlice";

const rootReducer = combineReducers({
	app: appReducer,
});

export type RootState = ReturnType<typeof rootReducer>; // export

const store = configureStore({
	reducer: rootReducer,
});

export default store;
