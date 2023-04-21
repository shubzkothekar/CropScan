import React from "react";
import {
	Box,
	TextField,
	Button,
	FormControl,
	InputLabel,
	Select,
	MenuItem,
	SelectChangeEvent,
	Modal,
} from "@mui/material";

import fertilizersData from "../../Data/fertilizers.json";
import fertilizerDic from "../../Data/fertilizerDic.json";

function FertilizerRecommendationHome() {
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

	const [N, setN] = React.useState("");
	const [P, setP] = React.useState("");
	const [K, setK] = React.useState("");
	const [cropName, setCropName] = React.useState("");
	const [results, setResults] = React.useState("");

	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	const getMax = (object: Object) => {
		return Object.keys(object).filter((x: any) => {
			//@ts-ignore
			return object[x] == Math.max.apply(null, Object.values(object));
		});
	};

	const handleSubmit = () => {
		let nr, pr, kr, crop;
		crop = fertilizersData.filter((ob) => ob.Crop === cropName);
		nr = crop[0].N;
		pr = crop[0].P;
		kr = crop[0].K;

		let n, p, k;

		n = nr - parseInt(N);
		p = pr - parseInt(P);
		k = kr - parseInt(K);

		let temp = { N: n, P: p, K: k };

		let maxValue = getMax(temp);

		console.log(maxValue);
		let key;

		if (maxValue[0] === "N") {
			if (n < 0) {
				key = "NHigh";
			} else {
				key = "Nlow";
			}
		} else if (maxValue[0] === "P") {
			if (p < 0) {
				key = "PHigh";
			} else {
				key = "Plow";
			}
		} else if (maxValue[0] === "K") {
			if (k < 0) {
				key = "KHigh";
			} else {
				key = "Klow";
			}
		}

		//@ts-ignore
		setResults(fertilizerDic[key]);
		handleOpen();
	};

	return (
		<div style={{ margin: "10% 25% 12% 25%" }}>
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
						setN(e.target.value);
					}}
				/>
				<TextField
					type="number"
					label="Phosphorous"
					variant="outlined"
					required={true}
					onChange={(e) => {
						setP(e.target.value);
					}}
				/>
				<TextField
					type="number"
					label="Potassium"
					variant="outlined"
					required={true}
					onChange={(e) => {
						setK(e.target.value);
					}}
				/>

				<FormControl fullWidth>
					<InputLabel id="demo-simple-select-label">Crop</InputLabel>
					<Select
						labelId="demo-simple-select-label"
						id="demo-simple-select"
						// value={}
						label="Age"
						onChange={(e: SelectChangeEvent) => {
							setCropName(e.target.value);
						}}
						required={true}
					>
						{fertilizersData.map((f) => (
							<MenuItem value={f.Crop}>{f.Crop}</MenuItem>
						))}
					</Select>
				</FormControl>

				<Button
					onClick={() => {
						handleSubmit();
					}}
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
			</Box>

			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="parent-modal-title"
				aria-describedby="parent-modal-description"
			>
				<Box sx={style} dangerouslySetInnerHTML={{ __html: results }}></Box>
			</Modal>
		</div>
	);
}

export default FertilizerRecommendationHome;
