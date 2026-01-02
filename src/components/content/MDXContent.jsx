import Markdown from "react-markdown";

export function MDXContent({ content }) {
  return (
    <div className="prose prose-gray max-w-none">
      <Markdown>{content}</Markdown>
    </div>
  );
}
