// componentes:
import { Card, CardContent } from "@/components/ui/card";
import { AuthHeader } from "@/components/auth/auth-header";
import { AuthButtons } from "@/components/auth/auth-buttons";
import { LoginForm } from "@/components/auth/forms/login-form";
import { AuthFooter } from "@/components/auth/auth-footer";
import { PasskeyLoginButton } from "@/components/auth/buttons/passkey-login-button";

export default function Home() {
  return (
    <main className="min-w-dvw min-h-dvh flex justify-center items-center">
      <Card>
        <AuthHeader auth_type="login"/>

        <CardContent>
          <AuthButtons />

          <LoginForm />
        </CardContent>

        <AuthFooter auth_type="login" />
      </Card>
    </main>
  );
}