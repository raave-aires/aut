"use client"

// dependências:
import { signIn } from "next-auth/webauthn"

// componentes:
import { Button } from "@/components/ui/button";

// ícones:
import { Key } from "lucide-react";
import { auth } from "@/auth";

export async function PasskeyLoginButton() {
  const session = await auth()

  return(
   <>
    { session !== null ? (
        <Button
          variant="outline"
          className="cursor-pointer"
          onClick={() => signIn("passkey", { action: "register" })}
        >
          <Key /> Registrar chave de acesso
        </Button>
      ) : session === null ? (
        <Button
          onClick={() => signIn("passkey")}
        >
          <Key /> Entrar com chave de acesso
        </Button>
      ) : null }
   </>
  );
};