//--------------------------------------------------------------------< hooks >
import { useState, useMemo } from "react";
//-----------------------------------------------------------------< contexts >
import { createContext } from "react";
//--------------------------------------------------------------------< types >
import { ReactNode } from "react";

interface BreakContextData {
  shortBreak: number;
  longBreak: number;
  breakPattern: number[];
  currentBreakIndex: number;
  gotoNextBreak: () => void;
}

interface BreakProviderProps {
  children: ReactNode;
}
//-------------------------------------------------------------------< global >
const shortBreak = 5 * 60;
const longBreak = 15 * 60;
const breakPattern = [shortBreak, shortBreak, shortBreak, longBreak];

export const BreakContext = createContext({} as BreakContextData);
//========================================================[ < BreakProvider > ]
export function BreakProvider({ children }: BreakProviderProps) {
  //-------------------------------------------------------------< properties >
  const [breakIndex, setBreakIndex] = useState(0);
  //---------------------------------------------------------------------------
  const currentBreakIndex = useMemo(() => breakIndex % breakPattern.length, [
    breakIndex,
  ]);
  //----------------------------------------------------------------< methods >
  function gotoNextBreak() {
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
        gotoNextBreak,
      }}
    >
      {children}
    </BreakContext.Provider>
  );
}
