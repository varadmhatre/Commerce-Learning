import { notFound } from "next/navigation";
import { LessonPage } from "@/components/learn/lesson-page";
import { getChapter, roadmap } from "@/lib/curriculum";

export function generateStaticParams() {
  return roadmap.map((chapter) => ({ chapterId: chapter.id }));
}

export default async function ChapterRoute({ params }: { params: Promise<{ chapterId: string }> }) {
  const { chapterId } = await params;
  const chapter = getChapter(chapterId);
  if (!chapter) notFound();
  return <LessonPage chapter={chapter} />;
}
