//---------------------------------------------------------------< components >
import LeaderboardItem from "./LeaderboardItem";
//--------------------------------------------------------------------< hooks >
import useWindowSize from "../hooks/useWindowSize";
//-------------------------------------------------------------------< styles >
import styles from "../styles/components/LeaderboardList.module.css";
//======================================================[ < LeaderboardList > ]
export default function LeaderboardList() {
  //-------------------------------------------------------------< properties >
  const { width } = useWindowSize();
  //-----------------------------------------------------------------< return >
  return (
    <div className={styles.container}>
      <header>
        <span>POSIÇÃO</span>
        <span>USUÁRIO</span>
        {width > 920 ? (
          <>
            <span>DESAFIOS</span>
            <span>EXPERIÊNCIA</span>
          </>
        ) : (
          <span>DESAFIOS / XP</span>
        )}
      </header>

      <ul>
        <LeaderboardItem number={1} />
        <LeaderboardItem number={2} />
        <LeaderboardItem number={3} />
        <LeaderboardItem number={4} />
      </ul>
    </div>
  );
}
