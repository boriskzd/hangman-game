import { useState } from "react";
import { useDispatch } from "react-redux";
import { Button } from "@mui/material";
import { addLetter } from "../store/appSlice";

type LetterButtonProps = {
	letter: string;
};

const LetterButton: React.FC<LetterButtonProps> = ({ letter }) => {
	const [isClicked, setIsClicked] = useState(false);

	const dispatch = useDispatch();

	const handleClick = () => {
		console.log(letter);
		setIsClicked(true);
		dispatch(addLetter(letter));
	};

	return (
		<Button
			onClick={handleClick}
			size="small"
			variant={!isClicked ? "contained" : "outlined"}
			disabled={isClicked}
			sx={{ minWidth: 32 }}
		>
			{letter}
		</Button>
	);
};
export default LetterButton;
