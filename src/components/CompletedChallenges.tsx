//---------------------------------------------------------------< interfaces >
//------------------------------------------------------------------< classes >
//--------------------------------------------------------------------< pages >
//---------------------------------------------------------------< components >
//------------------------------------------------------------------< helpers >
//-----------------------------------------------------------------< services >
//--------------------------------------------------------------------< hooks >
//-----------------------------------------------------------------< contexts >
//--------------------------------------------------------------------< utils >
//-------------------------------------------------------------------< assets >
//-------------------------------------------------------------------< styles >
import styles from "../styles/components/CompletedChallenges.module.css";
//--------------------------------------------------------------------< types >
//==================================================[ < CompletedChallenges > ]
export default function CompletedChallenges() {
  //-------------------------------------------------------------< properties >
  //---------------------------------------------------------------------------
  //----------------------------------------------------------------< methods >
  //---------------------------------------------------------------------------
  //-----------------------------------------------------------------< return >
  return (
    <div className={styles.completedChallengesContainer}>
      <span>Desafios Completos</span>
      <span>5</span>
    </div>
  );
}