"use client"

// dependências:
import React from "react";
import { signIn } from "next-auth/react";

// componentes:
import { Button } from "@/components/ui/button";

// ícones:
import { SiGithub } from "@icons-pack/react-simple-icons";

export default function Home() {
  return (
    <div className="min-w-dvh min-h-dvh flex justify-center items-center">
      <Button
        variant="outline"
        onClick={() => signIn('github', {redirectTo: '/conta/entrou'})}
      >
        <SiGithub /> Entrar com o Github 
      </Button>
    </div>
  );
}