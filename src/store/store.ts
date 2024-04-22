import { configureStore, combineReducers } from "@reduxjs/toolkit";
import appReducer from "./appSlice";
import dataSlice from "./dataSlice";

const rootReducer = combineReducers({
	app: appReducer,
	data: dataSlice,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = configureStore({
	reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;

export default store;
