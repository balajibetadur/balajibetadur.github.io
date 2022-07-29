import React from "react";
import "./PageLanding.css";

function PageLanding({ image, title, subtitle, description }) {
	return (
		<div className="pagelanding">
			<div className="pagelanding__section1">
				<img
					src={image}
					alt=""
					className="pagelanding__image"
				/>
			</div>
			<div className="pagelanding__section2">
				<p className="pagelanding__title">{title}</p>
				<p className="pagelanding__subtitle">
					{subtitle}
				</p>
				<p className="pagelanding__description">
					{description}
				</p>
			</div>
		</div>
	);
}

export default PageLanding;
