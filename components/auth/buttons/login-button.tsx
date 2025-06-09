// dependências:
import React from "react";
import { signIn } from "next-auth/react";

// componentes:
import { Button } from "@/components/ui/button";

// ícones:
import { SiGithub, SiGoogle } from "@icons-pack/react-simple-icons";

interface LoginButtonProps {
  provider: "github" | "google";
  className?: string;
};

export function LoginButton({ provider, className }: LoginButtonProps) {
  return (
    <Button
      variant="outline"
      className={className ? `hover:cursor-pointer ${className}` : "hover:cursor-pointer"}
      onClick={() => signIn(provider, { redirectTo: '/conta/entrou' })}
    >
      { provider === "github" ? <><SiGithub /> GitHub</> : <><SiGoogle /> Google</>}
    </Button>
  );
};