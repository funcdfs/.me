import Image from "next/image";
import { useRouter } from "next/router";
import { ExtendedRecordMap } from "notion-types";

import BLOG from "~/blog.config";
import { Container } from "~/components";
import { NotionRenderer } from "~/components/Notion";
import { TagItem } from "~/components/Tag";
import formatDate from "~/lib/formatDate";
import { useLocale } from "~/lib/i18n/locale";
import { Post } from "~/types";

type Props = {
  blockMap: ExtendedRecordMap;
  post: Post;
  emailHash: string;
  fullWidth?: boolean;
  onlyContents?: boolean;
  slug?: string | null;
};

export const Layout: React.VFC<Props> = ({
  blockMap,
  post,
  emailHash,
  slug,
  fullWidth = false,
  onlyContents = false,
}) => {
  const locale = useLocale();
  const router = useRouter();
  const renderContents = () => (
    <article className="mt-6 mb-8 md:mt-0 max-w-4xl mx-auto">
      {/* 文章标题 */}
      <h1 className="text-3xl font-bold text-black dark:text-white mb-4">
        {post.title}
      </h1>
  
      {post?.type?.[0] !== "Page" && (
        <nav className="flex items-center justify-start mt-4 text-gray-500 dark:text-gray-300">
          {/* 作者和日期部分 */}
          <div className="flex items-center space-x-4">
            {/* 作者 */}
            <a href={BLOG.socialLink || "#"} className="flex items-center">
              <p className="font-medium text-lg text-indigo-400 dark:text-indigo-300 underline">
                {BLOG.author}
              </p>
            </a>
  
            {/* 分隔符 */}
            <span className="text-gray-400 dark:text-gray-500">/</span>
  
            {/* 日期 */}
            <div className="text-sm text-gray-500 dark:text-gray-400">
              {formatDate(post?.date?.start_date || post.createdTime, BLOG.lang)}
            </div>
          </div>
        </nav>
      )}
  
      {/* 文章标签部分，确保对齐并调整间距 */}
      {post.tags && (
        <div className="mt-4 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <TagItem key={tag} tag={tag} />
          ))}
        </div>
      )}
  
      {/* 文章内容块 */}
      {blockMap && (
        <div className="-mt-4 mb-4 notion-ignore-padding-x">
          <NotionRenderer recordMap={blockMap} />
        </div>
      )}
    </article>
  );
    
  
  
  return onlyContents ? (
    renderContents()
  ) : (
    <Container
      layout="blog"
      title={post.title}
      description={post.summary}
      date={new Date(post.createdTime).toISOString()}
      type="article"
      fullWidth={fullWidth}
      slug={slug}
    >
      {renderContents()}
      <div className="mb-4">
        <div> </div>
        <div className="flex">
        </div>
      </div>
      <div className="flex justify-between font-medium text-gray-500 dark:text-gray-400">
        <button
          onClick={() => router.push(BLOG.path || "/")}
          className="mt-2 hover:text-black dark:hover:text-gray-100 cursor-pointer"
          type="button"
        >
          ← {locale?.POST.BACK}
        </button>
      </div>
    </Container>
  );
};
