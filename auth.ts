// dependências:
import NextAuth from "next-auth";
import authConfig from "@/auth.config";

// conector do banco de dados:
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "@/prisma";

export const { auth, handlers, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),
  session: { strategy: "jwt" },
  ...authConfig,

  pages: {
    signIn: "/conta/entrar",
  },
});