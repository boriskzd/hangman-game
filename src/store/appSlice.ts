import { createSlice } from "@reduxjs/toolkit";

interface NameState {
	name: string;
	formSubmitted: boolean;
	showHighScores: boolean;
	enteredLetters: string[];
	mistakes: number;
}

const initialState: NameState = {
	name: "",
	formSubmitted: false,
	showHighScores: false,
	enteredLetters: [],
	mistakes: 0,
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
		addLetter(state, action) {
			state.enteredLetters.push(action.payload);
		},
		addMistake(state, action) {
			const { enteredLetters } = state;
			const letter = action.payload;

			if (enteredLetters.includes(letter))
				console.log(" Cannot add letter because it exists ");

			state.mistakes = state.mistakes + 1;
		},
	},
});

export const { changeName, formSubmitted, showHighScores, addLetter } =
	appSlice.actions;

export default appSlice.reducer;
