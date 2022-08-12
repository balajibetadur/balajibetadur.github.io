import React from 'react'
import './Achievements.css'
import userAchievements from '../../Data/Achievements'
import AchievementsImage from '../../Assets/Achievements.svg'
import PageLanding from '../../Components/PageLanding/PageLanding'
import AchievementCard from '../../Components/AchievementCard/AchievementCard'


function Achievements() {
    return (
        <div className='achievements'>
            <div className="projects__landing">
                <PageLanding
                    image={AchievementsImage}
                    title={userAchievements.landingInfo.title}
                    subtitle={
                        userAchievements.landingInfo
                            .subTitle
                    }
                    description={
                        userAchievements.landingInfo
                            .description
                    }
                />
            </div>
            <div className="projects__list">
                {userAchievements.achievements.map((value, index1) => {
                    return <AchievementCard title={value} category={'achievement'} index={index1} />
                })}
                {userAchievements.extras.map((value, index2) => {
                    return <AchievementCard title={value} category={'extra'} index={5 + index2} />
                })}
            </div>
        </div>
    )
}

export default Achievements
