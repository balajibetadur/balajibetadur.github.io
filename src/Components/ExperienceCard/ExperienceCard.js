import React, { useState } from "react";
import "./ExperienceCard.css";
import { Fade } from "react-reveal";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

function ExperienceCard({ id, title, company, description, fromDate, toDate, moreDesc }) {
	const [more, setMore] = useState(false)
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
					{/* {!more && <p onClick={() => setMore(true)} className="experience__more">more <ArrowDropDownIcon /></p>}
					{more && <>
						{moreDesc && moreDesc.map((value, index) => <p className="experience__description mini">{value}</p>)}
						<p onClick={() => setMore(false)} className="experience__more">less <ArrowDropUpIcon /></p>

					</>} */}

				</div>
			</div>
		</Fade>
	);
}

export default ExperienceCard;
