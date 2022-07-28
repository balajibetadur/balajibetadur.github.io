import React, { useRef } from "react";
import "./App.css";
import Home from "./Pages/Home/Home";
import Experience from "./Pages/Experience/Experience";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";
import ScrollToTop from "react-scroll-up";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min";

function App() {
	const aboutRef = useRef(null);

	return (
		<div className="App">
			<Router>
				<NavBar aboutRef={aboutRef} />
				<Routes>
					<Route
						exact
						path="/"
						element={
							<Home
								aboutRef={
									aboutRef
								}
							/>
						}
					/>
					<Route
						path="/experience"
						element={<Experience />}
					/>
				</Routes>
				<Footer />
				<ScrollToTop
					className="scrollToTop"
					showUnder={500}
				>
					<KeyboardArrowUpIcon className="scrollToTopIcon" />
				</ScrollToTop>
			</Router>
		</div>
	);
}

export default App;
