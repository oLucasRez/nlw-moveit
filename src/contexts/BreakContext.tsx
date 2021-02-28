//---------------------------------------------------------------< interfaces >
//------------------------------------------------------------------< classes >
//--------------------------------------------------------------------< pages >
//---------------------------------------------------------------< components >
import { useMemo, useState } from "react";
//------------------------------------------------------------------< helpers >
//-----------------------------------------------------------------< services >
//--------------------------------------------------------------------< hooks >
//-----------------------------------------------------------------< contexts >
import { createContext } from "react";
//--------------------------------------------------------------------< utils >
//-------------------------------------------------------------------< assets >
//-------------------------------------------------------------------< styles >
//--------------------------------------------------------------------< types >
import { ReactNode } from "react";

interface BreakContextData {
  shortBreak: number;
  longBreak: number;
  breakPattern: number[];
  currentBreakIndex: number;
  nextBreak: () => void;
}

interface BreakProviderProps {
  children: ReactNode;
}
//-------------------------------------------------------------------< global >
const shortBreak = 0.05 * 60;
const longBreak = 0.15 * 60;
const breakPattern = [shortBreak, shortBreak, shortBreak, longBreak];

export const BreakContext = createContext({} as BreakContextData);
//========================================================[ < BreakProvider > ]
export function BreakProvider({ children }: BreakProviderProps) {
  //-------------------------------------------------------------< properties >
  const [breakIndex, setBreakIndex] = useState(0);
  //----------------------------------------------------------------< methods >
  const currentBreakIndex = useMemo(() => breakIndex % breakPattern.length, [
    breakIndex,
  ]);
  //---------------------------------------------------------------------------
  function nextBreak() {
    setBreakIndex(breakIndex + 1);
  }
  //-----------------------------------------------------------------< return >
  return (
    <BreakContext.Provider
      value={{
        shortBreak,
        longBreak,
        breakPattern,
        currentBreakIndex,
        nextBreak,
      }}
    >
      {children}
    </BreakContext.Provider>
  );
}
