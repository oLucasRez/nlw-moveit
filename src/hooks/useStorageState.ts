//--------------------------------------------------------------------< hooks >
import { useState, useEffect } from "react";
//--------------------------------------------------------------------< types >
import { Dispatch, SetStateAction } from "react";
type Response<T> = [T, Dispatch<SetStateAction<T>>];
//========================================================[ < UseStoraState > ]
export default function useStorageState<T>(
  key: string,
  initialState: T
): Response<T> {
  const [state, setState] = useState(() => {
    if (typeof window !== "undefined") {
      const storageValue = localStorage.getItem(key);
      return storageValue ? JSON.parse(storageValue) : initialState;
    }
  });

  useEffect(() => {
    if (typeof window !== "undefined")
      localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
}
