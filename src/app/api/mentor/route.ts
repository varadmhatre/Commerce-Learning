import { NextResponse } from "next/server";
import { z } from "zod";

const MentorRequest = z.object({ message: z.string().min(1).max(1000), level: z.enum(["beginner", "intermediate", "advanced"]).default("beginner") });

export async function POST(request: Request) {
  const parsed = MentorRequest.safeParse(await request.json());
  if (!parsed.success) return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  const { message, level } = parsed.data;
  return NextResponse.json({
    answer: `Mentor (${level}) response: ${message}. Decode the idea by asking: what value is exchanged, who takes risk, how cash moves, and what behavior incentives exist.`,
    nextActions: ["Write one real-world example", "Try the related simulator", "Add one flashcard to revision"]
  });
}
