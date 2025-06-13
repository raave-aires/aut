import { PasskeyLoginButton } from "@/components/auth/buttons/passkey-login-button";
import { TwofaForm } from "@/components/auth/forms/2fa-form";
import { Or } from "@/components/auth/or";
import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function TwofaPage() {
  return (
    <>
      <CardHeader>
        <CardTitle>
          <span className="font-averia text-4xl">raavë</span>
        </CardTitle>
        <CardDescription>
          Por favor, insira seu código de uso único.
        </CardDescription>
      </CardHeader>

      <CardContent>
        <TwofaForm />
       <Or />
       <PasskeyLoginButton />
      </CardContent>
    </>
  );
}
