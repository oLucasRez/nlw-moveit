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
  const isSettingsPage = router.pathname === "/settings";
  //----------------------------------------------------------------< methods >
  function onHomeRedirect() {
    router.push("/home");
  }

  function onAwardRedirect() {
    router.push("/leaderboard");
  }

  function onSettingsRedirect() {
    router.push("/settings");
  }
  //-----------------------------------------------------------------< return >
  return (
    <div className={styles.container}>
      <img
        className={styles.logo}
        src="/icons/logo.svg"
        alt="move.it"
        onClick={onHomeRedirect}
      />

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
          className={`${styles.tab} ${isHomePage && styles.selected}`}
          onClick={onHomeRedirect}
        >
          <img src="/icons/home.svg" alt="home" />
        </div>

        <div
          className={`${styles.tab} ${isLeaderboardPage && styles.selected}`}
          onClick={onAwardRedirect}
        >
          <img src="/icons/award.svg" alt="award" />
        </div>
      </div>

      <img
        className={`${styles.settings} ${isSettingsPage && styles.selected}`}
        src="/icons/settings.svg"
        alt="settings"
        onClick={onSettingsRedirect}
      />
    </div>
  );
}
