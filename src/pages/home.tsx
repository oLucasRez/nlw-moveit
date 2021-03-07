//---------------------------------------------------------------< components >
import Head from "next/head";
import MenuBar from "../components/MenuBar";
import ExperienceBar from "../components/ExperienceBar";
import Profile from "../components/Profile";
import CompletedChallenges from "../components/CompletedChallenges";
import Countdown from "../components/Countdown";
import ChallengeBox from "../components/ChallengeBox/ChallengeBox";
//--------------------------------------------------------------------< hooks >
import { useContext } from "react";
//-----------------------------------------------------------------< contexts >
import { CountdownContext } from "../contexts/CountdownContext";
//-------------------------------------------------------------------< styles >
import styles from "../styles/pages/Home.module.css";
//=================================================================[ < Home > ]
export default function Home() {
  //-------------------------------------------------------------< properties >
  const { hasFinished } = useContext(CountdownContext);
  //-----------------------------------------------------------------< return >
  return (
    <div className={styles.container}>
      <Head>
        <title>Início | move.it</title>
      </Head>

      <MenuBar />

      <ExperienceBar />
      <section>
        <div className={hasFinished ? styles.hidden : ""}>
          <Profile />
          <CompletedChallenges />
          <Countdown />
        </div>

        <div className={!hasFinished ? styles.hidden : ""}>
          <ChallengeBox />
        </div>
      </section>
    </div>
  );
}
