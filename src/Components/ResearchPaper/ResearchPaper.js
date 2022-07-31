import React from "react";
import "./ResearchPaper.css";
import { Fade } from "react-reveal";

function ResearchPaper({ id, title, institute, status, tag }) {
	return (
		<Fade bottom delay={id * 400}>
			<div className="researchpaper">
				<div className="researchpaper__institute">
					<span className="researchpaper__institute__text">
						{institute}
					</span>
				</div>
				<div className="researchpaper__details">
					<p className="researchpaper__title">
						{title}
					</p>
					<div className="researchpaper__status">
						{tag ? (
							<span className="researchpaper__publish">
								{tag}
							</span>
						) : (
							<span></span>
						)}
						<span className="researchpaper__info">
							<span>status:</span>
							<span
								className={`researchpaper__status__info ${status}`}
							>
								{status}
							</span>
						</span>
					</div>
				</div>
			</div>
		</Fade>
	);
}

export default ResearchPaper;
