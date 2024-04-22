import { Stack, alpha } from "@mui/material";
import LetterButton from "./LetterButton";
import { alphabet_EN as alphabet } from "../utils/alphabet";

// Create button for each letter of alphabet
const Keyboard = () => {
	// since English Alphabet has 26 letters, we can split it in half to have two lines of letter buttons for game
	// Math ceil is used when alphabet has uneven number of letters, so upper row has more letters than bottom row
	const alphabetLength = Math.ceil(alphabet.length / 2);
	const firstHalf = alphabet.slice(0, alphabetLength);
	const secondHalf = alphabet.slice(alphabetLength);

	return (
		<>
			<Stack
				spacing={2}
				direction="row"
				useFlexGap
				flexWrap="wrap"
				sx={{ justifyContent: "center", my: 2 }}
			>
				{firstHalf.map((letter) => (
					<LetterButton letter={letter} key={letter} />
				))}
			</Stack>
			<Stack
				spacing={2}
				direction="row"
				useFlexGap
				flexWrap="wrap"
				sx={{ justifyContent: "center", my: 2 }}
			>
				{secondHalf.map((letter) => (
					<LetterButton letter={letter} key={letter} />
				))}
			</Stack>
		</>
	);
};

export default Keyboard;
