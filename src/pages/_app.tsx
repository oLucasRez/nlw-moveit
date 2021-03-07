//------------------------------------------------------------------< classes >
import App from "next/app";
//--------------------------------------------------------------------< hooks >
import { useEffect } from "react";
//-----------------------------------------------------------------< contexts >
import { ChallengesProvider } from "../contexts/ChallengesContext";
import { CountdownProvider } from "../contexts/CountdownContext";
import { UserProvider } from "../contexts/UserContext";
import { BreakProvider } from "../contexts/BreakContext";
//-------------------------------------------------------------------< styles >
import "../styles/global.css";
//--------------------------------------------------------------------< types >
import type { AppProps, AppContext } from "next/app";
import toArray from "../utils/toObject";

interface MyAppProps extends AppProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;

  name: string;
  username: string;
  avatar: string;

  shortBreak: number;
  longBreak: number;
  breakPattern: string;
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
          <BreakProvider>
            <Component {...pageProps} />
          </BreakProvider>
        </UserProvider>
      </CountdownProvider>
    </ChallengesProvider>
  );
}

MyApp.getInitialProps = async (appContext: AppContext) => {
  const { cookies } = {
    cookies: {
      level: 0,
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
