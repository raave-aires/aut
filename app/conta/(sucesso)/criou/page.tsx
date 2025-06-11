// "use client";

// import React from "react";
// import { useActionState, startTransition } from "react";
// import { redirect } from "next/navigation";
// import { useForm } from "react-hook-form";
// import { z } from "zod";
// import { zodResolver } from "@hookform/resolvers/zod";

// // componentes shadcn:
// import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import { Loader } from "@/components/auth/loader";

// // ação de verificação no servidor:
// import verifyEmailAction from "@/lib/verifyEmailAction";

// // esquema zod para código:
// const verifySchema = z.object({
//   code: z.string().length(6, { message: "O código deve ter 6 caracteres" }),
// });

// type VerifyForm = z.infer<typeof verifySchema>;

// export default function VerifyEmailPage() {
//   const [state, formAction, isPending] = useActionState(verifyEmailAction, null);
//   const form = useForm<VerifyForm>({
//     resolver: zodResolver(verifySchema),
//     defaultValues: { code: "" },
//   });

//   async function onSubmit(values: VerifyForm) {
//     try {
//       startTransition(() => formAction(values));
//     } finally {
//       if (state?.success) redirect("/conta/verificado");
//     }
//   }

//   return (
//     <div className="mx-auto max-w-md py-12 px-4">
//       <h1 className="text-3xl font-bold mb-4">Verifique seu e-mail</h1>
//       <p className="mb-6 text-muted-foreground">
//         Enviamos um código de verificação para seu e-mail. Insira-o abaixo para ativar sua conta.
//       </p>

//       {state?.error && (
//         <p className="mb-4 text-sm text-destructive">{state.message}</p>
//       )}
//       {state?.success && (
//         <p className="mb-4 text-sm text-success">{state.message}</p>
//       )}

//       <Form {...form}>
//         <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4">
//           <FormField
//             control={form.control}
//             name="code"
//             render={({ field }) => (
//               <FormItem>
//                 <FormLabel>Código de verificação</FormLabel>
//                 <FormControl>
//                   <Input
//                     placeholder="123456"
//                     autoComplete="one-time-code"
//                     maxLength={6}
//                     {...field}
//                   />
//                 </FormControl>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />

//           <Button type="submit" disabled={isPending} className="w-full">
//             {isPending ? <Loader /> : "Verificar"}
//           </Button>
//         </form>
//       </Form>
//     </div>
//   );
// }


export default function Page() {
  return <p>Foi</p>
};