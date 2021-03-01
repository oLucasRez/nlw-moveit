//--------------------------------------------------------------------< hooks >
import { useContext } from "react";
//-----------------------------------------------------------------< contexts >
import { ChallengesContext } from "../contexts/ChallengesContext";
import { UserContext } from "../contexts/UserContext";
//-------------------------------------------------------------------< styles >
import styles from "../styles/components/Profile.module.css";
//==============================================================[ < Profile > ]
export default function Profile() {
  //-------------------------------------------------------------< properties >
  const { level } = useContext(ChallengesContext);
  const { usernameState, avatarState } = useContext(UserContext);
  //---------------------------------------------------------------------------
  const [username] = usernameState;
  const [avatar] = avatarState;
  //-----------------------------------------------------------------< return >
  return (
    <div className={styles.container}>
      <img src={avatar ? avatar : "/icons/avatar.svg"} alt={username} />

      <div>
        <strong>{username}</strong>
        <p>
          <img src="icons/level.svg" alt=" Level" />
          Level {level}
        </p>
      </div>
    </div>
  );
}
