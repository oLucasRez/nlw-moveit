//--------------------------------------------------------------------< hooks >
import { useContext } from "react";
//-----------------------------------------------------------------< contexts >
import { ChallengesContext } from "../../../contexts/ChallengesContext";
import { CountdownContext } from "../../../contexts/CountdownContext";
import { BreakContext } from "../../../contexts/BreakContext";
//-------------------------------------------------------------------< styles >
import styles from "../../../styles/components/ChallengeBox/ChallengeBoxActive/FooterFinished.module.css";
//=======================================================[ < FooterFinished > ]
export default function FooterFinished() {
  //-------------------------------------------------------------< properties >
  const { resetChallenge, completeChallenge } = useContext(ChallengesContext);
  const { resetCountdown } = useContext(CountdownContext);
  const { gotoNextBreak } = useContext(BreakContext);
  //----------------------------------------------------------------< methods >
  function onChallengeSucceeded() {
    completeChallenge();
    resetCountdown();
    gotoNextBreak();
  }

  function onChallengeFailed() {
    resetChallenge();
    resetCountdown();
    gotoNextBreak();
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
