import React from "react";
import { Fade } from "react-reveal";
import "./VolunteerCard.css";

function VolunteerCard({ id, title, company, description }) {
	return (
		<Fade bottom delay={id * 300}>
			<div className="volunteercard">
				<div className="volunteercard__section1">
					<p className="volunteercard__title">
						{title}
					</p>
					<p className="volunteercard__company">
						{company}
					</p>
				</div>
				<div className="hr"></div>
				<div className="volunteercard__section2">
					<p className="volunteercard__description">
						{description}
					</p>
				</div>
			</div>
		</Fade>
	);
}

export default VolunteerCard;
