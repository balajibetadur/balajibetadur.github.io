import React from "react";
import "./PageLanding.css";
import { Fade } from "react-reveal";

function PageLanding({ image, title, subtitle, description }) {
	return (
		<div className="pagelanding">
			<Fade left duration={1500}>
				<div className="pagelanding__section1">
					<img
						src={image}
						alt=""
						className="pagelanding__image"
					/>
				</div>
			</Fade>

			<div className="pagelanding__section2">
				<Fade right duration={1500}>
					<p className="pagelanding__title">
						{title}
					</p>
				</Fade>
				<Fade right duration={1500} delay={500}>
					<p className="pagelanding__subtitle">
						{subtitle}
					</p>
				</Fade>
				<Fade right duration={1500} delay={1000}>
					<p className="pagelanding__description">
						{description}
					</p>
				</Fade>
			</div>
		</div>
	);
}

export default PageLanding;
