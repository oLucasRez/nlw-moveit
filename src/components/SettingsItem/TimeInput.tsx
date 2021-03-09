//-------------------------------------------------------------------< styles >
import styles from "../../styles/components/SettingsItem/TimeInput.module.css";
//--------------------------------------------------------------------< types >
import State from "../../interfaces/State";

interface TimeItemProps {
  timeState: State<number>;
}
//============================================================[ < TimeInput > ]
export default function TimeInput({ timeState }: TimeItemProps) {
  //-------------------------------------------------------------< properties >
  const [time, setTime] = timeState;
  //---------------------------------------------------------------------------
  const secondRightInSeconds = (time % 60) % 10;
  const secondLeftInSeconds = (time % 60) - secondRightInSeconds;
  const minuteRightInSeconds = Math.floor((time / 60) % 10) * 60;
  const minuteLeftInSeconds = Math.floor(time / 60) * 60 - minuteRightInSeconds;
  //----------------------------------------------------------------< methods >
  function onMinuteLeftChange({ target }) {
    const newTime = time - minuteLeftInSeconds + target.value * 60 * 10;
    setTime(time - minuteLeftInSeconds + target.value * 60 * 10);
  }
  function onMinuteRightChange({ target }) {
    setTime(time - minuteRightInSeconds + target.value * 60);
  }
  function onSecondLeftChange({ target }) {
    setTime(time - secondLeftInSeconds + target.value * 10);
  }
  function onSecondRightChange({ target }) {
    setTime(time - secondRightInSeconds + target.value);
  }
  //---------------------------------------------------------------------------
  function getMinute(time: number) {
    const minutes = Math.floor(time / 60);
    const [left, right] = (minutes + "").padStart(2, "0").split("");

    return { left, right };
  }
  function getSecond(time: number) {
    const seconds = time % 60;
    const [left, right] = (seconds + "").padStart(2, "0").split("");

    return { left, right };
  }
  //-----------------------------------------------------------------< return >
  return (
    <div className={styles.container}>
      <div>
        <input
          type="number"
          placeholder={getMinute(time).left}
          onChange={onMinuteLeftChange}
        />
        <input
          type="number"
          placeholder={getMinute(time).right}
          onChange={onMinuteRightChange}
        />
      </div>
      <span>:</span>
      <div>
        <input
          type="number"
          placeholder={getSecond(time).left}
          onChange={onSecondLeftChange}
        />
        <input
          type="number"
          placeholder={getSecond(time).right}
          onChange={onSecondRightChange}
        />
      </div>
    </div>
  );
}
