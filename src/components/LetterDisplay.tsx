import { useState } from "react";
import { Box, Typography } from "@mui/material";

const LetterDisplay = ({
	letter,
	isSpecialKey,
	isEnteredLetter,
	isUppercase,
}: {
	letter: string;
	isSpecialKey?: boolean;
	isEnteredLetter?: boolean;
	isUppercase?: boolean;
}) => {
	const [isOpened, setIsOpened] = useState(false);

	const finalLetter = isUppercase ? letter.toUpperCase() : letter;

	return (
		<Box
			sx={{
				width: 20,
				height: 28,
				display: "flex",
				flexDirection: "column",
				justifyContent: "flex-end",
				alignItems: "center",
			}}
		>
			<Typography textAlign="center">
				{isSpecialKey || isOpened || isEnteredLetter ? finalLetter : ""}
			</Typography>

			<Box
				sx={{
					width: 18,
					height: 2,
					backgroundColor: isSpecialKey ? "#eee" : "#bbb",
					marginLeft: "auto",
					marginRight: "auto",
				}}
			></Box>
		</Box>
	);
};

export default LetterDisplay;
