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
      new Notification(title, {
        body,
      });
    }
  }
  //-----------------------------------------------------------------< return >
  return notify;
}
