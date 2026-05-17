"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Bookmark, Check, ChevronRight, Eye, GraduationCap, Layers3, NotebookPen, Sparkles } from "lucide-react";
import type { Chapter } from "@/types/learning";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { QuizCard } from "@/components/learn/quiz-card";
import { useLearningStore } from "@/store/use-learning-store";
import { roadmap } from "@/lib/curriculum";

export function LessonPage({ chapter }: { chapter: Chapter }) {
  const [mode, setMode] = useState<"beginner" | "advanced">("beginner");
  const { completeChapter, toggleBookmark, bookmarks, saveNote, notes } = useLearningStore();
  const next = roadmap[(roadmap.findIndex((item) => item.id === chapter.id) + 1) % roadmap.length];

  return (
    <main className="container grid gap-8 py-10 lg:grid-cols-[1fr_360px]">
      <section className="space-y-6">
        <Card className="overflow-hidden p-8">
          <div className={`mb-8 h-2 rounded-full bg-gradient-to-r ${chapter.color}`} />
          <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
            <span>{chapter.pillar}</span><ChevronRight className="size-4" /><span>{chapter.minutes} min</span><ChevronRight className="size-4" /><span>{chapter.xp} XP</span>
          </div>
          <h1 className="mt-5 text-5xl font-black tracking-tight text-gradient">{chapter.title}</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-300">{chapter.subtitle}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button onClick={() => completeChapter(chapter.id, chapter.xp)}><Check className="size-4" /> Mark complete</Button>
            <Button variant="secondary" onClick={() => toggleBookmark(chapter.id)}><Bookmark className="size-4" /> {bookmarks.includes(chapter.id) ? "Bookmarked" : "Bookmark"}</Button>
          </div>
        </Card>

        <Card className="p-6">
          <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
            <div><p className="text-sm font-bold uppercase tracking-[.2em] text-fuchsia-200">Visual explanation</p><h2 className="text-2xl font-black">Concept lens</h2></div>
            <div className="rounded-full bg-white/10 p-1">
              {(["beginner", "advanced"] as const).map((item) => <button key={item} onClick={() => setMode(item)} className={`rounded-full px-4 py-2 text-sm font-bold capitalize ${mode === item ? "bg-cyan-300 text-slate-950" : "text-white/70"}`}>{item}</button>)}
            </div>
          </div>
          <motion.div key={mode} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="grid gap-4 lg:grid-cols-3">
            <div className="lg:col-span-2 rounded-3xl bg-slate-950/60 p-6">
              <div className="mb-4 flex items-center gap-3"><Sparkles className="text-cyan-200" /><h3 className="text-xl font-black">Core idea</h3></div>
              <p className="text-lg leading-9 text-slate-200">{mode === "beginner" ? chapter.beginner : chapter.advanced}</p>
              <p className="mt-5 rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-muted-foreground"><b className="text-white">Real world:</b> {chapter.example}</p>
            </div>
            <div className="relative min-h-72 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.02] p-5">
              <div className="absolute left-8 top-10 size-24 animate-float rounded-full bg-cyan-300/20 blur-xl" />
              <div className="absolute bottom-8 right-8 size-28 animate-float rounded-full bg-fuchsia-300/20 blur-xl [animation-delay:1s]" />
              {["Want", "Choice", "Trade-off", "Value"].map((node, index) => <div key={node} className="relative mb-4 rounded-2xl border border-white/10 bg-slate-950/60 p-3 text-center font-bold" style={{ marginLeft: index * 18 }}>{node}</div>)}
            </div>
          </motion.div>
        </Card>

        <div className="grid gap-6 md:grid-cols-2">
          <Card className="p-6"><Eye className="mb-4 text-emerald-200" /><h3 className="text-xl font-black">Observation task</h3><p className="mt-3 leading-7 text-muted-foreground">{chapter.observationTask}</p></Card>
          <Card className="p-6"><Layers3 className="mb-4 text-orange-200" /><h3 className="text-xl font-black">Mini project</h3><p className="mt-3 leading-7 text-muted-foreground">{chapter.miniProject}</p></Card>
        </div>

        <QuizCard chapterId={chapter.id} questions={chapter.quiz} />
      </section>

      <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
        <Card className="p-6">
          <h3 className="flex items-center gap-2 text-xl font-black"><GraduationCap className="text-cyan-200" /> Checkpoints</h3>
          <div className="mt-4 space-y-3">{chapter.checkpoints.map((checkpoint) => <div key={checkpoint} className="flex gap-3 rounded-2xl bg-white/[0.04] p-3"><Check className="size-5 text-emerald-200" /> <span>{checkpoint}</span></div>)}</div>
        </Card>
        <Card className="p-6">
          <h3 className="text-xl font-black">Flashcards</h3>
          <div className="mt-4 space-y-3">{chapter.flashcards.map((card) => <details key={card.front} className="rounded-2xl bg-white/[0.04] p-4"><summary className="cursor-pointer font-bold">{card.front}</summary><p className="mt-3 text-muted-foreground">{card.back}</p></details>)}</div>
        </Card>
        <Card className="p-6">
          <h3 className="flex items-center gap-2 text-xl font-black"><NotebookPen className="text-fuchsia-200" /> Notebook</h3>
          <textarea className="mt-4 min-h-32 w-full rounded-2xl border border-white/10 bg-slate-950/70 p-4 outline-none focus:ring-2 focus:ring-cyan-300" defaultValue={notes[chapter.id] ?? ""} onBlur={(event) => saveNote(chapter.id, event.currentTarget.value)} placeholder="Capture your insight..." />
        </Card>
        <Button className="w-full" asChild><Link href={`/learn/${next.id}`}>Next chapter: {next.title}</Link></Button>
      </aside>
    </main>
  );
}
