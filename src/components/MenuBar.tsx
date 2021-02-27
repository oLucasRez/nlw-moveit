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
  const [tabSelected, setTabSelected] = useState<"home" | "award">(
    router.pathname === "/home" ? "home" : "award"
  );
  //----------------------------------------------------------------< methods >
  function onHomeClick() {
    setTabSelected("home");
    router.push("/home");
  }

  function onAwardClick() {
    setTabSelected("award");
    router.push("/award");
  }
  //---------------------------------------------------------------------------
  //-----------------------------------------------------------------< return >
  return (
    <div className={styles.container}>
      <img src="/icons/logo.svg" alt="move.it" />

      <div className={styles.tabsContainer}>
        <div
          className={`${styles.selector} ${
            tabSelected === "home" ? styles.homeSelected : styles.awardSelected
          }`}
        />

        <div
          className={`${styles.tab} ${
            tabSelected === "home" && styles.tabSelected
          }`}
          onClick={onHomeClick}
        >
          <img src="/icons/home.svg" alt="home" />
        </div>

        <div
          className={`${styles.tab} ${
            tabSelected === "award" && styles.tabSelected
          }`}
          onClick={onAwardClick}
        >
          <img src="/icons/award.svg" alt="award" />
        </div>
      </div>
    </div>
  );
}
