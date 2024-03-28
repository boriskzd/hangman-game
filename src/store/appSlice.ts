import { createSlice } from "@reduxjs/toolkit";

interface NameState {
	name: string;
	formSubmitted: boolean;
	showHighScores: boolean;
}

const initialState: NameState = {
	name: "",
	formSubmitted: false,
	showHighScores: false,
};

export const appSlice = createSlice({
	name: "app",
	initialState: initialState,
	reducers: {
		changeName: (state, action) => {
			state.name = action.payload;
		},
		formSubmitted(state) {
			state.formSubmitted = true;
		},
		showHighScores(state) {
			state.showHighScores = true;
		},
	},
});

export const { changeName, formSubmitted, showHighScores } = appSlice.actions;

export default appSlice.reducer;
