// componentes:
import { CardContent } from "@/components/ui/card";
import { AuthHeader } from "@/components/auth/auth-header";
import { AuthButtons } from "@/components/auth/auth-buttons";
import { LoginForm } from "@/components/auth/forms/login-form";
import { AuthFooter } from "@/components/auth/auth-footer";
import { SessionBanner } from "@/components/auth/session";

export default function Page() {
  return (
    <>
      <AuthHeader auth_type="login" />
      
      <CardContent>
        <AuthButtons />
        <LoginForm />
        <SessionBanner />
      </CardContent>

      <AuthFooter auth_type="login" />
    </>
  );
};