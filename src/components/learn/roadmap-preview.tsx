import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import { roadmap } from "@/lib/curriculum";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function RoadmapPreview() {
  return (
    <section className="container py-20">
      <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div>
          <p className="text-sm font-bold uppercase tracking-[.3em] text-fuchsia-200">Course architecture</p>
          <h2 className="mt-3 text-4xl font-black">A complete beginner-to-advanced money map.</h2>
        </div>
        <Button variant="secondary" asChild><Link href="/learn/human-wants">Open first chapter <ArrowRight className="size-4" /></Link></Button>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {roadmap.map((chapter, index) => (
          <Link key={chapter.id} href={`/learn/${chapter.id}`}>
            <Card className="h-full overflow-hidden p-5 transition hover:-translate-y-1 hover:border-white/25">
              <div className={`mb-5 h-2 rounded-full bg-gradient-to-r ${chapter.color}`} />
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">Chapter {index + 1} · {chapter.minutes} min · {chapter.xp} XP</p>
                  <h3 className="mt-2 text-xl font-black">{chapter.title}</h3>
                </div>
                <div className="grid size-11 shrink-0 place-items-center rounded-2xl bg-white/10"><BookOpen className="size-5 text-cyan-200" /></div>
              </div>
              <p className="mt-4 line-clamp-3 leading-7 text-muted-foreground">{chapter.subtitle}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold">{chapter.pillar}</span>
                <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold capitalize">{chapter.difficulty}</span>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}
