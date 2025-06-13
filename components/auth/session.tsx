import { auth } from "@/auth";

export async function SessionBanner() {
  const session = await auth();

  return (
    <div className="text-xs text-muted-foreground my-4">
      <p>Dados de sessão</p>
      <pre>
        {JSON.stringify(session, null, 2)}
      </pre>
    </div>
  );
};