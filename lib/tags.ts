import { ValueOf } from "lib/types";

// NOTE: you can customize tags to match the tags in your Notion database
const TAG_SLUGS = {
  All: "all",
  Movie: "影视",
  Music: "音乐",
  Food: "食物存档",
  Book: "读后感",
  Tourist: "旅游记录",
  Link: "link",
} as const;

export type TagSlug = ValueOf<typeof TAG_SLUGS>;

type TagData = {
  slug: string;
  name: string;
  emoji: string;
};

const TAG_DATA: Record<TagSlug, TagData> = {
  [TAG_SLUGS.Movie]: {
    name: "Movie", // Display name
    emoji: "🎬", // Emoji
    slug: TAG_SLUGS.Movie, // Slug
  },
  [TAG_SLUGS.Music]: {
    name: "Music",
    emoji: "🎵",
    slug: TAG_SLUGS.Music,
  },
  [TAG_SLUGS.Food]: {
    name: "Food",
    emoji: "🧀",
    slug: TAG_SLUGS.Food,
  },
  [TAG_SLUGS.Book]: {
    name: "Book",
    emoji: "📚",
    slug: TAG_SLUGS.Book,
  },
  [TAG_SLUGS.Link]: {
    name: "Link",
    emoji: "🔗",
    slug: TAG_SLUGS.Link,
  },
  [TAG_SLUGS.Tourist]: {
    name: "Tourist",
    emoji: "⛰️",
    slug: TAG_SLUGS.Tourist,
  },
  [TAG_SLUGS.All]: {
    name: "All",
    emoji: "🌴",
    slug: TAG_SLUGS.All,
  },
} as const;

export const isTagSlug = (slug: string): slug is TagSlug =>
  (Object.values(TAG_SLUGS) as string[]).includes(slug);

export const getTagDataBySlug = (slug: TagSlug): TagData => TAG_DATA[slug];
