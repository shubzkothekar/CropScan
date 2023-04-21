import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { getDiseaseData } from "../../Data/diseases";
import { useParams } from "react-router-dom";

function DiseasePredictionResults() {
	const param = useParams();
	return (
		<div
			style={{
				marginTop: "10%",
				marginLeft: "5%",
				marginRight: "5%",
				marginBottom: "10%",
			}}
		>
			<Box>
				<Grid container spacing={2}>
					<Grid item xs={12} md={4} sm={4}>
						<Card
							sx={{ width: "100%", height: "100%", border: "0.2px solid grey" }}
						>
							<CardMedia
								component="img"
								height="210"
								image={param.disease && getDiseaseData(param.disease).image_url}
								alt="green iguana"
							/>
							<CardContent>
								<Typography gutterBottom variant="h5" component="div">
									{param.disease && getDiseaseData(param.disease).disease_name}
								</Typography>
								<Typography variant="body2" color="text.secondary">
									{param.disease && getDiseaseData(param.disease).description}
								</Typography>
							</CardContent>
						</Card>
					</Grid>
					<Grid item xs={12} md={4} sm={4}>
						<Card
							sx={{ width: "100%", height: "100%", border: "0.2px solid grey" }}
						>
							<CardContent>
								<Typography gutterBottom variant="h5" component="div">
									Prevention
								</Typography>
								<Typography variant="body2" color="text.secondary">
									{param.disease &&
										getDiseaseData(param.disease).possible_steps}
								</Typography>
							</CardContent>
						</Card>
					</Grid>
					<Grid item xs={12} md={4} sm={4}>
						<Card
							sx={{
								width: "100%",
								height: "100%",
								border: "0.2px solid grey",
							}}
						>
							<CardContent>
								<Typography gutterBottom variant="h5" component="div">
									Supplement
								</Typography>
								<img
									style={{
										display: "block",
										marginLeft: "auto",
										marginRight: "auto",
										padding: "20px",
									}}
									src={
										param.disease &&
										getDiseaseData(param.disease).supplement_image
									}
								></img>

								<Typography gutterBottom variant="h6" component="div">
									{param.disease &&
										getDiseaseData(param.disease).supplement_name}
								</Typography>
								<Button
									onClick={() => {
										window.location.href = param.disease
											? getDiseaseData(param.disease).buy_link
											: window.location.href;
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
				</Grid>
			</Box>
		</div>
	);
}

export default DiseasePredictionResults;
