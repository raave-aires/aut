// dependências:
import NextAuth from "next-auth";

// conector do banco de dados:
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "@/prisma";

// fornecedores:
import type { Provider } from "next-auth/providers";
import Credentials from "next-auth/providers/credentials";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";

// ações:
import { findUserByEmail } from "@/lib/user";

const providers: Provider[] = [
  Credentials({
    credentials: {
      email: {},
      password: {},
    },

    authorize: async (credentials) => {
      console.log(credentials);

      // lógica de autenticação:
      const user = await findUserByEmail(
        credentials.email as string,
        credentials.password as string
      );

      console.log(user)
      return user;
    },
  }),
  GitHub,
  Google,
];

export const { auth, handlers, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers,
  // pages: {
  //   signIn: "/conta/entrar",
  // },
});