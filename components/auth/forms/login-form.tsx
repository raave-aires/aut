"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// componentes:
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Loader } from "@/components/auth/loader";

// ícones: 
import { EyeIcon, EyeClosedIcon } from "lucide-react";

// esquema do zod:
const loginInfos = z.object({
  email: z.string()
  .min(1, { message: "Precisamos de um e-mail ou nome de usuário" })
  .email({ message: "O e-mail digitado não é válido"}),
  password: z.string(),
});

export function LoginForm() {
  const [loading, setLoading] = useState(false);
  
  const form = useForm<z.infer<typeof loginInfos>>({
    resolver: zodResolver(loginInfos),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const pass = form.watch("password");
  const [showPass, setShowPass] = useState<boolean>(false);
  const disableShowPassButton = pass === "" || pass === undefined;

  async function onSubmit(values: z.infer<typeof loginInfos>) {
    setLoading(true);
    try {
      // simula o login (troca pelo teu request real)
      await new Promise((r) => setTimeout(r, 1200));
      // aqui vai a lógica do login real, tipo: await signInComApi(values)
      // redirect, etc
    } finally {
      setLoading(false);
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-4"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>E-mail ou nome de usuário</FormLabel>
              <FormControl>
                <Input
                  placeholder="você@alguma-coisa.com"
                  autoComplete="email username"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="flex justify-between">
                Senha
                <Button
                  variant="link"
                  className="cursor-pointer text-muted-foreground hover:text-black dark:hover:text-white p-0 h-3.5"
                  asChild
                >
                  <Link href="/conta/esqueci-a-senha">
                    Esqueceu sua senha?
                  </Link>
                </Button>
              </FormLabel>
              <FormControl>
                <div className="flex">
                  <Input
                    type={ showPass ? "text" : "password" }
                    placeholder="**********"
                    autoComplete="password"
                    className="rounded-r-none"
                    {...field}
                  />
                  <Button
                    type="button"
                    variant="outline"
                    className="rounded-l-none border-l-0"
                    onClick={() => setShowPass((prev) => !prev)}
                    disabled={disableShowPassButton}
                  >
                    { showPass && !disableShowPassButton ? (
                      <EyeIcon className="h-4 w-4" aria-hidden="true" />
                    ) : (
                      <EyeClosedIcon className="h-4 w-4" aria-hidden="true" />
                    )}
                    <span className="sr-only">
                      { showPass ? "Esconder senha" : "Mostrar senha"}
                    </span>
                  </Button>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button 
          className="text-white"
          type="submit" 
          disabled={loading}
        >
          { loading ? (
            <Loader />
          ) : "Entrar" }
        </Button>
      </form>
    </Form>
  );
};