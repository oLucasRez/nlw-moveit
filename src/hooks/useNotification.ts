//--------------------------------------------------------------------< hooks >
import { useEffect } from "react";
//======================================================[ < useNotification > ]
export function useNotification(): (title: string, body: string) => void {
  //----------------------------------------------------------------< methods >
  useEffect(() => {
    Notification.requestPermission();
  }, []);
  //---------------------------------------------------------------------------
  function notify(title: string, body: string) {
    new Audio("/notification.mp3").play();

    if (Notification.permission === "granted") {
      navigator.serviceWorker.getRegistration().then(function (reg) {
        reg.showNotification(title, {
          body,
          icon: "favicon.png",
          vibrate: [100, 50, 100],
        });
      });
    } else {
      Notification.requestPermission();
    }
  }
  //-----------------------------------------------------------------< return >
  return notify;
}
