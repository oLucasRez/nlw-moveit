//---------------------------------------------------------------< components >
import Head from "next/head";
import MenuBar from "../components/MenuBar";
import LeaderboardList from "../components/LeaderboardList";
//-------------------------------------------------------------------< styles >
import styles from "../styles/pages/Leaderboard.module.css";
//==========================================================[ < Leaderboard > ]
export default function Leaderboard() {
  //-----------------------------------------------------------------< return >
  return (
    <div className={styles.container}>
      <Head>
        <title>Leaderboard | move.it</title>
      </Head>

      <MenuBar />

      <h1>Leaderboard</h1>

      <section>
        <LeaderboardList />
      </section>
    </div>
  );
}
