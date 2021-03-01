//--------------------------------------------------------------------< hooks >
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
//-------------------------------------------------------------------< styles >
import styles from "../styles/components/SignInForm.module.css";
//==============================================================[ < SignInForm > ]
export default function SignInForm() {
  //-------------------------------------------------------------< properties >
  const router = useRouter();
  //---------------------------------------------------------------------------
  const [username, setUsername] = useState("");
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
        <img src="/icons/github.svg" alt="GitHub" />
        <p>Faça login com seu GitHub para começar</p>
      </div>

      <div className={styles.inputContainer}>
        <input placeholder="Digite seu username" onChange={onUsernameInput} />
        <button type="submit" disabled={isButtonDisabled} onClick={onSubmit}>
          <img src="/icons/arrow-right.svg" alt="GitHub" />
        </button>
      </div>
    </div>
  );
}
