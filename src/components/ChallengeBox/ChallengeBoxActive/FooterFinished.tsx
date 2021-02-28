//---------------------------------------------------------------< interfaces >
//------------------------------------------------------------------< classes >
//--------------------------------------------------------------------< pages >
//---------------------------------------------------------------< components >
//------------------------------------------------------------------< helpers >
//-----------------------------------------------------------------< services >
//--------------------------------------------------------------------< hooks >
import { useContext } from "react";
//-----------------------------------------------------------------< contexts >
import { ChallengesContext } from "../../../contexts/ChallengesContext";
import { CountdownContext } from "../../../contexts/CountdownContext";
import { BreakContext } from "../../../contexts/BreakContext";
//--------------------------------------------------------------------< utils >
//-------------------------------------------------------------------< assets >
//-------------------------------------------------------------------< styles >
import styles from "../../../styles/components/ChallengeBox/ChallengeBoxActive/FooterFinished.module.css";
//--------------------------------------------------------------------< types >
//-------------------------------------------------------------------< global >
//=======================================================[ < FooterFinished > ]
export default function FooterFinished() {
  //-------------------------------------------------------------< properties >
  const { resetChallenge, completeChallenge } = useContext(ChallengesContext);
  const { resetCountdown } = useContext(CountdownContext);
  const { nextBreak } = useContext(BreakContext);
  //----------------------------------------------------------------< methods >
  function onChallengeSucceeded() {
    completeChallenge();
    resetCountdown();
    nextBreak();
  }

  function onChallengeFailed() {
    resetChallenge();
    resetCountdown();
    nextBreak();
  }
  //-----------------------------------------------------------------< return >
  return (
    <>
      <footer className={styles.container}>
        <button
          type="button"
          className={styles.challengeFailedButton}
          onClick={onChallengeFailed}
        >
          Falhei
        </button>
        <button
          type="button"
          className={styles.challengeSucceededButton}
          onClick={onChallengeSucceeded}
        >
          Completei
        </button>
      </footer>
      <div className={styles.totalBar} />
    </>
  );
}
