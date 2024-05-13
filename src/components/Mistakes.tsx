import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { Box, Typography } from "@mui/material";
import { numberOfMistakes } from "../utils/constants";

const Mistakes = () => {
	const mistakes = useSelector((state: RootState) => state.app.mistakes);

	return (
		<Box sx={{ width: 185 }}>
			<Typography variant="overline">Mistakes:</Typography>
			<Box sx={{ display: "flex", gap: 1 }}>
				{/* the _ in .map((_, index) indicates that current element isn't used in mapping functions */}
				{[...Array(numberOfMistakes)].map((_, i) => (
					<Box
						sx={{
							width: 24,
							height: 24,
							border: "2px solid black",
							borderRadius: "50%",
							background: mistakes <= i ? "#ddd" : "#C40C0C",
						}}
					/>
				))}
			</Box>
		</Box>
	);
};

export default Mistakes;
