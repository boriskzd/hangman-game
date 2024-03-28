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

/*
    ADD FORM VALIDATION
    INPUT CAN'T BE EMPTY
*/

const NameInput = () => {
	console.log("[Name Input] - RENDER");
	const name = useSelector((state: RootState) => state.app.name);
	const [nameState, setNameState] = useState(name);
	const dispatch = useDispatch();

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setNameState(e.target.value);
	};

	const handleSubmit = (e: any) => {
		e.preventDefault();

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
					<TextField
						id="name"
						onChange={handleChange}
						label="Player Name"
						variant="outlined"
						value={nameState}
						sx={{ my: 0.5 }}
					/>
					<Button
						type="submit"
						onClick={handleSubmit}
						variant="contained"
						sx={{ my: 0.5 }}
					>
						Play
					</Button>
				</FormGroup>
			</form>
		</Box>
	);
};

export default NameInput;
