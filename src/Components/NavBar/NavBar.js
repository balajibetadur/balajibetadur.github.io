import React, { useState, useEffect } from "react";
import User from "../../Data/User";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
// import HandymanRoundedIcon from '@mui/icons-material/HandymanRounded';
// import PolicyRoundedIcon from "@mui/icons-material/PolicyRounded";
import WorkHistoryRoundedIcon from "@mui/icons-material/WorkHistoryRounded";
import ViewCarouselRoundedIcon from "@mui/icons-material/ViewCarouselRounded";
import EmojiEventsRoundedIcon from "@mui/icons-material/EmojiEventsRounded";
// import CardMembershipRoundedIcon from "@mui/icons-material/CardMembershipRounded";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import { Link, NavLink } from "react-router-dom";
// import Reveal from "react-reveal/Reveal";
import "./NavBar.css";
import { Fade } from "react-reveal";
import MenuIcon from '@mui/icons-material/Menu';

function NavBar({ aboutRef }) {
	const executeScroll = () => {
		setTimeout(() => {
			aboutRef.current &&
				aboutRef.current.scrollIntoView({
					behavior: "smooth",
					block: "start",
				});
		}, 500);
	};

	const [showNavBar, setShowNavBar] = useState(false);
	const [width, setWidth] = useState(window.innerWidth);

	function toggleMenu() {
		setShowNavBar(!showNavBar);
	}

	const updateDimensions = () => {
		setWidth(window.innerWidth);
	};

	useEffect(() => {
		window.addEventListener("resize", updateDimensions);
		return () =>
			window.removeEventListener("resize", updateDimensions);
	}, []);

	let style = {};
	if (width < 1100) {
		style = {
			transition: "all 0.5s",
			height: `${showNavBar ? "200px" : "0px"}`,
		};
	}

	return (
		<div className="navbar" id="navbar">
			{/* <Reveal effect="fadeInUp"> */}
			<div className="navbar__container">
				<div className="navbar__name">
					<Link to="/" className="link">
						<span>{User.firstName} {User.lastName}</span>
					</Link>
					<MenuIcon
						onClick={toggleMenu}
						className="navbar__options__icon icon"
					/>
				</div>

				<div className="navbar__menu" style={style}>
					<div
						className={`navbar__options`}
						id="navbar__options"
					>
						<Fade top delay={100}>
							<NavLink
								className="link"
								to="/"
							>
								<span
									onClick={() => {
										executeScroll();
										setShowNavBar(
											false,
										);
									}}
									className="navbar__option option__about"
								>
									<PersonRoundedIcon className="navbar__option__icon icon" />
									About
								</span>
							</NavLink>
						</Fade>
						<Fade top delay={200}>
							<NavLink
								className="link"
								to="/education"
							>
								<span
									onClick={() =>
										setShowNavBar(
											false,
										)
									}
									className="navbar__option option__education"
								>
									<SchoolRoundedIcon className="navbar__option__icon icon" />
									Education
								</span>
							</NavLink>
						</Fade>

						<Fade top delay={300}>
							<NavLink
								className="link"
								to="/experience"
							>
								<span
									onClick={() =>
										setShowNavBar(
											false,
										)
									}
									className="navbar__option option__experience"
								>
									<WorkHistoryRoundedIcon className="navbar__option__icon icon" />
									Experience
								</span>
							</NavLink>
						</Fade>
						<Fade top delay={400}>
							<NavLink
								className="link"
								to="/projects"
							>
								<span
									onClick={() =>
										setShowNavBar(
											false,
										)
									}
									className="navbar__option option__projects"
								>
									<ViewCarouselRoundedIcon className="navbar__option__icon icon" />
									Projects
								</span>
							</NavLink>
						</Fade>

						<Fade top delay={500}>
							<NavLink
								className="link"
								to="/achievements"
							>
								<span
									onClick={() =>
										setShowNavBar(
											false,
										)
									}
									className="navbar__option option__achievements"
								>
									<EmojiEventsRoundedIcon className="navbar__option__icon icon" />
									Achievements
								</span>
							</NavLink>
						</Fade>
						<Fade top delay={600}>
							<NavLink
								className="link"
								to="/contact"
							>
								<span className="navbar__option option__contact">
									<SendRoundedIcon className="navbar__option__icon" />
									Contact
								</span>
							</NavLink>
						</Fade>
					</div>
					<div className="navbar__close">
						<CloseRoundedIcon
							onClick={toggleMenu}
							className="navbar__close__icon icon"
						/>
					</div>
				</div>
			</div>
			{/* </Reveal> */}
		</div>
	);
}

export default NavBar;
