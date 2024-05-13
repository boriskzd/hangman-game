import { Box, Typography } from "@mui/material";

const LetterDisplay = ({
	letter,
	isSpecialKey,
	isEnteredLetter,
	isUppercase,
	isGameOver,
}: {
	letter: string;
	isSpecialKey?: boolean;
	isEnteredLetter?: boolean;
	isUppercase?: boolean;
	isGameOver?: boolean;
}) => {
	const finalLetter = isUppercase ? letter.toUpperCase() : letter;
	const color = isGameOver && !isEnteredLetter ? "#C40C0C" : "";

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
			<Typography textAlign="center" color={color}>
				{isSpecialKey || isEnteredLetter || isGameOver
					? finalLetter
					: ""}
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
