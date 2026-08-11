/**
 * The site's categories. Every post belongs to exactly one of these, so keep the
 * list short — six is the practical ceiling before the sidebar stops reading as
 * a menu. Rename or replace entries here, then update the `category` value in
 * each post's frontmatter to match; the build fails on any mismatch.
 *
 * Order matters: it is the order used on the categories index and in the home
 * sidebar.
 */
export const categories = [
  "CTF write ups",
  "OSINT",
  "Threat intel",
  "Cyber Security",
  "Lab learning and breakdowns",
  "News & interests",
] as const;

export type Category = (typeof categories)[number];

export const categorySlug = (category: string) =>
  category
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");

/** One line per category, shown on its archive page and in listings. */
export const categoryDescriptions: Record<Category, string> = {
  "CTF write ups": "For general CTF's, not just to learn but to keep track of mistakes and improvements",
  "OSINT": "About the OSINT community, techniques and recent developments",
  "Threat intel": "About all the most recent threat intelligence in a news format with breakdowns",
  "Cyber Security": "General learning and ideas",
  "Lab learning and breakdowns": "For more hands on learning and exercises with breakdowns",
  "News & interests": "Updates on news and events that relate to cyber",
};
