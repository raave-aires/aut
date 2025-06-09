"use client"

// dependências:
import React from "react";
import { signIn } from "next-auth/react";

// componentes:
import { Button } from "@/components/ui/button";

// ícones:
import { SiGithub, SiGoogle } from "@icons-pack/react-simple-icons";
import { LoginButton } from "@/components/auth/buttons/login-button";

export default function Home() {
  return (
    <div className="min-w-dvh min-h-dvh flex justify-center items-center gap-3">
      <LoginButton provider="github" />
      <LoginButton provider="google" />
    </div>
  );
}