import React from "react";
import "./DegreeCard.css";

function DegreeCard({ data }) {
	return (
		<div className="degreecard">
			<div className="degreecard__section1">
				<img
					src={data.logo}
					alt=""
					className="degreecard__image"
				/>
			</div>
			<div className="degreecard__section2">
				<div className="degreecard__university__detais">
					<p className="degreecard__university__name">
						{data.university}
					</p>
					<p className="degreecard__university__duration">
						{data.from} - {data.to}
					</p>
				</div>
				<div className="degreecard__degree__details">
					<p className="degreecard__degree__name">
						{data.degree}
					</p>
					{data.cgpa &&
						<div className="degreecard__degree__score">
							<p className="degreecard__degree__cgpa">
								CGPA: {data.cgpa}
							</p>
						</div>
					}
				</div>
			</div>
		</div>
	);
}

export default DegreeCard;
