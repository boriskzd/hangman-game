import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@mui/material";
import { addLetter } from "../store/appSlice";
import { RootState } from "../store/store";

type LetterButtonProps = {
	letter: string;
};

const LetterButton: React.FC<LetterButtonProps> = ({ letter }) => {
	const gameOver = useSelector((state: RootState) => state.app.gameOver);
	const [isClicked, setIsClicked] = useState(false);

	const dispatch = useDispatch();

	const handleClick = () => {
		if (!gameOver) {
			setIsClicked(true);
			dispatch(addLetter(letter));
		}
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
