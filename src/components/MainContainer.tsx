import { Card, CardContent, Typography, Paper } from "@mui/material";

function MainContainer({ children }: any) {
	return (
		<Paper
			elevation={1}
			sx={{ bgcolor: "#023f45", minHeight: "100vh", p: 5 }}
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
