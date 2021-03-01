//---------------------------------------------------------------< interfaces >
import { Countdown } from "../../../interfaces/Countdown";
//-------------------------------------------------------------------< styles >
import styles from "../../../styles/components/ChallengeBox/ChallengeBoxActive/FooterNotFinished.module.css";
//--------------------------------------------------------------------< types >
interface FooterNotFinishedProps {
  countdown: Countdown;
}
//====================================================[ < FooterNotFinished > ]
export default function FooterNotFinished({
  countdown,
}: FooterNotFinishedProps) {
  //-------------------------------------------------------------< properties >
  const minutes = Math.floor(countdown.time / 60);
  const seconds = countdown.time % 60;
  const [minuteLeft, minuteRight] = (minutes + "").padStart(2, "0").split("");
  const [secondLeft, secondRight] = (seconds + "").padStart(2, "0").split("");
  //----------------------------------------------------------------< methods >
  function onChallengeStart() {
    countdown.start();
  }

  function onChallengeCanceled() {
    countdown.reset();
  }
  //-----------------------------------------------------------------< return >
  return (
    <>
      <footer className={styles.container}>
        <div className={styles.countdownContainer}>
          <div>
            <span>{minuteLeft}</span>
            <span>{minuteRight}</span>
          </div>
          <span>:</span>
          <div>
            <span>{secondLeft}</span>
            <span>{secondRight}</span>
          </div>
        </div>

        {countdown.isActive ? (
          <button
            className={styles.cancelButton}
            type="button"
            onClick={onChallengeCanceled}
          >
            Cancelar
          </button>
        ) : (
          <button
            className={styles.startButton}
            type="button"
            onClick={onChallengeStart}
          >
            Começar
          </button>
        )}
      </footer>

      <div className={styles.totalBar}>
        <div
          className={styles.progressBar}
          style={{ width: (1 - countdown.progress) * 100 + "%" }}
        />
      </div>
    </>
  );
}
