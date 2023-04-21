import React from "react";
import {
	Box,
	Grid,
	Card,
	CardContent,
	Typography,
	Button,
} from "@mui/material";
import supplementsData from "../../Data/supplements.json";
function Supplements() {
	return (
		<div
			style={{
				marginTop: "5%",
				marginLeft: "5%",
				marginRight: "5%",
				marginBottom: "5%",
			}}
		>
			<Box>
				<Grid container spacing={2}>
					{supplementsData.map((supp) => (
						<Grid item xs={12} md={4} sm={4}>
							<Card
								sx={{
									// width: "100%",
									// height: "100%",
									border: "0.2px solid grey",
								}}
							>
								<CardContent>
									<img
										style={{
											height: "300px",
											display: "block",
											marginLeft: "auto",
											marginRight: "auto",
											padding: "20px",
										}}
										src={supp["supplement image"]}
									></img>

									<Typography gutterBottom variant="h6" component="div">
										{supp["supplement name"]}
									</Typography>
									<Button
										onClick={() => {
											window.open(supp["buy link"], "_blank");
										}}
										fullWidth
										sx={{
											// background: "#FF725E",
											padding: "12px",
											// color: "white",
											"&:hover": {
												// backgroundColor: "#FF725E",
												// color: "white",
											},
										}}
										variant="outlined"
									>
										Buy
									</Button>
								</CardContent>
							</Card>
						</Grid>
					))}
				</Grid>
			</Box>
		</div>
	);
}

export default Supplements;
