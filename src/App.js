import React, { useRef, useEffect, useState } from "react";
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
// import LocomotiveScroll from "locomotive-scroll";

function App() {
	const aboutRef = useRef(null);
	const { pathname } = useLocation();
	const [width, setWidth] = useState(window.innerWidth);

	const updateDimensions = () => {
		setWidth(window.innerWidth);
	};

	useEffect(() => {
		window.addEventListener("resize", updateDimensions);
		return () =>
			window.removeEventListener("resize", updateDimensions);
	}, []);

	useEffect(() => {
		// if (width < 1100) {
		window.scrollTo(0, 0);
		// }
	}, [pathname]);

	// let container = useRef(null);

	// useEffect(() => {

	// 	new LocomotiveScroll({
	// 		el: container,
	// 		smooth: true,
	// 		lerp: .06,
	// 		multiplier: .5
	// 	});

	// }, []);

	return (
		// <div ref={el => container = el}>
		// <div className="App" data-scroll data-scroll-speed="1">
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
		// </div >
	);
}

export default App;
