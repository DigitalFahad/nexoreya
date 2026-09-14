import { notFound } from "next/navigation";
import { redirect } from "next/navigation";
const destinations: Record<string, string> = {
  "ai-voice-agent": "/solutions/intelligent-growth-systems/",
  "ecommerce-growth": "/solutions/digital-experience/",
  "qsr-performance": "/solutions/growth-strategy/",
};
export function generateStaticParams() {
  return Object.keys(destinations).map((slug) => ({ slug }));
}
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (!destinations[slug]) notFound();
  redirect(destinations[slug]);
}
