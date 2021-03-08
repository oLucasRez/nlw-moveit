import Cookies from "js-cookie";
//--------------------------------------------------------------------< hooks >
import { useState } from "react";
//--------------------------------------------------------------------< types >
import State from "../interfaces/State";
import { AppContext } from "next/app";
//============================================================[ < useCookie > ]
export default function useCookie<T>(key: string, defaultValue: T): State<T> {
  //-------------------------------------------------------------< properties >
  const [_value, _setValue] = useState(defaultValue);
  const { value } = getValue();
  //----------------------------------------------------------------< methods >
  function setValue(value: T) {
    _setValue(value);
    Cookies.set(key, JSON.stringify({ value }));
  }

  function getValue() {
    const cookieString = Cookies.get(key);

    if (cookieString) {
      let cookieObject = { value: defaultValue };
      try {
        cookieObject = JSON.parse(cookieString);
      } catch (e) {
      } finally {
        return cookieObject;
      }
    } else {
      return { value: defaultValue };
    }
  }
  //-----------------------------------------------------------------< return >
  return [value, setValue];
}
//===========================================================[ < getCookies > ]
export function getCookies(appContext: AppContext) {
  const { cookies } = {
    cookies: {},
    ...appContext.ctx.req,
  };
  return cookies;
}
