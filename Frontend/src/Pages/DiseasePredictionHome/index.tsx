import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import placeholderImg from "./imgplaceholder.jpeg";
import { predictDisease } from "../../Api";

function DiseasePredictionHome() {
	const [img, setImg] = useState(placeholderImg);
	const [buttonDisabled, setButtonDisabled] = useState(true);
	const [formdata, setFormdata] = useState<null | FormData>(null);

	const selectFile = () => {
		document.getElementById("userImg")?.click();
	};

	function renderImg(e: any) {
		const files = e.target.files[0];
		if (files) {
			const fileReader = new FileReader();
			fileReader.readAsDataURL(files);
			fileReader.addEventListener("load", function () {
				setImg(String(this.result));
				setButtonDisabled(false);
				const fd = new FormData();
				fd.append("file", files);
				setFormdata(fd);
			});
		}
	}

	async function handleSubmit() {
		if (formdata) {
			const res = await predictDisease(formdata);
			if (res?.data.status) {
				window.location.href = `./disease-detection/${res?.data.data}`;
			}
			return null;
		}
		return null;
	}
	return (
		<div style={{ margin: "8% 25% 3% 25%" }}>
			<Box
				component="form"
				sx={{
					"& > :not(style)": { m: 1, width: "100%" },
				}}
				noValidate
				autoComplete="off"
			>
				<h1 style={{ textAlign: "center" }}>Plant Disease Detection</h1>
				<p style={{ textAlign: "center" }}>
					Simply upload your plant's leaf image
				</p>
				<input
					id="userImg"
					type="file"
					style={{ display: "none" }}
					required={true}
					onChange={renderImg}
					accept={"image/*"}
				/>
				<img
					style={{ border: "1px dashed black" }}
					src={img}
					onClick={selectFile}
					onError={() => setImg(placeholderImg)}
				></img>
				<Button
					disabled={buttonDisabled}
					onClick={handleSubmit}
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
					Detect
				</Button>
			</Box>
		</div>
	);
}

export default DiseasePredictionHome;
