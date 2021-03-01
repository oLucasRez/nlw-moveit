//------------------------------------------------------------------< classes >
import App from "next/app";
//-----------------------------------------------------------------< contexts >
import { ChallengesProvider } from "../contexts/ChallengesContext";
import { CountdownProvider } from "../contexts/CountdownContext";
//-------------------------------------------------------------------< styles >
import "../styles/global.css";
//--------------------------------------------------------------------< types >
import type { AppProps, AppContext } from "next/app";

interface MyAppProps extends AppProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}
//================================================================[ < MyApp > ]
export default function MyApp({
  Component,
  pageProps,
  level,
  currentExperience,
  challengesCompleted,
}: MyAppProps) {
  //-----------------------------------------------------------------< return >
  return (
    <ChallengesProvider
      level={level}
      currentExperience={currentExperience}
      challengesCompleted={challengesCompleted}
    >
      <CountdownProvider>
        <Component {...pageProps} />
      </CountdownProvider>
    </ChallengesProvider>
  );
}

MyApp.getInitialProps = async (appContext: AppContext) => {
  const { cookies } = {
    cookies: {
      level: 1,
      currentExperience: 0,
      challengesCompleted: 0,
    },
    ...appContext.ctx.req,
  };

  const { level, currentExperience, challengesCompleted } = cookies;

  const appProps = await App.getInitialProps(appContext);

  return {
    ...appProps,
    level: Number(level),
    currentExperience: Number(currentExperience),
    challengesCompleted: Number(challengesCompleted),
  };
};
