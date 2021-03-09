//---------------------------------------------------------------< components >
import { FaPlus as PlusIcon, FaMinus as MinusIcon } from "react-icons/fa";
//--------------------------------------------------------------------< hooks >
import { useMemo } from "react";
//-------------------------------------------------------------------< styles >
import styles from "../../styles/components/SettingsItem/PatternInput.module.css";
//--------------------------------------------------------------------< types >
import State from "../../interfaces/State";

interface PatternItemProps {
  patternState: State<number[]>;
}
//=========================================================[ < PatternInput > ]
export default function PatternInput({ patternState }: PatternItemProps) {
  //-------------------------------------------------------------< properties >
  const [pattern, setPattern] = patternState;
  //----------------------------------------------------------------< methods >
  function onChangeBreakType(index: number, isShortBreak: boolean) {
    const _pattern = [...pattern];
    _pattern[index] = isShortBreak ? 1 : 0;
    setPattern(_pattern);
  }
  //---------------------------------------------------------------------------
  const balls = useMemo(() => {
    const balls = [];

    for (let i = 0; i < pattern.length; i++) {
      const isShortBreak = pattern[i] === 0;
      const className = isShortBreak ? styles.shortBreak : styles.longBreak;

      balls.push(
        <button key={i} onClick={() => onChangeBreakType(i, isShortBreak)}>
          <div className={className} />
        </button>
      );
    }

    return balls;
  }, [pattern]);
  //---------------------------------------------------------------------------
  function addBreak() {
    const _pattern = [...pattern];
    _pattern.push(0);
    setPattern(_pattern);
  }

  function removeBreak() {
    const _pattern = [...pattern];
    _pattern.pop();
    setPattern(_pattern);
  }
  //-----------------------------------------------------------------< return >
  return (
    <div className={styles.container}>
      {balls.map((balls) => balls)}
      <div className={styles.controllers}>
        <PlusIcon
          className={styles.plusIcon}
          onClick={addBreak}
          style={{ display: pattern.length === 6 ? "none" : "initial" }}
        />
        <MinusIcon
          className={styles.minusIcon}
          onClick={removeBreak}
          style={{ display: pattern.length === 1 ? "none" : "initial" }}
        />
      </div>
    </div>
  );
}
