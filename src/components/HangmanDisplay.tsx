import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import { fetchData } from "../store/dataSlice";
import { Box, Button, Skeleton, Typography } from "@mui/material";
import Keyboard from "./Keyboard";
import LetterDisplay from "./LetterDisplay";

const HangmanDisplay = () => {
	console.log("[Hangman Test] - RENDER");
	const data = useSelector((state: RootState) => state.data.data);
	const mistakes = useSelector((state: RootState) => state.app.mistakes);
	const enteredLetters = useSelector(
		(state: RootState) => state.app.enteredLetters
	);

	// TODO: find better way to check this. Should be displayed no matter if it is in this array or not
	const nonLetters = [",", ".", "?", "!", ":", "'", "-", ";"];

	console.log("[HangmanDisplay]: entered letters");
	console.log(enteredLetters);

	console.log("DATA");
	console.log(data);

	if (!data)
		return (
			<Box>
				<Skeleton variant="text" />
				<Skeleton variant="text" />
			</Box>
		);

	const question = data.content;

	const questionLetterArray = [...question];

	// TODO: Make it flexy
	const Space = () => <Box sx={{ width: 20, height: 28 }} />;

	const evoga = questionLetterArray.map((letter: string, i) => {
		let isUppercase = false;
		let letter3 = letter;
		if (letter === letter.toUpperCase()) {
			console.log("UPPER case letter is: ", letter);
			isUppercase = true;
			letter3 = letter.toLowerCase();
			console.log("LOWER case letter is: ", letter3);
		}

		const isSpecialKey = (letter: string) => nonLetters.includes(letter);

		const checkIfHasLetter = (letter: string) =>
			enteredLetters.includes(letter);

		const isEnteredLetter = checkIfHasLetter(letter3);

		if (isUppercase) {
			console.log("xYz", letter3, "isEnteredLetter - ", isEnteredLetter);
		}

		// TODO: addMistake

		if (letter === " ") {
			return <Space />;
		} else if (isSpecialKey(letter)) {
			return <LetterDisplay letter={letter} isSpecialKey key={i} />;
		} else {
			return (
				<LetterDisplay
					letter={letter3}
					isEnteredLetter={isEnteredLetter}
					isUppercase={isUppercase}
					key={i}
				/>
			);
		}
	});

	const Mistakes = () => {
		const squares = [];
		for (let i = 0; i < mistakes; i++) {
			squares.push(<span>❌</span>);
		}
		return squares;
	};

	return (
		<Box>
			{/*  TODO: Display it nicely !!!  */}
			<Typography>
				<b>{data.content}</b>
			</Typography>

			<Mistakes />

			<Box
				sx={{ display: "flex", flexWrap: "wrap", gap: 0.5, marginY: 6 }}
			>
				{evoga}
			</Box>

			<Typography textAlign="right">
				Author: - <b>{data.author}</b>
			</Typography>
		</Box>
	);
};

export default HangmanDisplay;
