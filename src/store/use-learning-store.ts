"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

type DifficultyMap = Record<string, number>;

type LearningState = {
  xp: number;
  streak: number;
  completed: string[];
  bookmarks: string[];
  notes: Record<string, string>;
  difficulty: DifficultyMap;
  quizScores: Record<string, number>;
  completeChapter: (chapterId: string, xp: number) => void;
  toggleBookmark: (chapterId: string) => void;
  saveNote: (chapterId: string, note: string) => void;
  setDifficulty: (conceptId: string, value: number) => void;
  recordQuiz: (chapterId: string, score: number) => void;
};

export const useLearningStore = create<LearningState>()(
  persist(
    (set) => ({
      xp: 860,
      streak: 7,
      completed: ["human-wants", "scarcity-utility"],
      bookmarks: ["investing-sips-mutual-funds"],
      notes: {},
      difficulty: {},
      quizScores: {},
      completeChapter: (chapterId, xp) =>
        set((state) => ({
          completed: state.completed.includes(chapterId) ? state.completed : [...state.completed, chapterId],
          xp: state.completed.includes(chapterId) ? state.xp : state.xp + xp,
          streak: Math.max(state.streak, 1)
        })),
      toggleBookmark: (chapterId) =>
        set((state) => ({ bookmarks: state.bookmarks.includes(chapterId) ? state.bookmarks.filter((id) => id !== chapterId) : [...state.bookmarks, chapterId] })),
      saveNote: (chapterId, note) => set((state) => ({ notes: { ...state.notes, [chapterId]: note } })),
      setDifficulty: (conceptId, value) => set((state) => ({ difficulty: { ...state.difficulty, [conceptId]: value } })),
      recordQuiz: (chapterId, score) => set((state) => ({ quizScores: { ...state.quizScores, [chapterId]: score } }))
    }),
    { name: "commerce-learning-state" }
  )
);
