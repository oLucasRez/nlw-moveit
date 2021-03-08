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
import type { AppProps } from "next/app";
//================================================================[ < MyApp > ]
export default function MyApp({ Component, pageProps }: AppProps) {
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
    <ChallengesProvider>
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
