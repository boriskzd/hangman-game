import { Card, CardContent, Typography, Paper } from "@mui/material";

function MainContainer({ children }: any) {
	return (
		<Paper
			elevation={1}
			square
			sx={{
				bgcolor: "#023f45",
				minHeight: "100vh",
				p: {
					xs: 1,
					md: 3,
					lg: 5,
				},
			}}
		>
			<Card
				sx={{
					minWidth: 275,
					maxWidth: 800,
					mx: "auto",
					minHeight: 600,
				}}
			>
				<CardContent sx={{ minHeight: "100%" }}>
					<Typography
						variant="h3"
						component="h1"
						textAlign="center"
						sx={{ mb: 2 }}
					>
						Hangman
					</Typography>
					{children}
				</CardContent>
			</Card>
		</Paper>
	);
}

export default MainContainer;
