//---------------------------------------------------------------< interfaces >
//------------------------------------------------------------------< classes >
//--------------------------------------------------------------------< pages >
//---------------------------------------------------------------< components >
import FooterFinished from "./FooterFinished";
import FooterNotFinished from "./FooterNotFinished";
//------------------------------------------------------------------< helpers >
//-----------------------------------------------------------------< services >
//--------------------------------------------------------------------< hooks >
import { useContext } from "react";
//-----------------------------------------------------------------< contexts >
import { useCountdown } from "../../../hooks/useCountdown";
import { ChallengesContext } from "../../../contexts/ChallengesContext";
import { BreakContext } from "../../../contexts/BreakContext";
//--------------------------------------------------------------------< utils >
//-------------------------------------------------------------------< assets >
//-------------------------------------------------------------------< styles >
import styles from "../../../styles/components/ChallengeBox/ChallengeBoxActive/ChallengeBoxActive.module.css";
//--------------------------------------------------------------------< types >
//-------------------------------------------------------------------< global >
//===================================================[ < ChallengeBoxActive > ]
export default function ChallengeBoxActive() {
  //-------------------------------------------------------------< properties >
  const { activeChallenge } = useContext(ChallengesContext);
  const { breakPattern, currentBreakIndex } = useContext(BreakContext);
  //---------------------------------------------------------------------------
  const countdown = useCountdown(breakPattern[currentBreakIndex]);
  //----------------------------------------------------------------< methods >
  //-----------------------------------------------------------------< return >
  return (
    <div className={styles.container}>
      <header>Ganhe {activeChallenge.amount} xp</header>

      <main>
        <img src={`icons/${activeChallenge.type}.svg`} alt="" />
        <strong>Novo desafio</strong>
        <p>{activeChallenge.description}</p>
      </main>

      {countdown.hasFinished ? (
        <FooterFinished />
      ) : (
        <FooterNotFinished countdown={countdown} />
      )}
    </div>
  );
}
