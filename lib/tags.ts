import { ValueOf } from 'lib/types';

const TAG_SLUGS = {
  Tech: 'tech',
  Update: 'update',
  Playlist: 'playlist',
  Ikigomi: 'ikigomi',
  Sento: 'sento',
  Link: 'link',
  ProductDev: 'product-dev',
} as const;

export type TagSlug = ValueOf<typeof TAG_SLUGS>;

type TagData = {
  slug: string;
  name: string;
  emoji: string;
};

const TAG_DATA: Record<TagSlug, TagData> = {
  [TAG_SLUGS.Tech]: {
    name: '技術',
    emoji: '💻',
    slug: TAG_SLUGS.Tech,
  },
  [TAG_SLUGS.Update]: {
    name: 'アップデート',
    emoji: '📝',
    slug: TAG_SLUGS.Update,
  },
  [TAG_SLUGS.Playlist]: {
    name: 'プレイリスト',
    emoji: '🎧',
    slug: TAG_SLUGS.Playlist,
  },
  [TAG_SLUGS.Ikigomi]: {
    name: '意気込み',
    emoji: '✊',
    slug: TAG_SLUGS.Ikigomi,
  },
  [TAG_SLUGS.Sento]: {
    name: '銭湯',
    emoji: '♨️',
    slug: TAG_SLUGS.Sento,
  },
  [TAG_SLUGS.Link]: {
    name: '外部リンク',
    emoji: '🔗',
    slug: TAG_SLUGS.Link,
  },
  [TAG_SLUGS.ProductDev]: {
    name: 'プロダクト開発',
    emoji: '🛠',
    slug: TAG_SLUGS.ProductDev,
  },
} as const;

export const getTagDataBySlug = (slug: TagSlug): TagData => TAG_DATA[slug];
