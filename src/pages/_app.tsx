//------------------------------------------------------------------< classes >
import App from "next/app";
//--------------------------------------------------------------------< hooks >
import { useEffect } from "react";
//-----------------------------------------------------------------< contexts >
import { ChallengesProvider } from "../contexts/ChallengesContext";
import { CountdownProvider } from "../contexts/CountdownContext";
import { UserProvider } from "../contexts/UserContext";
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
  //----------------------------------------------------------------< methods >
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      window.addEventListener("load", function () {
        navigator.serviceWorker.register("/serviceWorker.js").then(
          function (registration) {
            console.log(
              "Service Worker registration successful with scope: ",
              registration.scope
            );
          },
          function (err) {
            console.log("Service Worker registration failed: ", err);
          }
        );
      });
    }
  }, []);
  //-----------------------------------------------------------------< return >
  return (
    <ChallengesProvider
      level={level}
      currentExperience={currentExperience}
      challengesCompleted={challengesCompleted}
    >
      <CountdownProvider>
        <UserProvider>
          <Component {...pageProps} />
        </UserProvider>
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
