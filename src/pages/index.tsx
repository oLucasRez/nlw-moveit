//---------------------------------------------------------------< interfaces >
//------------------------------------------------------------------< classes >
//--------------------------------------------------------------------< pages >
//---------------------------------------------------------------< components >
import Head from "next/head";

import SignInForm from "../components/SignInForm";
//------------------------------------------------------------------< helpers >
//-----------------------------------------------------------------< services >
//--------------------------------------------------------------------< hooks >
//-----------------------------------------------------------------< contexts >
//--------------------------------------------------------------------< utils >
//-------------------------------------------------------------------< assets >
//-------------------------------------------------------------------< styles >
import styles from "../styles/pages/SignIn.module.css";
//--------------------------------------------------------------------< types >
//===============================================================[ < SignIn > ]
export default function SignIn() {
  //-------------------------------------------------------------< properties >
  //---------------------------------------------------------------------------
  //----------------------------------------------------------------< methods >
  //---------------------------------------------------------------------------
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
