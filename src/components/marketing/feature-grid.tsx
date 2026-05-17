import { Bot, Brain, CalendarClock, ChartNoAxesCombined, FlaskConical, Goal, NotebookPen, Shield, Trophy } from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
  { icon: Brain, title: "Visual learning engine", copy: "Beginner and advanced explanations, concept trees, animated diagrams, and checkpoints for every chapter." },
  { icon: FlaskConical, title: "Interactive simulations", copy: "Budgeting, SIP projections, wealth dashboards, market psychology, demand-supply shifts, and stock practice." },
  { icon: Trophy, title: "Gamification", copy: "XP, levels, streaks, achievements, difficulty tracking, and personalized next lessons." },
  { icon: CalendarClock, title: "Spaced repetition", copy: "Flashcards and revision reminders resurface concepts before you forget them." },
  { icon: Bot, title: "AI mentor", copy: "A guided mentor interface that answers questions with beginner-friendly analogies and next actions." },
  { icon: NotebookPen, title: "Notebook", copy: "Save notes, bookmarks, observations, mini projects, and reflections next to each concept." },
  { icon: ChartNoAxesCombined, title: "Investing literacy", copy: "SIPs, mutual funds, compounding, risk, behavior, cycles, and portfolio thinking." },
  { icon: Shield, title: "Financial safety", copy: "Credit, taxes, insurance, emergency funds, debt payoff, and downside protection." },
  { icon: Goal, title: "Real-world projects", copy: "Observe markets, decode ads, build budgets, analyze businesses, and design wealth systems." }
];

export function FeatureGrid() {
  return (
    <section className="container py-20">
      <div className="mx-auto mb-12 max-w-3xl text-center">
        <p className="text-sm font-bold uppercase tracking-[.3em] text-cyan-200">Production-grade learning systems</p>
        <h2 className="mt-4 text-4xl font-black md:text-5xl">Everything a beginner needs to become financially fluent.</h2>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => {
          const Icon = feature.icon;
          return (
            <Card key={feature.title} className="group p-6 transition hover:-translate-y-1 hover:border-cyan-200/30">
              <div className="mb-5 grid size-12 place-items-center rounded-2xl bg-white/10 text-cyan-200 transition group-hover:bg-cyan-300 group-hover:text-slate-950"><Icon /></div>
              <h3 className="text-xl font-black">{feature.title}</h3>
              <p className="mt-3 leading-7 text-muted-foreground">{feature.copy}</p>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
