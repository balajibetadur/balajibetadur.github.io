import React from 'react'
import './Contact.css'
import ContactImage from '../../Assets/contact.svg'
import { Fade } from 'react-reveal'
import user from '../../Data/User'
import MailRoundedIcon from "@mui/icons-material/MailRounded";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

function Contact() {
    return (
        <div className='contact'>
            <Fade left>
                <div className="contact__image__div">
                    <img src={ContactImage} alt="" className="contact__image" />
                </div>
            </Fade>
            <div className="contact__info">
                <Fade right duration={1500}>
                    <p className="contact__prompt">
                        {user.contactPrompt}
                    </p>
                </Fade>
                <div className="social__media__icons">
                    <Fade right delay={1200}>
                        <a href={user.gmail} target='_blank' className="social__media__icon">
                            <MailRoundedIcon />
                        </a>
                    </Fade>
                    <Fade right delay={1400}>
                        <a href={user.linkedin} target='_blank' className="social__media__icon">
                            <LinkedInIcon />
                        </a>
                    </Fade>
                    <Fade right delay={1600}>
                        <a href={user.github} target='_blank' className="social__media__icon">
                            <GitHubIcon />
                        </a>
                    </Fade>
                </div>
                <Fade right delay={1800}>
                    <div className="contact__number">
                        <a onClick={() => window.open(`tel:${user.mobile}`)} className="mobile">{user.mobile}</a>
                    </div>
                </Fade>
            </div>
        </div>
    )
}
export default Contact