import { createSlice } from "@reduxjs/toolkit";
import { numberOfMistakes } from "../utils/constants";

interface GameState {
	name: string;
	formSubmitted: boolean;
	showHighScores: boolean;
	uniqueLetters: string[];
	enteredLetters: string[];
	mistakes: number;
}

const initialState: GameState = {
	name: "",
	formSubmitted: false,
	showHighScores: false,
	uniqueLetters: [],
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

			// Mistake logic. If letter doesn't exist in list of letters, add mistake
			if (!state.uniqueLetters.includes(action.payload)) {
				state.mistakes = state.mistakes + 1;
				if (state.mistakes === numberOfMistakes) {
					// TODO: END GAME
				}
			}
		},
		setUniqueLetters(state, action) {
			state.uniqueLetters = action.payload;
		},
	},
});

export const {
	changeName,
	formSubmitted,
	showHighScores,
	addLetter,
	setUniqueLetters,
} = appSlice.actions;

export default appSlice.reducer;
