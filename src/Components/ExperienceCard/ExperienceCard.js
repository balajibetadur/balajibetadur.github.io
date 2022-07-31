import React from "react";
import "./ExperienceCard.css";
import { Fade } from "react-reveal";

function ExperienceCard({ id, title, company, description, fromDate, toDate }) {
	return (
		<Fade bottom delay={200 * id}>
			<div className="experiencecard">
				<div className="experiencecard__section1">
					<p className="experiencecard__id">
						{id + 1}
					</p>
				</div>
				<div className="experiencecard__section2">
					<p className="experience__title">
						{title}
					</p>
					<p className="experience__company">
						@ {company}
					</p>
					<p className="experience__span">
						{fromDate} - {toDate}
					</p>
					<p className="experience__description">
						{description}
					</p>
				</div>
			</div>
		</Fade>
	);
}

export default ExperienceCard;
