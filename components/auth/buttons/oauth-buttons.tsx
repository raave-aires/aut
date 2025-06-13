"use client";

// dependências
import React, { useState } from "react";
import { signIn } from "next-auth/react";

// componentes:
import { Button } from "@/components/ui/button";
import { Loader } from "@/components/auth/loader";

// ícones:
import { SiGithub, SiGoogle } from "@icons-pack/react-simple-icons";

interface LoginButtonProps {
  provider: "github" | "google";
  className?: string;
};

export function LoginButton({ provider, className }: LoginButtonProps) {
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    setLoading(true);
    try {
      await signIn(provider, { redirectTo: "/conta/entrou" });
    } catch (error) {
      setLoading(false);
    }
  };

  // define o nome do provider
  const providerName = provider === "github" ? "GitHub" : "Google";

  return (
    <Button
      variant="outline"
      className={className ? `hover:cursor-pointer ${className}` : "hover:cursor-pointer"}
      onClick={handleClick}
      disabled={loading}
    >
      { loading ? (
        <Loader />
      ) : provider === "github" ? (
        <SiGithub />
      ) : (
        <SiGoogle />
      )}
      {providerName}
    </Button>
  );
}