// componentes:
import { CardContent } from "@/components/ui/card";
import { AuthHeader } from "@/components/auth/auth-header";
import { AuthButtons } from "@/components/auth/oauth-buttons-render";
import { RegisterForm } from "@/components/auth/forms/register-form";
import { AuthFooter } from "@/components/auth/auth-footer";

export default function Page() {
  return (
    <>
      <AuthHeader auth_type="register"/>

      <CardContent>
        <AuthButtons />
        <RegisterForm />
      </CardContent>

      <AuthFooter auth_type="register" />
    </>
  );
};