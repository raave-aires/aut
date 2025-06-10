// dependências:
import NextAuth from "next-auth";

// provedores OAuth:
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";

// provedor de magic links:
import Resend from "next-auth/providers/resend"

// conector do banco de dados:
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "@/prisma";

export const { auth, handlers, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [ GitHub, Google, Resend ],
  experimental: { enableWebAuthn: true },
});