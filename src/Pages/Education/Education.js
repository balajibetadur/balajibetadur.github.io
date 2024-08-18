import React from "react";
import PageLanding from "../../Components/PageLanding/PageLanding";
import "./Education.css";
import UserEducation from "../../Data/Education";
import EducationImage from "../../Assets/Education.svg";
import DegreeCard from "../../Components/DegreeCard/DegreeCard";
import UserCourses from "../../Data/Courses";
import Certificate from "../../Components/Certificate/Certificate";
import { Fade } from "react-reveal";

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
				<Fade bottom>
					<div className="education__degree__title">
						<p className="education__degree__title__text">
							Degrees
						</p>
					</div>
				</Fade>
				<Fade bottom>
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
				</Fade>
			</div>
			<div className="education__certification">
				<Fade bottom>
					<div className="education__certification__title">
						<p className="education__certification__title__text">
							Certifications
						</p>
					</div>
				</Fade>
				<div className="education__courses">
					{UserCourses.courses.map(
						(value, index) => {
							return (
								<Certificate
									title={
										value.title
									}
									link={
										value.link
									}
									by={value.by}
									key={
										index
									}
									id={
										index
									}
								/>
							);
						},
					)}
				</div>
			</div>
		</div>
	);
}

export default Education;
