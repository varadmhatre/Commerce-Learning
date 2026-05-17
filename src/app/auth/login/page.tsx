import { Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function LoginPage() {
  return (
    <main className="container grid min-h-[calc(100vh-5rem)] place-items-center py-10">
      <Card className="w-full max-w-md p-8 text-center">
        <div className="mx-auto mb-5 grid size-14 place-items-center rounded-2xl bg-gradient-to-br from-cyan-300 to-fuchsia-300 text-slate-950"><Sparkles /></div>
        <h1 className="text-3xl font-black">Create your Finverse identity</h1>
        <p className="mt-3 text-muted-foreground">Supabase auth is wired in the architecture. Add your project URL and anon key, then connect OAuth or magic links.</p>
        <Button className="mt-6 w-full">Continue with email</Button>
      </Card>
    </main>
  );
}
