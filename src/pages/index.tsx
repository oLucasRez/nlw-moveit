//---------------------------------------------------------------< components >
import Head from "next/head";
import SignInForm from "../components/SignInForm";
//-------------------------------------------------------------------< styles >
import styles from "../styles/pages/SignIn.module.css";
//===============================================================[ < SignIn > ]
export default function SignIn() {
  //-----------------------------------------------------------------< return >
  return (
    <div className={styles.container}>
      <Head>
        <title>Entre | move.it</title>
      </Head>

      <img src="/banner-signin.svg" alt="" />
      <SignInForm />
    </div>
  );
}
