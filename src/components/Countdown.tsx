//---------------------------------------------------------------< interfaces >
//------------------------------------------------------------------< classes >
//--------------------------------------------------------------------< pages >
//---------------------------------------------------------------< components >
//------------------------------------------------------------------< helpers >
//-----------------------------------------------------------------< services >
//--------------------------------------------------------------------< hooks >
import { useContext } from "react";
//-----------------------------------------------------------------< contexts >
import { CountdownContext } from "../contexts/CountdownContext";
//--------------------------------------------------------------------< utils >
//-------------------------------------------------------------------< assets >
//-------------------------------------------------------------------< styles >
import styles from "../styles/components/Countdown.module.css";
//--------------------------------------------------------------------< types >
//-------------------------------------------------------------------< global >
//============================================================[ < Countdown > ]
export default function Countdown() {
  //-------------------------------------------------------------< properties >
  const {
    minutes,
    seconds,
    progress,
    hasFinished,
    isActive,
    startCountdown,
    resetCountdown,
  } = useContext(CountdownContext);
  //---------------------------------------------------------------------------
  const [minuteLeft, minuteRight] = (minutes + "").padStart(2, "0").split("");
  const [secondLeft, secondRight] = (seconds + "").padStart(2, "0").split("");
  //----------------------------------------------------------------< methods >
  //-----------------------------------------------------------------< return >
  return (
    <>
      <div className={styles.container}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </div>
      {hasFinished ? (
        <button disabled className={styles.countdownButton}>
          Ciclo encerrado
          <img src="/icons/check-circle.svg" alt="" />
        </button>
      ) : (
        <>
          {isActive ? (
            <button
              type="button"
              className={
                styles.countdownButton + " " + styles.countdownButtonActive
              }
              onClick={resetCountdown}
            >
              Abandonar ciclo
              <img src="/icons/close.svg" alt="" />
              <div className={styles.totalBar} />
              <div
                className={styles.loadingBar}
                style={{ width: (1 - progress) * 100 + "%" }}
              />
            </button>
          ) : (
            <button
              type="button"
              className={styles.countdownButton}
              onClick={startCountdown}
            >
              Iniciar um ciclo
              <img src="/icons/play-arrow.svg" alt="" />
            </button>
          )}
        </>
      )}
    </>
  );
}
