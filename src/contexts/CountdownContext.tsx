//---------------------------------------------------------------< interfaces >
//------------------------------------------------------------------< classes >
//--------------------------------------------------------------------< pages >
//---------------------------------------------------------------< components >
//------------------------------------------------------------------< helpers >
//-----------------------------------------------------------------< services >
//--------------------------------------------------------------------< hooks >
import { useContext, useEffect } from "react";

import { useCountdown } from "../hooks/useCountdown";
//-----------------------------------------------------------------< contexts >
import { createContext } from "react";

import { ChallengesContext } from "./ChallengesContext";
//--------------------------------------------------------------------< utils >
//-------------------------------------------------------------------< assets >
//-------------------------------------------------------------------< styles >
//--------------------------------------------------------------------< types >
import { ReactNode } from "react";

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
const maxTime = 0.1 * 60;

export const CountdownContext = createContext({} as CountdownContextData);
//====================================================[ < CountdownProvider > ]
export function CountdownProvider({ children }: CountdownProviderProps) {
  //-------------------------------------------------------------< properties >
  const { startNewChallenge } = useContext(ChallengesContext);
  //---------------------------------------------------------------------------
  const {
    time,
    isActive,
    hasFinished,
    start: startCountdown,
    reset: resetCountdown,
  } = useCountdown(maxTime);
  //---------------------------------------------------------------------------
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  //----------------------------------------------------------------< methods >
  useEffect(() => hasFinished && startNewChallenge(), [hasFinished]);
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
