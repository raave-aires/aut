"use client"

// dependências:
import { useSession } from "next-auth/react"
import { signIn } from "next-auth/webauthn"

// componentes:
import { Button } from "@/components/ui/button";

// ícones:
import { Key } from "lucide-react";

export function PasskeyLoginButton() {
  const { data: session, update, status } = useSession()

  return(
   <>
    { status === "authenticated" ? (
        <Button
          onClick={() => signIn("passkey", { action: "register" })}
        >
          <Key /> Registrar chave de acesso
        </Button>
      ) : status === "unauthenticated" ? (
        <Button
          onClick={() => signIn("passkey")}
        >
          <Key /> Entrar com chave de acesso
        </Button>
      ) : null }
   </>
  );
};