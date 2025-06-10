import { LoginButton } from "@/components/auth/buttons/login-button";

export function AuthButtons() {
  return (
    <>
      <div className="grid grid-cols-2 gap-x-4">
        <LoginButton provider="github" />
        <LoginButton provider="google" />
      </div>
      <p className="flex items-center gap-x-3 text-sm text-muted-foreground before:h-px before:flex-1 before:bg-border after:h-px after:flex-1 after:bg-border">ou</p>
    </>
  );
}
