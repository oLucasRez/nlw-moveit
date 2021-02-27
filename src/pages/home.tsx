//---------------------------------------------------------------< interfaces >
//------------------------------------------------------------------< classes >
//--------------------------------------------------------------------< pages >
//---------------------------------------------------------------< components >
import Head from "next/head";

import ExperienceBar from "../components/ExperienceBar";
import Profile from "../components/Profile";
import CompletedChallenges from "../components/CompletedChallenges";
import Countdown from "../components/Countdown";
import ChallengeBox from "../components/ChallengeBox";
//------------------------------------------------------------------< helpers >
//-----------------------------------------------------------------< services >
//--------------------------------------------------------------------< hooks >
//-----------------------------------------------------------------< contexts >
import { ChallengesProvider } from "../contexts/ChallengesContext";
import { CountdownProvider } from "../contexts/CountdownContext";
//--------------------------------------------------------------------< utils >
//-------------------------------------------------------------------< assets >
//-------------------------------------------------------------------< styles >
import styles from "../styles/pages/Home.module.css";
//--------------------------------------------------------------------< types >
import { GetServerSideProps } from "next";
import MenuBar from "../components/MenuBar";

interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}
//=================================================================[ < Home > ]
export default function Home({
  level,
  currentExperience,
  challengesCompleted,
}: HomeProps) {
  //-------------------------------------------------------------< properties >
  //---------------------------------------------------------------------------
  //----------------------------------------------------------------< methods >
  //---------------------------------------------------------------------------
  //-----------------------------------------------------------------< return >
  return (
    <ChallengesProvider
      level={level}
      currentExperience={currentExperience}
      challengesCompleted={challengesCompleted}
    >
      <div className={styles.container}>
        <Head>
          <title>Início | move.it</title>
        </Head>

        <MenuBar />

        <ExperienceBar />

        <CountdownProvider>
          <section>
            <div>
              <Profile />
              <CompletedChallenges />
              <Countdown />
            </div>
            <div>
              <ChallengeBox />
            </div>
          </section>
        </CountdownProvider>
      </div>
    </ChallengesProvider>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { level, currentExperience, challengesCompleted } = ctx.req.cookies;

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted),
    },
  };
};
