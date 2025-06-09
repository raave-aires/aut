import { auth } from "@/auth"
import { redirect } from "next/navigation";

import LogoutButton from "@/components/auth/buttons/logout-button";

export default async function(){
  const session = await auth();

  if(!session){
    redirect('/conta/entrar')
  };

  return(
    <div className="min-w-dvh min-h-dvh flex flex-col justify-center items-center gap-4">
      <p>Bem-vindo, {session?.user?.name}!</p>
      <LogoutButton />
    </div>
  );
};