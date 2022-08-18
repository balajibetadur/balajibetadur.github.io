import React from "react";
import "./Experience.css";
import PageLanding from "../../Components/PageLanding/PageLanding";
import ExperienceImage from "../../Assets/Experience.svg";
import UserExperience from "../../Data/Experience";
import ExperienceCard from "../../Components/ExperienceCard/ExperienceCard";
import { Fade } from "react-reveal";
import ResearchPaper from "../../Components/ResearchPaper/ResearchPaper";
import VolunteerCard from "../../Components/VolunteerCard/VolunteerCard";

function Experience() {
	return (
		<div class="experience">
			<div className="experience__landing">
				<PageLanding
					image={ExperienceImage}
					title={UserExperience.landingInfo.title}
					subtitle={
						UserExperience.landingInfo
							.subTitle
					}
					description={
						UserExperience.landingInfo
							.description
					}
				/>
			</div>
			<div className="experience__work">
				<Fade bottom>
					<div className="experience__work__title">
						Work Experience
					</div>
				</Fade>
				<div className="experience__work__list">
					{UserExperience.workExperience.map(
						(value, index) => {
							return (
								<ExperienceCard
									id={
										index
									}
									title={
										value.title
									}
									company={
										value.company
									}
									description={
										value.description
									}
									fromDate={
										value.from
									}
									toDate={
										value.to
									}
									moreDesc={
										value.more
									}
								/>
							);
						},
					)}
				</div>
			</div>
			<div className="experience__research">
				<Fade bottom>
					<div className="experience__research__title">
						<p className="experience__research__text">
							Research Papers
						</p>
					</div>
				</Fade>
				<div className="experience__research__list">
					{UserExperience.researchPapers.map(
						(value, index) => {
							return (
								<ResearchPaper
									title={
										value.title
									}
									institute={
										value.institute
									}
									status={
										value.status
									}
									tag={
										value.tag
									}
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
			<div className="volunteerships">
				<Fade bottom>
					<div className="volunteership__title">
						<p className="volunteership__title__text">
							Volunteerships
						</p>
					</div>
				</Fade>
				<div className="volunteerships__list">
					{UserExperience.volunteership.map(
						(value, index) => {
							return (
								<VolunteerCard
									id={
										index
									}
									key={
										index
									}
									title={
										value.title
									}
									company={
										value.company
									}
									description={
										value.description
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

export default Experience;
