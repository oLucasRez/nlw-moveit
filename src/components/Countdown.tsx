//---------------------------------------------------------------< interfaces >
//------------------------------------------------------------------< classes >
//--------------------------------------------------------------------< pages >
//---------------------------------------------------------------< components >
//------------------------------------------------------------------< helpers >
//-----------------------------------------------------------------< services >
//--------------------------------------------------------------------< hooks >
import { useState, useEffect } from "react";
//-----------------------------------------------------------------< contexts >
//--------------------------------------------------------------------< utils >
//-------------------------------------------------------------------< assets >
//-------------------------------------------------------------------< styles >
import styles from "../styles/components/Countdown.module.css";
//--------------------------------------------------------------------< types >
//============================================================[ < Countdown > ]
export default function Countdown() {
  //-------------------------------------------------------------< properties >
  const [time, setTime] = useState(25 * 60);
  const [active, setActive] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const [minuteLeft, minuteRight] = (minutes + "").padStart(2, "0").split("");
  const [secondLeft, secondRight] = (seconds + "").padStart(2, "0").split("");
  //---------------------------------------------------------------------------
  //----------------------------------------------------------------< methods >
  useEffect(() => {
    if (active && time > 0) {
      setTimeout(() => setTime(time - 1), 1000);
    }
  }, [active, time]);
  //---------------------------------------------------------------------------
  function startCountdown() {
    setActive(true);
  }
  //-----------------------------------------------------------------< return >
  return (
    <>
      <div className={styles.countdownContainer}>
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
      <button
        type="button"
        className={styles.countdownButton}
        onClick={startCountdown}
      >
        Iniciar um ciclo
      </button>
    </>
  );
}
