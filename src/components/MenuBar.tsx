//---------------------------------------------------------------< components >
import {
  RiHome3Line as HomeIcon,
  RiAwardLine as AwardIcon,
  RiSettings2Line as GearIcon,
} from "react-icons/ri";
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
  function onSignInRedirect() {
    router.push("/");
  }

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
        onClick={onSignInRedirect}
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
          style={{ visibility: isSettingsPage ? "hidden" : "visible" }}
        />

        <div
          className={`${styles.tab} ${isHomePage && styles.selected}`}
          onClick={onHomeRedirect}
        >
          <HomeIcon />
        </div>

        <div
          className={`${styles.tab} ${isLeaderboardPage && styles.selected}`}
          onClick={onAwardRedirect}
        >
          <AwardIcon />
        </div>
      </div>

      <GearIcon
        className={`${styles.settings} ${isSettingsPage && styles.selected}`}
        onClick={onSettingsRedirect}
      />
    </div>
  );
}
