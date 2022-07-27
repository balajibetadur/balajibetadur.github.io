import React from "react";
import User from "../../Data/User";
import "./Footer.css";

function Footer() {
	return (
		<div className="footer">
			<p className="footer__text">
				Made with ❤️ by {User.firstName} {User.lastName}
			</p>
		</div>
	);
}

export default Footer;
