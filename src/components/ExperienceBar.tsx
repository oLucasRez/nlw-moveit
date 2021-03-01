//--------------------------------------------------------------------< hooks >
import { useContext } from "react";
//-----------------------------------------------------------------< contexts >
import { ChallengesContext } from "../contexts/ChallengesContext";
//-------------------------------------------------------------------< styles >
import styles from "../styles/components/ExperienceBar.module.css";
//========================================================[ < ExperienceBar > ]
export default function ExperienceBar() {
  //-------------------------------------------------------------< properties >
  const { currentExperience, experienceToNextLevel } = useContext(
    ChallengesContext
  );
  //---------------------------------------------------------------------------
  const percentToNextLevel =
    Math.round(currentExperience * 100) / experienceToNextLevel;
  console.log(experienceToNextLevel);
  //-----------------------------------------------------------------< return >
  return (
    <header className={styles.container}>
      <span>0 xp</span>

      <div>
        <div style={{ width: `${percentToNextLevel}%` }} />
        <span
          className={styles.currentExperience}
          style={{ left: `${percentToNextLevel}%` }}
        >
          {currentExperience} xp
        </span>
      </div>

      <span>{experienceToNextLevel} xp</span>
    </header>
  );
}
