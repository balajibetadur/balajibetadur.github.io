import React from 'react'
import ProjectImage from '../../Assets/Projects.svg'
import userProjects from '../../Data/Projects'
import PageLanding from '../../Components/PageLanding/PageLanding'
import { Fade } from 'react-reveal'
import './Projects.css'
import ProjectCard from '../../Components/ProjectCard/ProjectCard'
import user from '../../Data/User'

function Projects() {
    return (
        <div className='projects'>
            <div className="projects__landing">
                <PageLanding
                    image={ProjectImage}
                    title={userProjects.landingInfo.title}
                    subtitle={
                        userProjects.landingInfo
                            .subTitle
                    }
                    description={
                        userProjects.landingInfo
                            .description
                    }
                />
            </div>

            <div className="projects__list">
                <Fade bottom>
                    <div className="project__title">
                        Projects
                    </div>
                </Fade>
                <div className="projects__section">
                    {userProjects.projects.map((value, index) => {
                        return <ProjectCard title={value.title} desc={value.description} skills={value.skills} index={index} />
                    })}
                </div>
            </div>
            <div className="more__projects">
                <a href={user.github} target='_blank' className="more__projects__button">More Projects</a>
            </div>
        </div>
    )
}

export default Projects