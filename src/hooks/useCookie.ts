import Cookies from "js-cookie";
import { GetServerSideProps } from "next";
import { AppContext } from "next/app";
import { useEffect, useState } from "react";

export default function useCookie<T>(key: string, defaultValue: T) {
  const [_value, setValue] = useState(defaultValue);
  const { value } = JSON.parse(Cookies.get(key));

  useEffect(() => {
    Cookies.set(key, JSON.stringify({ value: _value }));
  }, [_value]);

  return [value, setValue];
}

export function getCookies(appContext: AppContext) {
  const { cookies } = {
    cookies: {},
    ...appContext.ctx.req,
  };
  return cookies;
}
