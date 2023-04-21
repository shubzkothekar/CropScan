import React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import crop from "../../Assets/crop.jpg";
import fertilizers from "../../Assets/fertilizers.jpg";
import disease from "../../Assets/disease.jpg";
import supplement from "../../Assets/supplement.jpg";

function HomePage() {
	return (
		<div style={{ margin: "10% 5% 3% 5%" }}>
			<Box>
				<Grid container spacing={2}>
					<Grid
						item
						xs={12}
						md={3}
						sm={3}
						onClick={() => (window.location.href = "/crop-recommendation")}
					>
						<Card
							sx={{ width: "100%", height: "100%", border: "0.5px solid grey" }}
						>
							<CardMedia component="img" image={crop} />

							<CardContent>
								<Typography
									style={{ textAlign: "center" }}
									gutterBottom
									variant="h6"
									component="div"
								>
									Crop Recommendation
								</Typography>
							</CardContent>
						</Card>
					</Grid>
					<Grid
						item
						xs={12}
						md={3}
						sm={3}
						onClick={() => (window.location.href = "/disease-detection")}
					>
						<Card
							sx={{ width: "100%", height: "100%", border: "0.5px solid grey" }}
						>
							<CardMedia component="img" image={disease} />
							<CardContent>
								<Typography
									style={{ textAlign: "center" }}
									gutterBottom
									variant="h6"
									component="div"
								>
									Disease Detection
								</Typography>
							</CardContent>
						</Card>
					</Grid>
					<Grid
						item
						xs={12}
						md={3}
						sm={3}
						onClick={() =>
							(window.location.href = "/fertilizer-recommendation")
						}
					>
						<Card
							sx={{ width: "100%", height: "100%", border: "0.5px solid grey" }}
						>
							<CardMedia component="img" image={fertilizers} />
							<CardContent>
								<Typography
									style={{ textAlign: "center" }}
									gutterBottom
									variant="h6"
									component="div"
								>
									Fertilizer Recommendation
								</Typography>
							</CardContent>
						</Card>
					</Grid>
					<Grid
						item
						xs={12}
						md={3}
						sm={3}
						onClick={() => (window.location.href = "/supplements")}
					>
						<Card
							sx={{ width: "100%", height: "100%", border: "0.5px solid grey" }}
						>
							<CardMedia component="img" image={supplement} />
							<CardContent>
								<Typography
									style={{ textAlign: "center" }}
									gutterBottom
									variant="h6"
									component="div"
								>
									Supplements
								</Typography>
							</CardContent>
						</Card>
					</Grid>
				</Grid>
			</Box>
		</div>
	);
}

export default HomePage;
