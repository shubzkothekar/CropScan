import axios from "axios";

const BaseUrl = "http://localhost:5000";

export const predictDisease = async (formdata: FormData) => {
	try {
		let response = await axios.post(`${BaseUrl}/disease-predict`, formdata);
		return response;
	} catch (error) {
		console.log(error);
	}
};

export const predictCrop = async (formdata: FormData) => {
	try {
		let response = await axios.post(`${BaseUrl}/crop-predict`, formdata);
		return response;
	} catch (error) {
		console.log(error);
	}
};

export const predictFertilizer = async (formdata: FormData) => {
	try {
		let response = await axios.post(`${BaseUrl}/fertilizer-predict`, formdata);
		return response;
	} catch (error) {
		console.log(error);
	}
};
