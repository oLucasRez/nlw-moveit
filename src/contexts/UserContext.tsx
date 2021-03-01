//--------------------------------------------------------------------< hooks >
import { useState } from "react";
//-----------------------------------------------------------------< contexts >
import { createContext } from "react";
//--------------------------------------------------------------------< types >
import { Dispatch, SetStateAction, ReactNode } from "react";

type State<T> = [T, Dispatch<SetStateAction<T>>];

interface UserContextData {
  nameState: State<string>;
  usernameState: State<string>;
  avatarState: State<string>;
}

interface UserProviderProps {
  children: ReactNode;
}
//-------------------------------------------------------------------< global >
export const UserContext = createContext({} as UserContextData);
//=========================================================[ < UserProvider > ]
export function UserProvider({ children }: UserProviderProps) {
  //-----------------------------------------------------------------< return >
  return (
    <UserContext.Provider
      value={{
        nameState: useState(""),
        usernameState: useState(""),
        avatarState: useState(""),
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
