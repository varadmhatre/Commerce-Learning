"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BookOpen, Bot, Calculator, LayoutDashboard, Menu, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const nav = [
  { href: "/", label: "Home", icon: Sparkles },
  { href: "/learn/human-wants", label: "Learn", icon: BookOpen },
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/simulators", label: "Simulators", icon: Calculator },
  { href: "/mentor", label: "AI Mentor", icon: Bot }
];

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#030712]">
      <div className="fixed inset-0 -z-10">
        <div className="absolute left-1/2 top-[-10%] size-[42rem] -translate-x-1/2 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute bottom-[-10%] right-[-8%] size-[36rem] rounded-full bg-fuchsia-500/20 blur-3xl" />
        <div className="grid-mask absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,.06)_1px,transparent_1px)] bg-[size:64px_64px]" />
      </div>
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/55 backdrop-blur-2xl">
        <div className="container flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <motion.div whileHover={{ rotate: 8, scale: 1.06 }} className="grid size-11 place-items-center rounded-2xl bg-gradient-to-br from-cyan-300 to-fuchsia-400 shadow-glow">
              <Sparkles className="size-5 text-slate-950" />
            </motion.div>
            <div>
              <p className="text-lg font-black tracking-tight">Finverse Academy</p>
              <p className="text-xs text-cyan-100/70">Learn money systems visually</p>
            </div>
          </Link>
          <nav className="hidden items-center gap-2 lg:flex">
            {nav.map((item) => {
              const Icon = item.icon;
              return (
                <Link key={item.href} href={item.href} className={cn("flex items-center gap-2 rounded-full px-4 py-2 text-sm text-white/70 transition hover:bg-white/10 hover:text-white", pathname === item.href && "bg-white/10 text-white")}>
                  <Icon className="size-4" /> {item.label}
                </Link>
              );
            })}
          </nav>
          <Button className="hidden md:inline-flex" asChild><Link href="/learn/human-wants">Start learning</Link></Button>
          <Button variant="secondary" size="icon" className="lg:hidden"><Menu className="size-5" /></Button>
        </div>
      </header>
      {children}
    </div>
  );
}
