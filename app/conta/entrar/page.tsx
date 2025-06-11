// componentes:
import { CardContent } from "@/components/ui/card";
import { AuthHeader } from "@/components/auth/auth-header";
import { AuthButtons } from "@/components/auth/auth-buttons";
import { LoginForm } from "@/components/auth/forms/login-form";
import { AuthFooter } from "@/components/auth/auth-footer";

export default function Page() {
  return (
    <>
      <AuthHeader auth_type="login" />

      <CardContent>
        <AuthButtons />

        <LoginForm />
      </CardContent>

      <AuthFooter auth_type="login" />
    </>
  );
};