import { CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface AuthHeaderProps {
  auth_type: "login" | "register";
};

export function AuthHeader({ auth_type }: AuthHeaderProps) {
  return (
    <CardHeader>
      <CardTitle>
        <span className="font-averia text-4xl">raavë</span>
      </CardTitle>
      <CardDescription>
        { auth_type === "login" ? "Bem-vindo(a) de volta. Entre para continuar." : "Para continuar, você precisa criar uma conta."}
      </CardDescription>
    </CardHeader>
  );
}
