//-------------------------------------------------------------------< styles >
import styles from "../styles/components/LeaderboardItem.module.css";
//--------------------------------------------------------------------< types >
interface LeaderboardItemProps {
  number: number;
}
//======================================================[ < LeaderboardItem > ]
export default function LeaderboardItem({ number }: LeaderboardItemProps) {
  //-----------------------------------------------------------------< return >
  return (
    <li className={styles.container}>
      <div className={styles.number}>{number}</div>

      <div className={styles.person}>
        <img src="https://github.com/oLucasRez.png" alt="Lucas Rezende" />
        <div>
          <strong>Lucas Rezende</strong>
          <p>
            <img src="icons/level.svg" alt=" Level" />
            Level 30
          </p>
        </div>
      </div>

      <div className={styles.info}>
        <div>
          <strong>333</strong> completados
        </div>
        <div>
          <strong>154000</strong> xp
        </div>
      </div>
    </li>
  );
}
