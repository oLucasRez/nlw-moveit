//--------------------------------------------------------------------< hooks >
import { useRouter } from "next/router";
//-------------------------------------------------------------------< styles >
import styles from "../styles/components/MenuBar.module.css";
//==============================================================[ < MenuBar > ]
export default function MenuBar() {
  //-------------------------------------------------------------< properties >
  const router = useRouter();
  //---------------------------------------------------------------------------
  const isHomePage = router.pathname === "/home";
  const isLeaderboardPage = router.pathname === "/leaderboard";
  //----------------------------------------------------------------< methods >
  function onHomeRedirect() {
    router.push("/home");
  }

  function onAwardRedirect() {
    router.push("/leaderboard");
  }
  //-----------------------------------------------------------------< return >
  return (
    <div className={styles.container}>
      <img src="/icons/logo.svg" alt="move.it" />

      <div className={styles.tabsContainer}>
        <div
          className={
            styles.selector +
            " " +
            (isHomePage && styles.homeSelected) +
            " " +
            (isLeaderboardPage && styles.awardSelected)
          }
        />

        <div
          className={`${styles.tab} ${isHomePage && styles.tabSelected}`}
          onClick={onHomeRedirect}
        >
          <img src="/icons/home.svg" alt="home" />
        </div>

        <div
          className={`${styles.tab} ${isLeaderboardPage && styles.tabSelected}`}
          onClick={onAwardRedirect}
        >
          <img src="/icons/award.svg" alt="award" />
        </div>
      </div>
    </div>
  );
}
