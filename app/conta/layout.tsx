import { Card } from "@/components/ui/card";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-w-dvw min-h-dvh flex justify-center items-center">
      <Card className="max-w-[27rem] min-w-[24rem]">
        {children}
      </Card>
    </main>
  );
}