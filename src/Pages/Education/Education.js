import React from "react";
import PageLanding from "../../Components/PageLanding/PageLanding";
import "./Education.css";
import UserEducation from "../../Data/Education";
import EducationImage from "../../Assets/Education.svg";
import DegreeCard from "../../Components/DegreeCard/DegreeCard";

function Education() {
	return (
		<div className="education">
			<PageLanding
				image={EducationImage}
				title={UserEducation.title}
				subtitle={UserEducation.subTitle}
				description={UserEducation.description}
			/>
			<div className="education__degree">
				<div className="education__degree__title">
					<p className="education__degree__title__text">
						Degrees Received
					</p>
				</div>
				<div className="education__degrees">
					{UserEducation.degrees.map(
						(value, index) => {
							return (
								<DegreeCard
									className="education__degree_card"
									data={
										value
									}
									key={
										index
									}
								/>
							);
						},
					)}
				</div>
			</div>
			<div className="education__certification">
				<div className="education__certification__title">
					<p className="education__certification__title__text">
						Certifications
					</p>
				</div>
			</div>
		</div>
	);
}

export default Education;
