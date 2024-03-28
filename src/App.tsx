import "./App.css";

import CssBaseline from "@mui/material/CssBaseline";
import GameContainer from "./components/MainContainer";
import NameInput from "./views/NameInput";
import Keyboard from "./components/Keyboard";
import { useSelector } from "react-redux";

import { RootState } from "./store/store";
import HangmanGame from "./views/HangmanGame";
import { showHighScores } from "./store/appSlice";

function App() {
	const formSubmittedState = useSelector(
		(state: RootState) => state.app.formSubmitted
	);
	const showHighScores = useSelector(
		(state: RootState) => state.app.showHighScores
	);

	console.log("formSubmittedState - ", formSubmittedState);

	return (
		<>
			<CssBaseline />
			<GameContainer>
				{/*  Player Name input */}
				{!formSubmittedState && <NameInput />}
				{/* Hangman Game */}
				{formSubmittedState && <HangmanGame />}

				{showHighScores && <div>HIGHSCORES</div>}
			</GameContainer>
		</>
	);
}

export default App;
