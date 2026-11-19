import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { STORIES } from "@/data/stories";
import { StoryDetail } from "@/components/sections/stories/Stories";

export const dynamicParams = false;

export const generateStaticParams = () => STORIES.map((story) => ({ slug: story.slug }));

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const story = STORIES.find((item) => item.slug === slug);
  return story ? { title: `${story.heading} — Testimonial`, description: story.paragraphs[0] } : {};
}

export default async function StoryPage({ params }: Props) {
  const { slug } = await params;
  const story = STORIES.find((item) => item.slug === slug);
  if (!story) notFound();
  return <StoryDetail story={story} />;
}
