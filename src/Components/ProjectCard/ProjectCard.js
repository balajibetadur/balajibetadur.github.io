import React from 'react'
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import './ProjectCard.css'
import { Fade } from 'react-reveal';

function ProjectCard({ title, desc, skills, index }) {
    return (
        <Fade bottom delay={index * 200}>
            <div className='projectcard'>
                <Fade left delay={1000}><a href="" target='_blank' className="projectcard__github"><p>GitHub</p> <OpenInNewIcon className='github__open__icon' /></a></Fade>
                <p className="projectcard__title">{title}</p>
                <p className="projectcard__desc">{desc}</p>
                <div className="projectcard__skills">
                    {Object.entries(skills).map((value, index) => {
                        return <div className="projectcard__skill">
                            <img className="projectcard__skill__image" src={value[1]} alt="" />
                            <p className="projectcard__skill__name">{value[0]}</p>
                        </div>
                    })}
                </div>
            </div>
        </Fade>
    )
}

export default ProjectCard