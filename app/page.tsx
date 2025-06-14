// dependências:
import React from "react";

// componentes:
import { Button } from "@/components/ui/button";

// ícones:
import { SiGithub } from "@icons-pack/react-simple-icons";

export default function Home() {
  return (
    <div className="min-w-dvh min-h-dvh flex justify-center items-center">
      <Button>
        <SiGithub /> Entrar com o Github 
      </Button>
    </div>
  );
}