//---------------------------------------------------------------< components >
import {
  RiGithubFill as GithubIcon,
  RiArrowRightLine as ArrowIcon,
} from "react-icons/ri";
//--------------------------------------------------------------------< hooks >
import { useRouter } from "next/router";
import { useState, useEffect, useContext } from "react";
//-----------------------------------------------------------------< contexts >
import { UserContext } from "../contexts/UserContext";
//-------------------------------------------------------------------< styles >
import styles from "../styles/components/SignInForm.module.css";
//===========================================================[ < SignInForm > ]
export default function SignInForm() {
  //-------------------------------------------------------------< properties >
  const router = useRouter();
  //---------------------------------------------------------------------------
  const [username, setUsername] = useContext(UserContext).usernameState;
  //---------------------------------------------------------------------------
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  //----------------------------------------------------------------< methods >
  useEffect(() => setIsButtonDisabled(username === ""), [username]);
  //---------------------------------------------------------------------------
  function onUsernameInput({ target }) {
    setUsername(target.value);
  }

  function onSubmit() {
    // TODO: validar username
    router.push("/home");
  }
  //-----------------------------------------------------------------< return >
  return (
    <div className={styles.container}>
      <img src="/logo-full-alt.svg" alt="move.it" />

      <h1>Bem-vindo</h1>

      <div className={styles.gitHubContainer}>
        <GithubIcon />
        <p>Faça login com seu GitHub para começar</p>
      </div>

      <div className={styles.inputContainer}>
        <input
          placeholder="Digite seu username"
          onChange={onUsernameInput}
          value={username}
        />
        <button type="submit" disabled={isButtonDisabled} onClick={onSubmit}>
          <ArrowIcon />
        </button>
      </div>
    </div>
  );
}
