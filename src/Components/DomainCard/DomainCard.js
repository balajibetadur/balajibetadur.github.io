import React from "react";
import "./DomainCard.css";
import { Fade } from "react-reveal";

function DomainCard({ title, description, image, skills }) {
	return (
		<div className="domaincard">
			<div className="domaincard__title">
				<Fade bottom>
					<p className="domaincard__title__text">
						{title}
					</p>
				</Fade>
			</div>
			<div className="domaincard__body">
				<div className="domaincard__section1">
					<Fade left duration={2000}>
						<img
							className="domaincard__image"
							src={image}
							alt=""
						/>
					</Fade>
				</div>
				<div className="domaincard__section2">
					<div className="domaincard__description">
						{description.map(
							(value, index) => {
								return (
									<Fade
										right
										delay={
											index *
											200
										}
									>
										<p
											className={`domaincard__description${index}`}
											key={
												index
											}
										>
											{
												value
											}
										</p>
									</Fade>
								);
							},
						)}
					</div>
					<div className="domaincard__skills">
						{Object.entries(skills).map(
							(value, index) => {
								var label =
									value[0];
								var src =
									value[1];
								return (
									<Fade
										right
										delay={
											index *
											150
										}
									>
										<div className="domaincard__skillcard">
											<img
												className="domaincard__skill"
												key={
													index
												}
												src={
													src
												}
												alt={
													label
												}
											/>
											<p className="domaincard__skill__label">
												{
													label
												}
											</p>
										</div>
									</Fade>
								);
							},
						)}
					</div>
				</div>
			</div>
		</div>
	);
}

export default DomainCard;
