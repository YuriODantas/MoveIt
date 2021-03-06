import { useContext } from 'react'
import { ChallengesContext } from '../contexts/CallengeContext'
import styles from '../styles/components/Profile.module.css'

export function Profile() {
    const { level } = useContext(ChallengesContext);

    return (
        <div className={styles.profileContainer}>
            <img src='https://github.com/YuriODantas.png' alt='Yuri Dantas' />
            <div>
                <strong>Yuri Dantas</strong>
                <p>
                    <img src='icons/level.svg' alt='Level' />
                    Level {level}
                </p>
            </div>
        </div>
    )
}