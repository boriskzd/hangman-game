import {
	Box,
	Button,
	FormControl,
	FormGroup,
	FormHelperText,
	FormLabel,
	TextField,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { changeName, formSubmitted } from "../store/appSlice";
import { useState } from "react";

const NameInput = () => {
	console.log("[Name Input] - RENDER");
	const name = useSelector((state: RootState) => state.app.name);
	const [nameState, setNameState] = useState(name);
	const [errorMessage, setErrorMessage] = useState(" ");
	const dispatch = useDispatch();
	const showError = errorMessage !== "";

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const cleanValue = e.target.value
			.replace(/[^a-zA-Z0-9]/g, "") // allow only letters and numbers for players name
			.slice(0, 12); // limit name length to 12 characters

		setNameState(cleanValue);
	};

	const handleSubmit = (e: any) => {
		e.preventDefault();

		if (nameState.length < 3) {
			setErrorMessage("Player name must be at least 3 characters long");
			return;
		} else if (!/[a-zA-Z]/.test(nameState)) {
			setErrorMessage("Player name must contain at least one letter");
			return;
		} else {
			setErrorMessage(" ");
		}

		dispatch(changeName(nameState));
		dispatch(formSubmitted());
	};

	return (
		<Box
			sx={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<form id="name-form" onSubmit={handleSubmit}>
				<FormGroup sx={{ mt: 16 }}>
					<FormLabel
						component="legend"
						sx={{ my: 0.5, textAlign: "center" }}
					>
						Enter your player name!
					</FormLabel>
					<FormControl error={showError}>
						<TextField
							id="player-name"
							onChange={handleChange}
							label="Player Name"
							variant="outlined"
							value={nameState}
							sx={{ minWidth: 250, my: 0.5 }}
							aria-describedby="player-name-error"
						/>
						{/* <Box width="100%" sx={{ maxWidth: "100%" }}> */}
						<FormHelperText
							id="player-name-error"
							sx={{
								color: "red",
								fontSize: 10,
								textAlign: "center",
								my: 0.5,
							}}
						>
							{errorMessage}
						</FormHelperText>
						{/* </Box> */}
						<Button
							type="submit"
							onClick={handleSubmit}
							variant="contained"
							sx={{ my: 0.5 }}
						>
							Play
						</Button>
					</FormControl>
				</FormGroup>
			</form>
		</Box>
	);
};

export default NameInput;
