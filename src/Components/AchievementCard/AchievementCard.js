import React from 'react'
import './AchievementCard.css'
import EmojiEventsRoundedIcon from '@mui/icons-material/EmojiEventsRounded';
import MilitaryTechRoundedIcon from '@mui/icons-material/MilitaryTechRounded';
import { Fade } from 'react-reveal';

function AchievementCard({ title, category, index }) {
    return (
        <Fade bottom delay={index * 200}>
            <div className='achievementcard'>
                <div className="achievementcard__icon">
                    {
                        category === 'achievement' ? <EmojiEventsRoundedIcon className='achievement__icon' /> : <MilitaryTechRoundedIcon className='achievement__icon' />
                    }
                </div>
                <div className="achievementcard__title">
                    {title}
                </div>
            </div>
        </Fade>
    )
}

export default AchievementCard