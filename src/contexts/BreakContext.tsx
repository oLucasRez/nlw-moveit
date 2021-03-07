import Cookies from "js-cookie";
//--------------------------------------------------------------------< hooks >
import { useState, useEffect } from "react";
//-----------------------------------------------------------------< contexts >
import { createContext } from "react";
//-------------------------------------------------------------------< assets >
import defaultSettings from "../../defaultSettings.json";
//--------------------------------------------------------------------< types >
import { ReactNode } from "react";
import State from "../interfaces/State";

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
export function BreakProvider({ children, ...props }: BreakProviderProps) {
  //-------------------------------------------------------------< properties >
  const [breakIndex, setBreakIndex] = useState(0);
  const [shortBreak, setShortBreak] = useState(defaultSettings.shortBreak);
  const [longBreak, setLongBreak] = useState(defaultSettings.longBreak);
  const [_breakPattern, setBreakPattern] = useState(
    defaultSettings.breakPattern
  );
  //---------------------------------------------------------------------------
  const breakPattern = _breakPattern.map((value) =>
    value ? longBreak : shortBreak
  );
  const currentBreakIndex = breakIndex % _breakPattern.length;
  //----------------------------------------------------------------< methods >
  function gotoNextBreak() {
    setBreakIndex(breakIndex + 1);
  }
  //---------------------------------------------------------------------------
  // useEffect(() => {
  //   Cookies.set("breakPattern", _breakPattern);
  // }, [_breakPattern]);
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
