import Markdown from 'markdown-to-jsx/react';
import MarkdownCarousel from 'components/posts/MarkdownCarousel';
import Spoiler from 'components/posts/Spoiler';

function normalizeJsxAttributeCommas(markdown: string): string {
  return markdown.replace(
    /<([A-Z][A-Za-z0-9]*)\b([\s\S]*?)(\/?>)/g,
    (_match, tag: string, attrs: string, close: string) => (
      `<${tag}${attrs.replace(/(")\s*,/g, '$1')}${close}`
    ),
  );
}

type PostMarkdownProps = {
  children: string;
};

function PostMarkdown({ children }: PostMarkdownProps) {
  return (
    <Markdown
      options={{
        overrides: {
          Carousel: {
            component: MarkdownCarousel,
          },
          Spoiler: {
            component: Spoiler,
          },
        },
      }}
    >
      {normalizeJsxAttributeCommas(children)}
    </Markdown>
  );
}

export default PostMarkdown;
