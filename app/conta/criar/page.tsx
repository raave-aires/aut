// componentes:
import { Card, CardContent } from "@/components/ui/card";
import { AuthHeader } from "@/components/auth/auth-header";
import { AuthButtons } from "@/components/auth/auth-buttons";
import { RegisterForm } from "@/components/auth/forms/register-form";
import { AuthFooter } from "@/components/auth/auth-footer";

export default function Home() {
  return (
    <main className="min-w-dvw min-h-dvh flex justify-center items-center">
      <Card>
        <AuthHeader auth_type="register"/>

        <CardContent>
          <AuthButtons />

          <RegisterForm />
        </CardContent>

        <AuthFooter auth_type="register" />
      </Card>
    </main>
  );
}