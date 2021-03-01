//--------------------------------------------------------------------< hooks >
import { useContext } from "react";
//-----------------------------------------------------------------< contexts >
import { ChallengesContext } from "../contexts/ChallengesContext";
//-------------------------------------------------------------------< styles >
import styles from "../styles/components/Profile.module.css";
//==============================================================[ < Profile > ]
export default function Profile() {
  //-------------------------------------------------------------< properties >
  const { level } = useContext(ChallengesContext);
  //-----------------------------------------------------------------< return >
  return (
    <div className={styles.container}>
      <img src="https://github.com/oLucasRez.png" alt="Lucas Rezende" />

      <div>
        <strong>Lucas Rezende</strong>
        <p>
          <img src="icons/level.svg" alt=" Level" />
          Level {level}
        </p>
      </div>
    </div>
  );
}
