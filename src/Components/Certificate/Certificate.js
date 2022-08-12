import React from "react";
import "./Certificate.css";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { Fade } from "react-reveal";

function Certificate({ title, link, by, id }) {
	return (
		<Fade bottom delay={id * 200}>
			<div
				onClick={() =>
					window.open(
						link,
						"_blank",
						"noopener,noreferrer",
					)
				}
				className="certificate"
			>
				<p className="certificate__name">{title}</p>
				<span className="certificate__info">-{by}</span>
				<span className="certificate__open">
					<OpenInNewIcon />
				</span>
			</div>
		</Fade>
	);
}

export default Certificate;
