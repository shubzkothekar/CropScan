import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DiseasePredictionHome from "./Pages/DiseasePredictionHome";
import DiseasePredictionResults from "./Pages/DiseasePredictionResults";
import HomePage from "./Pages/HomePage";
import CropRecommendationHome from "./Pages/CropRecommendationHome";
import FertilizerRecommendationHome from "./Pages/FertilizerRecommendationHome";
import Supplements from "./Pages/Supplements";

function App() {
	return (
		<div className="App">
			<Router>
				<Routes>
					<Route path="/" element={<HomePage />}></Route>
					<Route
						path="/disease-detection"
						element={<DiseasePredictionHome />}
					></Route>
					<Route
						path="/disease-detection/:disease"
						element={<DiseasePredictionResults />}
					></Route>
					<Route
						path="/crop-recommendation"
						element={<CropRecommendationHome />}
					></Route>
					<Route
						path="/fertilizer-recommendation"
						element={<FertilizerRecommendationHome />}
					></Route>
					<Route path="/supplements" element={<Supplements />}></Route>
				</Routes>
			</Router>
		</div>
	);
}

export default App;
