//--------------------------------------------------------------------< hooks >
import { useCountdown } from "../hooks/useCountdown";
import { useContext, useEffect } from "react";
//-----------------------------------------------------------------< contexts >
import { createContext } from "react";
import { ChallengesContext } from "./ChallengesContext";
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
const maxTime = 25 * 60;

export const CountdownContext = createContext({} as CountdownContextData);
//====================================================[ < CountdownProvider > ]
export function CountdownProvider({ children }: CountdownProviderProps) {
  //-------------------------------------------------------------< properties >
  const { time, isActive, hasFinished, start, reset } = useCountdown(maxTime);
  //---------------------------------------------------------------------------
  const { startNewChallenge } = useContext(ChallengesContext);
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
        startCountdown: start,
        resetCountdown: reset,
      }}
    >
      {children}
    </CountdownContext.Provider>
  );
}
