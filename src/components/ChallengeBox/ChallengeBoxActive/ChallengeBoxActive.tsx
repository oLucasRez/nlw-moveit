//---------------------------------------------------------------< components >
import FooterFinished from "./FooterFinished";
import FooterNotFinished from "./FooterNotFinished";
//--------------------------------------------------------------------< hooks >
import { useNotification } from "../../../hooks/useNotification";
import { useContext, useEffect } from "react";
import { useCountdown } from "../../../hooks/useCountdown";
//-----------------------------------------------------------------< contexts >
import { ChallengesContext } from "../../../contexts/ChallengesContext";
import { BreakContext } from "../../../contexts/BreakContext";
//-------------------------------------------------------------------< styles >
import styles from "../../../styles/components/ChallengeBox/ChallengeBoxActive/ChallengeBoxActive.module.css";
//===================================================[ < ChallengeBoxActive > ]
export default function ChallengeBoxActive() {
  //-------------------------------------------------------------< properties >
  const notify = useNotification();
  //---------------------------------------------------------------------------
  const { activeChallenge } = useContext(ChallengesContext);
  const { breakPattern, currentBreakIndex } = useContext(BreakContext);
  //---------------------------------------------------------------------------
  const countdown = useCountdown(breakPattern[currentBreakIndex]);
  //----------------------------------------------------------------< methods >
  useEffect(
    () =>
      countdown.hasFinished &&
      notify("Pausa finalizada", `Você conseguiu realizar o desafio?`),
    [countdown.hasFinished]
  );
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
