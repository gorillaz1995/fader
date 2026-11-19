import type { Metadata } from "next";
import { StoriesIndex } from "@/components/sections/stories/Stories";

export const metadata: Metadata = {
  title: "Testimoniale",
  description: "Poveștile de succes ale absolvenților Fade Academy.",
};

export default function TestimonialsPage() {
  return <StoriesIndex />;
}
