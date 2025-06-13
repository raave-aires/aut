import { LoginButton } from "@/components/auth/buttons/oauth-buttons";
import { Or } from "./or";

export function AuthButtons() {
  return (
    <>
      <div className="grid grid-cols-2 gap-x-4">
        <LoginButton provider="github" />
        <LoginButton provider="google" />
      </div>
      <Or />
    </>
  );
}
