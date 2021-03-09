//---------------------------------------------------------------< interfaces >
import State from "../interfaces/State";
//-----------------------------------------------------------------< contexts >
import { createContext } from "react";
//--------------------------------------------------------------------< types >
import { ReactNode } from "react";
import useCookie from "../hooks/useCookie";

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
  const [name, setName] = useCookie("name", "Anônimo");
  const [username, setUsername] = useCookie("username", "anonimo");
  const [avatar, setAvatar] = useCookie("avatar", "");
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
