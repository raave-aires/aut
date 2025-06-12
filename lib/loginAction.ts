"use server";

import { signIn } from "@/auth";

export default async function loginAction(
  _prevState: any,
  data: {
    email: string;
    password: string;
  }
){
  try {
    // passa o FormData pra signIn
    await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false
    });

    return { success: true };
  } catch (error: any) {
      if(error.type === "CredentialsSignin"){
        return { success: false, message: "E-mail ou senha inválidos. Tente novamente."}
      }

    return { success: false, message: "Ocorreu um erro inesperado. Por favor, tente novamente mais tarde." };
  }
}