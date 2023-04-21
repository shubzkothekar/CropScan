import React from "react";
import {
	Box,
	TextField,
	Button,
	FormControl,
	InputLabel,
	Select,
	MenuItem,
	Modal,
} from "@mui/material";
import { stateArray } from "./states";
import { cities } from "./cities";
import { predictCrop } from "../../Api";

function CropRecommendationHome() {
	const style = {
		position: "absolute" as "absolute",
		top: "50%",
		left: "50%",
		transform: "translate(-50%, -50%)",
		width: 400,
		bgcolor: "background.paper",

		boxShadow: 24,
		p: 4,
	};
	const [nitrogen, setNitrogen] = React.useState("");
	const [phosphorous, setPhosphorous] = React.useState("");
	const [potassium, setPotassium] = React.useState("");
	const [ph, setPh] = React.useState("");
	const [rainfall, setRainfall] = React.useState("");
	const [state, setState] = React.useState(0);
	const [city, setCity] = React.useState("");
	const [crop, setCrop] = React.useState("");
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	async function handleRecommend() {
		try {
			const fd = new FormData();
			fd.append("nitrogen", nitrogen);
			fd.append("phosphorous", phosphorous);
			fd.append("pottasium", potassium);
			fd.append("ph", ph);
			fd.append("rainfall", rainfall);
			fd.append("city", city);

			const res = await predictCrop(fd);
			if (res?.data.status) {
				setCrop(res.data.data);
				handleOpen();
			}
		} catch (error) {
			console.log(error);
		}
	}

	return (
		<div style={{ margin: "5% 25% 12% 25%" }}>
			<Box
				component="form"
				sx={{
					"& > :not(style)": { m: 2, width: "100%" },
				}}
				noValidate
				autoComplete="off"
			>
				<TextField
					type="number"
					label="Nitrogen"
					variant="outlined"
					required={true}
					onChange={(e) => {
						setNitrogen(e.target.value);
					}}
				/>
				<TextField
					type="number"
					label="Phosphorous"
					variant="outlined"
					required={true}
					onChange={(e) => {
						setPhosphorous(e.target.value);
					}}
				/>
				<TextField
					type="number"
					label="Potassium"
					variant="outlined"
					required={true}
					onChange={(e) => {
						setPotassium(e.target.value);
					}}
				/>
				<TextField
					type="number"
					label="pH Level"
					variant="outlined"
					required={true}
					onChange={(e) => {
						setPh(e.target.value);
					}}
				/>
				<TextField
					type="number"
					label="Rainfall (in mm)"
					variant="outlined"
					required={true}
					onChange={(e) => {
						setRainfall(e.target.value);
					}}
				/>
				<FormControl fullWidth>
					<InputLabel id="demo-simple-select-label">State</InputLabel>
					<Select
						labelId="demo-simple-select-label"
						id="demo-simple-select"
						// value={}
						label="State"
						onChange={(e) => {
							//@ts-ignore
							setState(e.target.value);
						}}
						required={true}
					>
						{stateArray.map((val, index) => {
							return (
								<MenuItem key={index} value={index}>
									{val}
								</MenuItem>
							);
						})}
					</Select>
				</FormControl>

				<FormControl fullWidth>
					<InputLabel id="demo-simple-select-label">City</InputLabel>
					<Select
						labelId="demo-simple-select-label"
						id="demo-simple-select"
						// value={}
						label="Age"
						onChange={(e) => {
							//@ts-ignore
							setCity(e.target.value);
						}}
						required={true}
					>
						{cities[state].split("|").map((val, index) => {
							return (
								<MenuItem key={index} value={val}>
									{val}
								</MenuItem>
							);
						})}
					</Select>
				</FormControl>
				<Button
					onClick={handleRecommend}
					fullWidth
					sx={{
						background: "#FF725E",
						padding: "12px",
						color: "white",
						"&:hover": {
							backgroundColor: "#FF725E",
							color: "white",
						},
					}}
					variant="contained"
				>
					Recommend
				</Button>
				<Modal
					open={open}
					onClose={handleClose}
					aria-labelledby="parent-modal-title"
					aria-describedby="parent-modal-description"
				>
					<Box sx={style}>
						{`You should grow `}
						<b>{crop}</b>
					</Box>
				</Modal>
			</Box>
		</div>
	);
}

export default CropRecommendationHome;
