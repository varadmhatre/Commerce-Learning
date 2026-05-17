"use client";

import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { Award, BookOpen, Brain, Flame, Target, Trophy } from "lucide-react";
import { Card } from "@/components/ui/card";
import { roadmap } from "@/lib/curriculum";
import { achievements, levelFromXp } from "@/lib/gamification";
import { useLearningStore } from "@/store/use-learning-store";

const data = [
  { day: "Mon", xp: 120 }, { day: "Tue", xp: 210 }, { day: "Wed", xp: 320 }, { day: "Thu", xp: 470 }, { day: "Fri", xp: 620 }, { day: "Sat", xp: 760 }, { day: "Sun", xp: 860 }
];

export function DashboardClient() {
  const { xp, streak, completed, difficulty } = useLearningStore();
  const level = levelFromXp(xp);
  const unlocked = achievements(completed.length, streak, xp);
  const progress = Math.round((completed.length / roadmap.length) * 100);

  return (
    <main className="container py-10">
      <div className="mb-8">
        <p className="text-sm font-bold uppercase tracking-[.3em] text-cyan-200">Command center</p>
        <h1 className="mt-3 text-5xl font-black text-gradient">Your wealth learning dashboard</h1>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {[{ label: "Total XP", value: xp, icon: Trophy }, { label: "Streak", value: `${streak} days`, icon: Flame }, { label: "Roadmap", value: `${progress}%`, icon: Target }, { label: "Level", value: level.level, icon: Award }].map((stat) => {
          const Icon = stat.icon;
          return <Card key={stat.label} className="p-6"><Icon className="mb-5 text-cyan-200" /><p className="text-sm text-muted-foreground">{stat.label}</p><p className="mt-2 text-3xl font-black">{stat.value}</p></Card>;
        })}
      </div>
      <div className="mt-6 grid gap-6 lg:grid-cols-[1.2fr_.8fr]">
        <Card className="p-6">
          <h2 className="text-2xl font-black">XP velocity</h2>
          <div className="mt-6 h-80">
            <ResponsiveContainer width="100%" height="100%"><AreaChart data={data}><defs><linearGradient id="xp" x1="0" y1="0" x2="0" y2="1"><stop offset="5%" stopColor="#22d3ee" stopOpacity={0.7}/><stop offset="95%" stopColor="#22d3ee" stopOpacity={0}/></linearGradient></defs><CartesianGrid stroke="rgba(255,255,255,.08)" /><XAxis dataKey="day" stroke="#94a3b8" /><YAxis stroke="#94a3b8" /><Tooltip contentStyle={{ background: "#020617", border: "1px solid rgba(255,255,255,.12)", borderRadius: 16 }} /><Area type="monotone" dataKey="xp" stroke="#22d3ee" fill="url(#xp)" strokeWidth={3} /></AreaChart></ResponsiveContainer>
          </div>
        </Card>
        <Card className="p-6">
          <h2 className="text-2xl font-black">Achievements</h2>
          <div className="mt-5 space-y-3">{unlocked.map((item) => <div key={item.id} className={`flex gap-3 rounded-2xl p-4 ${item.unlocked ? "bg-emerald-300/10" : "bg-white/[0.04] opacity-60"}`}><item.icon className="size-5 text-emerald-200" /><div><p className="font-bold">{item.title}</p><p className="text-sm text-muted-foreground">{item.description}</p></div></div>)}</div>
        </Card>
      </div>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {roadmap.slice(0, 6).map((chapter) => <Card key={chapter.id} className="p-5"><div className="flex items-center gap-3"><BookOpen className="text-fuchsia-200" /><h3 className="font-black">{chapter.title}</h3></div><div className="mt-4 h-2 rounded-full bg-white/10"><div className={`h-2 rounded-full bg-gradient-to-r ${chapter.color}`} style={{ width: completed.includes(chapter.id) ? "100%" : `${difficulty[chapter.id] ?? 35}%` }} /></div></Card>)}
      </div>
      <Card className="mt-6 p-6"><div className="flex items-center gap-3"><Brain className="text-cyan-200" /><h2 className="text-2xl font-black">Personal recommendation</h2></div><p className="mt-3 text-muted-foreground">Because you completed foundations, continue with Money & Banking and revise Scarcity tomorrow to strengthen spaced repetition.</p></Card>
    </main>
  );
}
