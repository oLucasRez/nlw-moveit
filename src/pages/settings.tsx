//---------------------------------------------------------------< components >
import Head from "next/head";
import MenuBar from "../components/MenuBar";
import SettingsItem from "../components/SettingsItem/SettingsItem";
import { TimeInput } from "../components/SettingsItem/TimeInput";
//--------------------------------------------------------------------< hooks >
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
  //----------------------------------------------------------------< methods >
  function onConfirmChanges() {
    setShortBreak(shortBreakChanges);
    setLongBreak(longBreakChanges);
  }
  function onRestoreDefault() {
    setShortBreak(defaultSettings.shortBreak);
    setLongBreak(defaultSettings.longBreak);
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
            <TimeInput timeState={[shortBreak, setShortBreakChanges]} />
          </SettingsItem>

          <SettingsItem title="Duração da pausa longa">
            <TimeInput timeState={[longBreak, setLongBreakChanges]} />
          </SettingsItem>

          <SettingsItem title="Padrão das pausas">
            <div>abacate</div>
          </SettingsItem>
        </ul>

        <button type="submit" onClick={onConfirmChanges}>
          Salvar alterações
        </button>
        <button type="button" onClick={onRestoreDefault}>
          Restaurar padrões
        </button>
      </section>
    </div>
  );
}
