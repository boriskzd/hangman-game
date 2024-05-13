import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { Box, Skeleton, Typography } from "@mui/material";
import LetterDisplay from "./LetterDisplay";
import Mistakes from "./Mistakes";
import { useDispatch } from "react-redux";
import { setUniqueLetters } from "../store/appSlice";
import { useEffect } from "react";

const HangmanDisplay = () => {
	const dispatch = useDispatch();
	const data = useSelector((state: RootState) => state.data.data);
	const name = useSelector((state: RootState) => state.app.name);
	const gameOver = useSelector((state: RootState) => state.app.gameOver);
	const enteredLetters = useSelector(
		(state: RootState) => state.app.enteredLetters
	);

	useEffect(() => {
		if (!data) return;

		const uniqueLetters = Array.from(
			new Set(data.content.toLowerCase().replace(/[^a-z]/g, ""))
		);
		console.log(11111111);
		console.log(uniqueLetters);
		console.log(22222222);
		dispatch(setUniqueLetters(uniqueLetters));
	}, [data]);

	// useEffect(() => {
	// 	dispatch(setUniqueLetters(uniqueLetters));
	// }, [data, uniqueLetters]);

	// TODO: find better way to check this. Should be displayed no matter if it is in this array or not
	const specialCharacters = [",", ".", "?", "!", ":", "'", "-", "—", ";"];

	// console.log("DATA");
	// console.log(data);

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
	const Space = () => (
		<Box sx={{ width: 20, height: 28 }} key={Math.random()} />
	);

	const allCharacters = questionLetterArray.map((letter: string, i) => {
		const isSpecialKey = (letter: string) =>
			specialCharacters.includes(letter);

		let isUppercase = false;
		let finalLetter = letter;

		function isLetter(letter: string) {
			return /^[a-zA-Z]$/.test(letter);
		}

		const isUppercaseLetter = (letter: string) => {
			return isLetter(letter) && letter === letter.toUpperCase();
		};

		if (isUppercaseLetter(letter)) {
			isUppercase = true;
			finalLetter = letter.toLowerCase();
		}

		const isEnteredLetter = enteredLetters.includes(finalLetter);

		// TODO: addMistake

		if (letter === " ") {
			return <Space key={i} />;
		} else if (isSpecialKey(letter)) {
			return <LetterDisplay letter={letter} isSpecialKey key={i} />;
		} else {
			return (
				<LetterDisplay
					letter={finalLetter}
					isEnteredLetter={isEnteredLetter}
					isGameOver={gameOver}
					isUppercase={isUppercase}
					key={i}
				/>
			);
		}
	});

	return (
		<Box>
			{/*  TODO: Display it nicely !!!  */}

			<Box
				sx={{
					display: "flex",
					justifyContent: "space-between",
					flexDirection: { xs: "column", sm: "row" },
					alignItems: { xs: "center", sm: "flex-start" },
				}}
			>
				<Box sx={{ mb: { xs: 2, sm: 0 }, width: 185 }}>
					<Typography variant="overline">Player:</Typography>
					<br />
					<Typography variant="h6" sx={{ lineHeight: 1.25 }}>
						<b>{name}</b>
					</Typography>
				</Box>
				<Mistakes />
			</Box>

			<Box
				sx={{ display: "flex", flexWrap: "wrap", gap: 0.5, marginY: 6 }}
			>
				{allCharacters}
			</Box>

			<Typography textAlign="right">
				Author: <b>{data.author}</b>
			</Typography>
		</Box>
	);
};

export default HangmanDisplay;
