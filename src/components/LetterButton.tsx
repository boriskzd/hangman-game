import Button from "@mui/material/Button";

type LetterButtonProps = {
	letter: string;
};

const LetterButton: React.FC<LetterButtonProps> = ({ letter }) => {
	const handleClick = () => {
		console.log(letter);
	};

	return (
		<Button
			onClick={handleClick}
			size="small"
			variant="contained"
			sx={{ minWidth: 32 }}
		>
			{letter}
		</Button>
	);
};
export default LetterButton;
