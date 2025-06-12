"use client";

import React, {
  useState,
  useActionState,
  startTransition,
  useEffect,
} from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// componentes:
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
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
import { AlertCircleIcon, Check, EyeIcon, EyeClosedIcon } from "lucide-react";

//ações:
import loginAction from "@/lib/loginAction";

// esquema do zod:
const loginInfos = z.object({
  email: z
    .string()
    .min(1, { message: "Precisamos de um e-mail ou nome de usuário" })
    .email({ message: "O e-mail digitado não é válido" }),
  password: z.string(),
});

export function LoginForm() {
  const router = useRouter();

  const [state, formAction, isPending] = useActionState(loginAction, null);
  const [showCheck, setShowCheck] = useState(false);
  const [showErrorFlash, setShowErrorFlash] = useState(false);

  // escolhe a classe de cor do botão
  const buttonColorClass = showCheck
    ? "bg-green-500"
    : showErrorFlash
    ? "bg-red-500 hover:bg-red-600"
    : null;

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
    startTransition(() => {
      formAction(values);
    });
  }

  useEffect(() => {
    if (state?.success) {
      setShowCheck(true);
      setTimeout(()=> console.log(""), 1000);
    } else if (state?.success === false) {
      setShowErrorFlash(true);
      setTimeout(() => setShowErrorFlash(false), 2000);
    }
  }, [state?.success, router]);

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
                  <Link href="/conta/esqueci-a-senha">Esqueceu sua senha?</Link>
                </Button>
              </FormLabel>
              <FormControl>
                <div className="flex">
                  <Input
                    type={showPass ? "text" : "password"}
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
                    {showPass && !disableShowPassButton ? (
                      <EyeIcon className="h-4 w-4" aria-hidden="true" />
                    ) : (
                      <EyeClosedIcon className="h-4 w-4" aria-hidden="true" />
                    )}
                    <span className="sr-only">
                      {showPass ? "Esconder senha" : "Mostrar senha"}
                    </span>
                  </Button>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {state?.success === false ? (
          <Alert variant="destructive">
            <AlertCircleIcon />
            <AlertTitle className="text-sm">Falha ao entrar.</AlertTitle>
            <AlertDescription>
              <p className="text-xs">
                {state?.message ?? "Tente novamente mais tarde."}
              </p>
            </AlertDescription>
          </Alert>
        ) : state?.success === undefined ? null : null}

        <Button
          type="submit"
          className={`text-white ${buttonColorClass}`}
          disabled={isPending}
        >
          {isPending ? <Loader /> : showCheck ? <Check size={16} /> : "Entrar"}
        </Button>
      </form>
    </Form>
  );
}
