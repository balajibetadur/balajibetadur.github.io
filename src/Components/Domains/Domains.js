import React from "react";
import "./Domains.css";
import { Fade } from "react-reveal";
import UserDomains from "../../Data/Domains";
import DomainCard from "../DomainCard/DomainCard";

function Domains() {
	return (
		<div className="domains">
			<div className="domains__header">
				<Fade bottom>
					<p className="domains__header__text">
						What I Do?
					</p>
				</Fade>
			</div>
			<div className="domains__sections">
				{Object.entries(UserDomains).map(
					(data, index) => {
						var key = data[0];
						var value = data[1];
						return (
							<DomainCard
								title={key}
								description={
									value.description
								}
								image={
									value.image
								}
								skills={
									value.skills
								}
								key={index}
							/>
						);
					},
				)}
			</div>
		</div>
	);
}

export default Domains;
