import { auth } from "@/auth"

export default async function(){
  const session = await auth();

  return(
    <p>Bem-vindo, {session?.user?.name}!</p>
  );
};