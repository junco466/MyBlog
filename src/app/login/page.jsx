"use client";

import { useSession } from "next-auth/react";
import styles from "./loginPage.module.css";
// import { signIn } from "@/utils/auth"; se hace asi si se usa el server sider render (SSR)
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const LoginPage = () => {
  const { data, status } = useSession();
  const router = useRouter();
  console.log(data, status);

  //Ambos useEffect funcionan, pero es mejor usar replace, ya que este
  //no deja huella en el historial de navegacion y el usuario no podra
  //volver atras, algo util en una pagina de Login, donde el usuario
  //no deberia poder voler al login si ya ingreso.
  // useEffect(() => {
  //   if (status === "authenticated") {
  //     router.push("/dashboard");
  //   }
  // }, [status]);
  useEffect(() => {
    if (status === "authenticated") {
      router.replace("/");
    }
  }, [status, router]);

  if (status === "loading") {
    return <div className={styles.loading}>Loading....</div>;
  }

  // if ( status === "authenticated"){
  //   router.push("/")
  //   return null
  // }

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div
          className={styles.socialButton}
          // onClick={async () => {
          //   "use server";
          //   await signIn("google");
          // }}
          onClick={() => signIn()}
        >
          Sign in with Google
        </div>
        <div className={styles.socialButton}>Sign in with GitHub</div>
        <div className={styles.socialButton}>Sign in with Facebook</div>
      </div>
    </div>
  );
};

export default LoginPage;
