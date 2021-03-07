//---------------------------------------------------------------< interfaces >
import State from "../interfaces/State";
//--------------------------------------------------------------------< hooks >
import { useEffect, useState } from "react";
//-----------------------------------------------------------------< contexts >
import { createContext } from "react";
//--------------------------------------------------------------------< types >
import { ReactNode } from "react";
import Cookies from "js-cookie";

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
  //-------------------------------------------------------------< properties >
  const [name, setName] = useState("Anônimo");
  const [username, setUsername] = useState("anonimo");
  const [avatar, setAvatar] = useState("");
  //----------------------------------------------------------------< methods >
  useEffect(() => {
    Cookies.set("name", name);
  }, [name]);
  useEffect(() => {
    Cookies.set("username", username);
  }, [username]);
  useEffect(() => {
    Cookies.set("avatar", avatar);
  }, [avatar]);
  //-----------------------------------------------------------------< return >
  return (
    <UserContext.Provider
      value={{
        nameState: [name, setName],
        usernameState: [username, setUsername],
        avatarState: [avatar, setAvatar],
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
