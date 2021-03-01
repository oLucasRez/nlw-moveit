//-------------------------------------------------------------------< styles >
import styles from "../../styles/components/ChallengeBox/ChallengeBoxNotActive.module.css";
//================================================[ < ChallengeBoxNotActive > ]
export default function ChallengeBoxNotActive() {
  //-----------------------------------------------------------------< return >
  return (
    <div className={styles.container}>
      <strong>Finalize um ciclo para receber um desafio</strong>
      <p>
        <img src="icons/level-up.svg" alt="Level Up" />
        Avance de level completando desafios.
      </p>
    </div>
  );
}
