import { ReactNode } from "react";
//---------------------------------------------------------------< interfaces >
//------------------------------------------------------------------< classes >
//--------------------------------------------------------------------< pages >
//---------------------------------------------------------------< components >
//------------------------------------------------------------------< helpers >
//-----------------------------------------------------------------< services >
//--------------------------------------------------------------------< hooks >
//-----------------------------------------------------------------< contexts >
import { createContext, useState, useContext, useEffect } from "react";
import { ChallengesContext } from "./ChallengesContext";
//--------------------------------------------------------------------< utils >
//-------------------------------------------------------------------< assets >
//-------------------------------------------------------------------< styles >
//--------------------------------------------------------------------< types >
interface CountdownContextData {
  minutes: number;
  seconds: number;
  progress: number;
  hasFinished: boolean;
  isActive: boolean;
  startCountdown: () => void;
  resetCountdown: () => void;
}

interface CountdownProviderProps {
  children: ReactNode;
}
//-------------------------------------------------------------------< global >
let countdownTimeout: NodeJS.Timeout;
const maxTime = 1 * 60;

export const CountdownContext = createContext({} as CountdownContextData);
//====================================================[ < CountdownProvider > ]
export function CountdownProvider({ children }: CountdownProviderProps) {
  //-------------------------------------------------------------< properties >
  const { startNewChallenge } = useContext(ChallengesContext);
  //---------------------------------------------------------------------------
  const [time, setTime] = useState(maxTime);
  const [isActive, setIsActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  //----------------------------------------------------------------< methods >
  useEffect(() => {
    if (isActive && time > 0)
      countdownTimeout = setTimeout(() => setTime(time - 1), 1000);
    else if (isActive && time === 0) {
      setHasFinished(true);
      setIsActive(false);
      startNewChallenge();
    }
  }, [isActive, time]);
  //---------------------------------------------------------------------------
  function startCountdown() {
    setIsActive(true);
  }

  function resetCountdown() {
    clearTimeout(countdownTimeout);
    setIsActive(false);
    setHasFinished(false);
    setTime(maxTime);
  }
  //-----------------------------------------------------------------< return >
  return (
    <CountdownContext.Provider
      value={{
        minutes,
        seconds,
        progress: time / maxTime,
        hasFinished,
        isActive,
        startCountdown,
        resetCountdown,
      }}
    >
      {children}
    </CountdownContext.Provider>
  );
}
