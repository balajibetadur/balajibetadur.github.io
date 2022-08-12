import React, { useRef, useEffect } from "react";
import "./App.css";
import Home from "./Pages/Home/Home";
import Experience from "./Pages/Experience/Experience";
import { Routes, Route } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";
import ScrollToTop from "react-scroll-up";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Education from "./Pages/Education/Education";
import Projects from "./Pages/Projects/Projects";
import Achievements from "./Pages/Achievements/Achievements";
import Contact from "./Pages/Contact/Contact";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min";

function App() {
	const aboutRef = useRef(null);
	const { pathname } = useLocation();

	// useEffect(() => {
	// 	window.scrollTo(0, 0);
	// }, [pathname]);
	return (
		<div className="App">
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
					path="/education"
					element={
						<Education />
					}
				/>
				<Route
					path="/experience"
					element={
						<Experience />
					}
				/>
				<Route
					path="/projects"
					element={
						<Projects />
					}
				/>
				<Route
					path="/achievements"
					element={
						<Achievements />
					}
				/>
				<Route
					path="/contact"
					element={
						<Contact />
					}
				/>
			</Routes>
			<Footer />
			<ScrollToTop
				className="scrollToTop"
				showUnder={500}
			>
				<KeyboardArrowUpIcon className="scrollToTopIcon" />
			</ScrollToTop>
		</div>
	);
}

export default App;
