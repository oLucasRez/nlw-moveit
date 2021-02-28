//---------------------------------------------------------------< interfaces >
//------------------------------------------------------------------< classes >
//--------------------------------------------------------------------< pages >
//---------------------------------------------------------------< components >
import ChallengeBoxActive from "./ChallengeBoxActive/ChallengeBoxActive";
import ChallengeBoxNotActive from "./ChallengeBoxNotActive";
//------------------------------------------------------------------< helpers >
//-----------------------------------------------------------------< services >
//--------------------------------------------------------------------< hooks >
import { useContext } from "react";
//-----------------------------------------------------------------< contexts >
import { ChallengesContext } from "../../contexts/ChallengesContext";
import { BreakContext } from "../../contexts/BreakContext";
//--------------------------------------------------------------------< utils >
//-------------------------------------------------------------------< assets >
//-------------------------------------------------------------------< styles >
import styles from "../../styles/components/ChallengeBox/ChallengeBox.module.css";
//--------------------------------------------------------------------< types >
//-------------------------------------------------------------------< global >
//=========================================================[ < ChallengeBox > ]
export default function ChallengeBox() {
  //-------------------------------------------------------------< properties >
  const { activeChallenge } = useContext(ChallengesContext);
  const { shortBreak, breakPattern, currentBreakIndex } = useContext(
    BreakContext
  );
  //---------------------------------------------------------------------------
  //----------------------------------------------------------------< methods >
  function getBalls() {
    const balls = [];

    for (let i = 0; i < breakPattern.length; i++) {
      const isShortBreak = breakPattern[i] === shortBreak;
      const className = isShortBreak ? styles.shortBreak : styles.longBreak;

      balls.push(
        <div
          key={i}
          className={`${className} ${
            currentBreakIndex === i && styles.currentBreak
          }`}
        />
      );
    }

    return balls;
  }
  //---------------------------------------------------------------------------
  //-----------------------------------------------------------------< return >
  return (
    <div className={styles.container}>
      <div className={styles.breakBallsContainer}>
        {getBalls().map((balls) => balls)}
      </div>
      {activeChallenge ? <ChallengeBoxActive /> : <ChallengeBoxNotActive />}
    </div>
  );
}
