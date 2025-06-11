"use server";

import db from "@/lib/db";
import { hashSync } from "bcrypt-ts"

export default async function registerAction(
  _prevState: any,
  data: {
    name: string;
    lastname: string;
    email: string;
    password: string;
  }
) {
  console.log("##### A ação está rodando #####");
  console.log(data);

  // verifica se já existe um usuário com o mesmo e-mail:
  const user = await db.user.findUnique({
    where: {
      email: data.email,
    },
  });

  if(user) {
    return {
      message: "Este e-mail já está sendo utilizado.",
      success: false
    }
  }

  // após a validação de que não existe um usuário já registrada, seguimos para criação do usuário:
  await db.user.create({
    data: {
      name: data.name,
      lastname: data.lastname,
      email: data.email,
      password: hashSync(data.password)
    }
  });

  return {
    message: "Usuário criado com sucesso.",
    sucess: false
  }
}