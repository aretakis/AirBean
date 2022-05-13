import airbean from "./assets/graphics/airbean-landing.svg";
import "./App.css";
import { Link } from "react-router-dom";
import flowers_left from "./assets/graphics/intro-graphic-left.svg";
import flowers_right from "./assets/graphics/intro-graphic-right.svg";

function App() {
	return (
		<div className="App">
			<img src={flowers_left} />
			<header className="App-header">
				<Link to="/menu">
					<img src={airbean} className="App-logo-airbean" alt="" />
				</Link>
			</header>
			<img src={flowers_right} />
		</div>
	);
}

export default App;
