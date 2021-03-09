//---------------------------------------------------------------< components >
import Head from "next/head";
import MenuBar from "../components/MenuBar";
import SettingsItem from "../components/SettingsItem/SettingsItem";
import TimeInput from "../components/SettingsItem/TimeInput";
import PatternInput from "../components/SettingsItem/PatternInput";
//--------------------------------------------------------------------< hooks >
import { useRouter } from "next/router";
import { useContext, useState } from "react";
//-----------------------------------------------------------------< contexts >
import { BreakContext } from "../contexts/BreakContext";
//-------------------------------------------------------------------< assets >
import defaultSettings from "../../defaultSettings.json";
//-------------------------------------------------------------------< styles >
import styles from "../styles/pages/Settings.module.css";
//=============================================================[ < Settings > ]
export default function Settings() {
  //-------------------------------------------------------------< properties >
  const router = useRouter();
  //---------------------------------------------------------------------------
  const { shortBreakState, longBreakState, breakPatternState } = useContext(
    BreakContext
  );
  //---------------------------------------------------------------------------
  const [shortBreak, setShortBreak] = shortBreakState;
  const [longBreak, setLongBreak] = longBreakState;
  const [breakPattern, setBreakPattern] = breakPatternState;
  //---------------------------------------------------------------------------
  const [shortBreakChanges, setShortBreakChanges] = useState(shortBreak);
  const [longBreakChanges, setLongBreakChanges] = useState(longBreak);
  const [breakPatternChanges, setBreakPatternChanges] = useState(breakPattern);
  //----------------------------------------------------------------< methods >
  function onConfirmChanges() {
    router.push("home");
    setShortBreak(shortBreakChanges);
    setLongBreak(longBreakChanges);
    setBreakPattern(breakPatternChanges);
  }
  function onRestoreDefault() {
    setShortBreakChanges(shortBreak);
    setLongBreakChanges(longBreak);
    setBreakPatternChanges(breakPattern);

    setShortBreak(defaultSettings.shortBreak);
    setLongBreak(defaultSettings.longBreak);
    setBreakPattern(defaultSettings.breakPattern);
  }
  //-----------------------------------------------------------------< return >
  return (
    <div className={styles.container}>
      <Head>
        <title>Ajustes | move.it</title>
      </Head>

      <MenuBar />

      <h1>Ajustes</h1>

      <section>
        <ul>
          <SettingsItem title="Duração da pausa curta">
            <TimeInput timeState={[shortBreakChanges, setShortBreakChanges]} />
          </SettingsItem>

          <SettingsItem title="Duração da pausa longa">
            <TimeInput timeState={[longBreakChanges, setLongBreakChanges]} />
          </SettingsItem>

          <SettingsItem title="Padrão das pausas">
            <PatternInput
              patternState={[breakPatternChanges, setBreakPatternChanges]}
            />
          </SettingsItem>
        </ul>

        <footer>
          <button type="submit" onClick={onConfirmChanges}>
            Salvar alterações
          </button>
          <button type="button" onClick={onRestoreDefault}>
            Restaurar padrões
          </button>
        </footer>
      </section>
    </div>
  );
}
