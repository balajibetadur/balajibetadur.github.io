import React from "react";
import "./Landing.css";
import LandingPageContent from "../../Data/LandingPageContent";
import MailRoundedIcon from "@mui/icons-material/MailRounded";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import User from "../../Data/User";
import Fade from "react-reveal/Fade";

// import wl from '../../Assets/im.jpeg'

function Landing() {
	return (
		<Fade duration={3000} delay={1200}>
			<div className="home">
				{/* <img src={wl} className="wl"/> */}
				<div className="home__container">
					<div className="home__user__profile">
						<Fade
							delay={1500 + 1200}
							bottom
						>
							<div className="home__social__media">
								<MailRoundedIcon className="home__social__media__icon icon" />
								<LinkedInIcon className="home__social__media__icon icon" />
								<GitHubIcon className="home__social__media__icon icon" />
								<div className="home__social__media__line"></div>
							</div>
						</Fade>

						<div className="home__profile__image">
							<svg
								className="blob"
								viewBox="0 0 200 187"
							>
								<mask
									className="mask"
									id="mask0"
									mask-type="alpha"
								>
									<path
										d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 
                130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 
                97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 
                0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"
									/>
								</mask>
								<g mask="url(#mask0)">
									<path
										d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 
                165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 
                129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 
                -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"
									/>
									<image
										x="10"
										y="-15"
										className="blob__img"
										href="dp.png"
									/>
								</g>
							</svg>
						</div>
					</div>
					<div className="home__user__description">
						<Fade delay={500 + 1200}>
							<p className="home__wish__text">
								Hi, I'm{" "}
								{User.firstName}
								.
							</p>
						</Fade>
						<Fade delay={700 + 1200}>
							<p className="home__description1">
								I build value
								through{" "}
								<span className="highlight">
									Data
									Science
								</span>
								,{" "}
								<span className="highlight">
									Machine
									Learning
								</span>{" "}
								and{" "}
								<span className="highlight">
									Frontend
								</span>
								.
							</p>
						</Fade>
						<Fade delay={900 + 1200}>
							<p className="home__description2">
								{
									LandingPageContent.description2
								}
							</p>
						</Fade>
						<Fade delay={1100 + 1200}>
							<p className="home__catch__phrase">
								`
								{
									LandingPageContent.catchPhrase
								}
								`
							</p>
						</Fade>
						<Fade delay={1300 + 1200}>
							<div className="home__resume">
								<p className="home__view__resume">
									Resume{" "}
									<SendRoundedIcon
										style={{
											height:
												"18px",
										}}
										className="home__resume__icon"
									/>
								</p>
							</div>
						</Fade>
					</div>
				</div>
			</div>
		</Fade>
	);
}

export default Landing;
