import {
	Box,
	Button,
	FormControl,
	FormGroup,
	FormLabel,
	TextField,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { changeName, formSubmitted } from "../store/appSlice";
import { useState } from "react";
import Keyboard from "../components/Keyboard";

const HangmanGame = () => {
	console.log("[Name Input] - RENDER");
	const name = useSelector((state: RootState) => state.app.name);
	const dispatch = useDispatch();

	// const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
	// 	setNameState(e.target.value);
	// };

	const handleSubmit = (e: any) => {
		e.preventDefault();

		dispatch(formSubmitted());
	};

	return (
		<Box>
			Player: {name}
			<Keyboard />
		</Box>
	);
};

export default HangmanGame;
