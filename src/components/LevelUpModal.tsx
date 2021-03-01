//--------------------------------------------------------------------< hooks >
import { useContext } from "react";
//-----------------------------------------------------------------< contexts >
import { ChallengesContext } from "../contexts/ChallengesContext";
//-------------------------------------------------------------------< styles >
import styles from "../styles/components/LevelUpModal.module.css";
//=========================================================[ < LevelUpModal > ]
export default function LevelUpModal() {
  //-------------------------------------------------------------< properties >
  const { level, closeLevelUpModal } = useContext(ChallengesContext);
  //-----------------------------------------------------------------< return >
  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        <header>{level}</header>

        <strong>Parabéns</strong>
        <p>Você alcançou um novo level!</p>

        <button type="button" onClick={closeLevelUpModal}>
          <img src="/icons/close.svg" alt="Fechar modal" />
        </button>
      </div>
    </div>
  );
}
