// dependências:
import React from "react";
import { LoginButton } from "@/components/auth/buttons/login-button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { LoginForm } from "./form";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-w-dvw min-h-dvh flex justify-center items-center">
      <Card>
        <CardHeader>
          <CardTitle>
            <span className="font-averia text-4xl">raavë</span>
          </CardTitle>
          <CardDescription>
            Entre para continuar
          </CardDescription>
        </CardHeader>

        <CardContent className="">
          <div className="grid grid-cols-2 gap-x-4">
            <LoginButton provider="github"/>
            <LoginButton provider="google"/>
          </div>

          <p className="flex items-center gap-x-3 text-sm text-muted-foreground before:h-px before:flex-1 before:bg-border after:h-px after:flex-1 after:bg-border">ou</p>
          <LoginForm />
        </CardContent>

        <CardFooter className="w-full flex justify-center pt-2">
          <Link 
            href="/conta/criar"
            className="group/linkCriacao"
          >
            Não tem uma conta? <span className="underline-offset-4 group-hover/linkCriacao:underline">Crie uma</span>
          </Link>
        </CardFooter>
      </Card>
    </main>
  );
}