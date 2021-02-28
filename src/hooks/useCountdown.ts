//---------------------------------------------------------------< interfaces >
import { Countdown } from "../interfaces/Countdown";
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
//--------------------------------------------------------------------< types >

//-------------------------------------------------------------------< global >
let countdownTimeout: NodeJS.Timeout;
//=========================================================[ < useCountdown > ]
export function useCountdown(maxTime: number): Countdown {
  //-------------------------------------------------------------< properties >
  const [time, setTime] = useState(maxTime);
  const [isActive, setIsActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);
  //----------------------------------------------------------------< methods >
  useEffect(() => {
    if (isActive && time > 0)
      countdownTimeout = setTimeout(() => setTime(time - 1), 1000);
    else if (isActive && time === 0) {
      setHasFinished(true);
      setIsActive(false);
    }
  }, [isActive, time]);
  //---------------------------------------------------------------------------
  function start() {
    setIsActive(true);
  }

  function reset() {
    clearTimeout(countdownTimeout);
    setIsActive(false);
    setHasFinished(false);
    setTime(maxTime);
  }
  //-----------------------------------------------------------------< return >
  return {
    time,
    isActive,
    hasFinished,
    progress: time / maxTime,
    start,
    reset,
  };
}
