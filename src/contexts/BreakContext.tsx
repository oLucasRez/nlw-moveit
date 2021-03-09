//--------------------------------------------------------------------< hooks >
import { useState } from "react";
//-----------------------------------------------------------------< contexts >
import { createContext } from "react";
//-------------------------------------------------------------------< assets >
import defaultSettings from "../../defaultSettings.json";
//--------------------------------------------------------------------< types >
import { ReactNode } from "react";
import State from "../interfaces/State";
import useCookie from "../hooks/useCookie";

interface BreakContextData {
  shortBreakState: State<number>;
  longBreakState: State<number>;
  breakPatternState: State<number[]>;
  currentBreakIndex: number;
  gotoNextBreak: () => void;
}

interface BreakProviderProps {
  children: ReactNode;
}
//-------------------------------------------------------------------< global >
export const BreakContext = createContext({} as BreakContextData);
//========================================================[ < BreakProvider > ]
export function BreakProvider({ children }: BreakProviderProps) {
  //-------------------------------------------------------------< properties >
  const [breakIndex, setBreakIndex] = useState(0);
  const [longBreak, setLongBreak] = useCookie(
    "longBreak",
    defaultSettings.longBreak
  );
  const [shortBreak, setShortBreak] = useCookie<number>(
    "shortBreak",
    defaultSettings.shortBreak
  );
  const [breakPattern, setBreakPattern] = useCookie<number[]>(
    "breakPattern",
    defaultSettings.breakPattern
  );
  //---------------------------------------------------------------------------
  // const breakPattern = _breakPattern.map((value) =>
  //   value ? longBreak : shortBreak
  // );
  const currentBreakIndex = breakIndex % breakPattern.length;
  //----------------------------------------------------------------< methods >
  function gotoNextBreak() {
    setBreakIndex(breakIndex + 1);
  }
  //-----------------------------------------------------------------< return >
  return (
    <BreakContext.Provider
      value={{
        shortBreakState: [shortBreak, setShortBreak],
        longBreakState: [longBreak, setLongBreak],
        breakPatternState: [breakPattern, setBreakPattern],
        currentBreakIndex,
        gotoNextBreak,
      }}
    >
      {children}
    </BreakContext.Provider>
  );
}
