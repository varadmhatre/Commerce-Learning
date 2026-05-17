import type { LucideIcon } from "lucide-react";

export type Difficulty = "beginner" | "intermediate" | "advanced";

export type QuizQuestion = {
  prompt: string;
  options: string[];
  answer: number;
  explanation: string;
};

export type Chapter = {
  id: string;
  title: string;
  subtitle: string;
  pillar: string;
  difficulty: Difficulty;
  minutes: number;
  xp: number;
  color: string;
  iconName: string;
  concept: string;
  beginner: string;
  advanced: string;
  example: string;
  observationTask: string;
  miniProject: string;
  checkpoints: string[];
  flashcards: { front: string; back: string }[];
  quiz: QuizQuestion[];
};

export type Achievement = {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  unlocked: boolean;
};
