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
){
  console.log("##### A ação está rodando #####");
  console.log(data);

  try {
    // 1º passo: validação dos dados recebidos:
    // um esquema do zod já foi definido no componente RegisterForm.tsx, validando os dados antes de chegar aqui e garantindo que os dados estejam completos e corretos.

    // 2º passo: verifica se já existe um usuário com o mesmo e-mail:
    const user = await db.user.findUnique({
      where: { email: data.email },
    });
    
    if (user) {
      return {
        success: false,
        message: "Este e-mail já está cadastrado. Tente outro ou faça login.",
      };
    }

    // se não existir, continua o processo de registro:
    // 3º passo: cria o usuário no banco de dados:
     await db.user.create({
      data: {
        name: data.name,
        lastname: data.lastname,
        email: data.email,
        password: hashSync(data.password),
      },
    });

    return {
      success: true,
    };
  } catch (error) {
    console.error("Erro em registerAction: ", error);
    
    return {
      success: false,
      message: "Ocorreu um erro inesperado. Por favor, tente novamente mais tarde.",
    };
  }
}