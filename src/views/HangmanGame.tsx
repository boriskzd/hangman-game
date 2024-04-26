import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import { fetchData } from "../store/dataSlice";
import { Box, Typography } from "@mui/material";
import Keyboard from "../components/Keyboard";
import HangmanDisplay from "../components/HangmanDisplay";

const HangmanGame = () => {
	console.log("[Name Input] - RENDER");
	const name = useSelector((state: RootState) => state.app.name);
	const dispatch = useDispatch<AppDispatch>();
	const { data, status, error } = useSelector(
		(state: RootState) => state.data
	);
	console.log("data", data);
	console.log("status", status);
	console.log("error", error);

	useEffect(() => {
		dispatch(fetchData());
	}, [dispatch]);

	return (
		<Box>
			{status === "loading" && <div>Loading...</div>}
			{status === "failed" && <div>Error: {error}</div>}

			<HangmanDisplay />

			<Keyboard />
		</Box>
	);
};

export default HangmanGame;
