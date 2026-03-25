import Image from "next/image";
import { Instagram as InstagramIcon, ExternalLink, Play, Layers } from "lucide-react";
import { CONTACT } from "@/lib/constants";

interface BeholdPost {
  id: string;
  permalink: string;
  mediaType: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";
  isReel?: boolean;
  sizes: {
    medium: { mediaUrl: string; width: number; height: number };
  };
  prunedCaption?: string;
  caption?: string;
}

async function fetchFeed(): Promise<BeholdPost[]> {
  try {
    const res = await fetch("https://feeds.behold.so/WTmx3W09DNUtgOJpt8MM", {
      next: { revalidate: 3600 },
    });
    if (!res.ok) return [];
    const data = await res.json();
    const posts: BeholdPost[] = Array.isArray(data) ? data : (data.posts ?? []);
    return posts.slice(0, 6);
  } catch {
    return [];
  }
}

export default async function Instagram() {
  const posts = await fetchFeed();

  return (
    <section
      id="instagram"
      className="py-24 bg-[var(--charcoal)]"
      aria-label="Instagram feed"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <p className="font-[var(--font-barlow-condensed)] text-xs tracking-[0.3em] uppercase text-[var(--olive)] mb-3">
              Follow the Work
            </p>
            <h2 className="font-[var(--font-bebas)] text-[clamp(3rem,6vw,5rem)] tracking-widest text-[var(--cream)] leading-none">
              Instagram
            </h2>
            <div className="olive-divider w-24 mt-4" />
          </div>
          <a
            href={CONTACT.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-[var(--font-barlow-condensed)] text-sm tracking-[0.2em] uppercase text-[var(--olive)] hover:text-[var(--olive-lt)] border border-[var(--olive)]/30 hover:border-[var(--olive)]/60 px-5 py-3 transition-all duration-200 self-start"
          >
            <InstagramIcon size={14} strokeWidth={1.5} />
            @mobilesolutionzz
            <ExternalLink size={12} strokeWidth={1.5} />
          </a>
        </div>

        {/* Grid */}
        {posts.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-1">
            {posts.map((post) => (
              <a
                key={post.id}
                href={post.permalink}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative aspect-square overflow-hidden bg-[var(--steel)] block"
              >
                <Image
                  src={post.sizes.medium.mediaUrl}
                  alt={post.prunedCaption ?? post.caption ?? "Instagram post"}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-[var(--ink)]/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  {(post.prunedCaption || post.caption) && (
                    <p className="font-[var(--font-barlow)] text-xs text-[var(--ash)] leading-relaxed line-clamp-4">
                      {post.prunedCaption ?? post.caption}
                    </p>
                  )}
                </div>

                {/* Media type badge */}
                {post.mediaType === "VIDEO" && (
                  <div className="absolute top-2 right-2 bg-[var(--ink)]/70 p-1.5 rounded">
                    <Play size={12} className="text-white fill-white" />
                  </div>
                )}
                {post.mediaType === "CAROUSEL_ALBUM" && (
                  <div className="absolute top-2 right-2 bg-[var(--ink)]/70 p-1.5 rounded">
                    <Layers size={12} className="text-white" strokeWidth={1.5} />
                  </div>
                )}
              </a>
            ))}
          </div>
        ) : (
          <div className="flex items-center justify-center h-48 border border-white/5 text-[var(--muted)] font-[var(--font-barlow-condensed)] text-sm tracking-widest uppercase">
            Unable to load feed
          </div>
        )}
      </div>
    </section>
  );
}
