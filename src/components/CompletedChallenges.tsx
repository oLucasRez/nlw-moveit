//--------------------------------------------------------------------< hooks >
import { useContext } from "react";
//-----------------------------------------------------------------< contexts >
import { ChallengesContext } from "../contexts/ChallengesContext";
//-------------------------------------------------------------------< styles >
import styles from "../styles/components/CompletedChallenges.module.css";
//==================================================[ < CompletedChallenges > ]
export default function CompletedChallenges() {
  //-------------------------------------------------------------< properties >
  const { challengesCompleted } = useContext(ChallengesContext);
  //-----------------------------------------------------------------< return >
  return (
    <div className={styles.container}>
      <span>Desafios Completos</span>
      <span>{challengesCompleted}</span>
    </div>
  );
}
