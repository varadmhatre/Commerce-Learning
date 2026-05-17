"use client";

import Link from "next/link";
import { ArrowRight, BrainCircuit, Coins, LineChart, PlayCircle } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { roadmap } from "@/lib/curriculum";

export function Hero() {
  return (
    <section className="container grid min-h-[calc(100vh-5rem)] items-center gap-12 py-16 lg:grid-cols-[1.05fr_.95fr]">
      <div>
        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm text-cyan-100">
          <BrainCircuit className="size-4" /> Beginner to advanced commerce intelligence
        </motion.div>
        <motion.h1 initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .08 }} className="max-w-5xl text-5xl font-black leading-[.95] tracking-tight text-gradient md:text-7xl">
          Learn money like a living universe, not a textbook.
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .16 }} className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
          Finverse Academy combines animated lessons, simulators, quizzes, flashcards, a mentor bot, spaced repetition, and gamified progress to teach commerce, economics, finance, banking, investing, entrepreneurship, and wealth psychology.
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .24 }} className="mt-9 flex flex-wrap gap-4">
          <Button size="lg" asChild><Link href="/learn/human-wants">Enter the roadmap <ArrowRight className="size-5" /></Link></Button>
          <Button size="lg" variant="secondary" asChild><Link href="/simulators"><PlayCircle className="size-5" /> Try simulators</Link></Button>
        </motion.div>
        <div className="mt-10 grid max-w-2xl grid-cols-3 gap-3">
          {["21 chapters", "9 systems", "1000+ XP"].map((stat) => <div key={stat} className="glass-panel rounded-2xl px-4 py-3 text-center text-sm font-semibold text-white/80">{stat}</div>)}
        </div>
      </div>
      <motion.div initial={{ opacity: 0, scale: .96 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: .15 }} className="relative">
        <Card className="relative overflow-hidden p-6">
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-cyan-300 via-fuchsia-300 to-emerald-300" />
          <div className="mb-6 flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Personal learning galaxy</p>
              <h2 className="text-2xl font-black">Commerce Roadmap</h2>
            </div>
            <div className="rounded-2xl bg-emerald-300/15 p-3 text-emerald-200"><Coins /></div>
          </div>
          <div className="space-y-3">
            {roadmap.slice(0, 6).map((chapter, index) => (
              <motion.div key={chapter.id} whileHover={{ x: 8 }} className="flex items-center gap-4 rounded-3xl border border-white/10 bg-slate-950/50 p-4">
                <div className={`grid size-12 place-items-center rounded-2xl bg-gradient-to-br ${chapter.color} font-black text-slate-950`}>{index + 1}</div>
                <div className="flex-1">
                  <p className="font-bold">{chapter.title}</p>
                  <p className="line-clamp-1 text-sm text-muted-foreground">{chapter.subtitle}</p>
                </div>
                <LineChart className="size-5 text-cyan-200" />
              </motion.div>
            ))}
          </div>
        </Card>
      </motion.div>
    </section>
  );
}
