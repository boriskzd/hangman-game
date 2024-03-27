import { useState } from "react";
import "./App.css";

import Keyboard from "./components/Keyboard";

function App() {
	return (
		<>
			<h1>Hangman</h1>
			<Keyboard />
		</>
	);
}

export default App;
