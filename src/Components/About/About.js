import React from "react";
import "./About.css";
import { Fade } from "react-reveal";
import AboutUser from "../../Data/About";
import Domains from "../Domains/Domains";

function About({ aboutRef }) {
	return (
		<div ref={aboutRef} className="about">
			<Fade delay={500} bottom>
				<div className="about__text">
					<p>About Me</p>
				</div>
			</Fade>

			<div className="about__container">
				<div className="about__user">
					<Fade left duration={2000}>
						<div className="about__user__section1 ">
							<img
								src={
									AboutUser.image
								}
								alt=""
								className="about__user__image"
							/>
						</div>
					</Fade>
					<div className="about__user__section2 ">
						<div className="about__user__text">
							{AboutUser.description.map(
								(
									val,
									index,
								) => {
									return (
										<Fade
											key={
												index
											}
											bottom
											duration={
												2000
											}
											delay={
												index *
												400
											}
										>
											<p
												className={`about__user__text${index}`}
											>
												{
													val
												}
											</p>
										</Fade>
									);
								},
							)}
						</div>
					</div>
				</div>
				<div className="about__user__domains">
					<Domains />
				</div>
			</div>
		</div>
	);
}

export default About;
