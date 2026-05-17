"use client";

import { useState } from "react";
import { CheckCircle2, XCircle } from "lucide-react";
import type { QuizQuestion } from "@/types/learning";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useLearningStore } from "@/store/use-learning-store";

export function QuizCard({ chapterId, questions }: { chapterId: string; questions: QuizQuestion[] }) {
  const [selected, setSelected] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const recordQuiz = useLearningStore((state) => state.recordQuiz);
  const question = questions[0];
  const correct = selected === question.answer;

  return (
    <Card className="p-6">
      <p className="text-sm font-bold uppercase tracking-[.2em] text-cyan-200">Checkpoint quiz</p>
      <h3 className="mt-3 text-2xl font-black">{question.prompt}</h3>
      <div className="mt-5 grid gap-3">
        {question.options.map((option, index) => (
          <button key={option} onClick={() => !submitted && setSelected(index)} className={`rounded-2xl border p-4 text-left transition ${selected === index ? "border-cyan-300 bg-cyan-300/10" : "border-white/10 bg-white/[0.04] hover:bg-white/10"}`}>
            {option}
          </button>
        ))}
      </div>
      {submitted && (
        <div className={`mt-5 flex gap-3 rounded-2xl p-4 ${correct ? "bg-emerald-400/10 text-emerald-100" : "bg-rose-400/10 text-rose-100"}`}>
          {correct ? <CheckCircle2 /> : <XCircle />} <p>{question.explanation}</p>
        </div>
      )}
      <Button className="mt-5" disabled={selected === null} onClick={() => { setSubmitted(true); recordQuiz(chapterId, correct ? 100 : 0); }}>
        Submit answer
      </Button>
    </Card>
  );
}
