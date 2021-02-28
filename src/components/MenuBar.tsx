//---------------------------------------------------------------< interfaces >
//------------------------------------------------------------------< classes >
//--------------------------------------------------------------------< pages >
//---------------------------------------------------------------< components >
//------------------------------------------------------------------< helpers >
//-----------------------------------------------------------------< services >
//--------------------------------------------------------------------< hooks >
import { useState } from "react";
import { useRouter } from "next/router";
//-----------------------------------------------------------------< contexts >
//--------------------------------------------------------------------< utils >
//-------------------------------------------------------------------< assets >
//-------------------------------------------------------------------< styles >
import styles from "../styles/components/MenuBar.module.css";
//--------------------------------------------------------------------< types >
//==============================================================[ < MenuBar > ]
export default function MenuBar() {
  //-------------------------------------------------------------< properties >
  const router = useRouter();
  //---------------------------------------------------------------------------
  const isHomePage = router.pathname === "/home";
  const isLeaderboardPage = router.pathname === "/leaderboard";
  //----------------------------------------------------------------< methods >
  function onHomeClick() {
    router.push("/home");
  }

  function onAwardClick() {
    router.push("/leaderboard");
  }
  //---------------------------------------------------------------------------
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
          onClick={onHomeClick}
        >
          <img src="/icons/home.svg" alt="home" />
        </div>

        <div
          className={`${styles.tab} ${isLeaderboardPage && styles.tabSelected}`}
          onClick={onAwardClick}
        >
          <img src="/icons/award.svg" alt="award" />
        </div>
      </div>
    </div>
  );
}
