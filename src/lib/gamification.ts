import { Award, Brain, Flame, Gem, Trophy } from "lucide-react";
import type { Achievement } from "@/types/learning";

export function levelFromXp(xp: number) {
  const level = Math.floor(Math.sqrt(xp / 120)) + 1;
  const currentFloor = (level - 1) ** 2 * 120;
  const nextFloor = level ** 2 * 120;
  return { level, progress: Math.round(((xp - currentFloor) / (nextFloor - currentFloor)) * 100), nextXp: nextFloor };
}

export function achievements(completedCount: number, streak: number, xp: number): Achievement[] {
  return [
    { id: "first-tradeoff", title: "First Trade-off", description: "Completed your first foundation lesson.", icon: Gem, unlocked: completedCount >= 1 },
    { id: "week-streak", title: "7-Day Money Mind", description: "Kept a weekly learning streak alive.", icon: Flame, unlocked: streak >= 7 },
    { id: "market-reader", title: "Market Reader", description: "Reached 1,000 XP across the money map.", icon: Brain, unlocked: xp >= 1000 },
    { id: "wealth-architect", title: "Wealth Architect", description: "Completed six core chapters.", icon: Trophy, unlocked: completedCount >= 6 },
    { id: "revision-pro", title: "Revision Pro", description: "Unlocked spaced repetition flow.", icon: Award, unlocked: completedCount >= 3 }
  ];
}
