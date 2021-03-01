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
  const {
    level,
    currentExperience,
    challengesCompleted,
  } = appContext.ctx.req?.cookies;

  const appProps = await App.getInitialProps(appContext);

  return { ...appProps, level, currentExperience, challengesCompleted };
};
