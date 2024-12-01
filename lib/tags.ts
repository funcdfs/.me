import { ValueOf } from "lib/types";

// NOTE: you can customize tags to match the tags in your Notion database
const TAG_SLUGS = {
  All: "all",
  Game: "游戏",
  TV: "电影与电视",
  Book: " 书籍",
  Photography: "摄影",
  Travel: "旅游记录",
  Food: "美食",
  Link: "link",
} as const;

export type TagSlug = ValueOf<typeof TAG_SLUGS>;

type TagData = {
  slug: string;
  name: string;
  emoji: string;
};

const TAG_DATA: Record<TagSlug, TagData> = {
  [TAG_SLUGS.Game]: {
    name: "Game", // Display name
    emoji: "🎮", // Emoji
    slug: TAG_SLUGS.Game, // Slug
  },
  [TAG_SLUGS.TV]: {
    name: "TV",
    emoji: "🎬",
    slug: TAG_SLUGS.TV,
  },
  [TAG_SLUGS.Book]: {
    name: "Book",
    emoji: "📚",
    slug: TAG_SLUGS.Book,
  },
  [TAG_SLUGS.Photography]: {
    name: "Photography",
    emoji: "📹",
    slug: TAG_SLUGS.Photography,
  },
  [TAG_SLUGS.Travel]: {
    name: "Travel",
    emoji: "⛰️",
    slug: TAG_SLUGS.Travel,
  },
  [TAG_SLUGS.Food]: {
    name: "Food",
    emoji: "🍽️",
    slug: TAG_SLUGS.Food,
  },
  [TAG_SLUGS.Link]: {
    name: "Link",
    emoji: "🔗",
    slug: TAG_SLUGS.Link,
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
