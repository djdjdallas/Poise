import Markdown from "react-markdown";

export function MDXContent({ content }) {
  return (
    <div className="prose prose-lg prose-zinc dark:prose-invert max-w-none
      prose-headings:font-semibold prose-headings:tracking-tight
      prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
      prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
      prose-h4:text-lg prose-h4:mt-6 prose-h4:mb-2
      prose-p:text-zinc-600 prose-p:dark:text-zinc-400 prose-p:leading-relaxed prose-p:mb-4
      prose-a:text-purple-600 prose-a:dark:text-purple-400 prose-a:underline prose-a:underline-offset-2 hover:prose-a:text-purple-700
      prose-strong:text-zinc-900 prose-strong:dark:text-zinc-100 prose-strong:font-semibold
      prose-ul:my-4 prose-ul:list-disc prose-ul:pl-6
      prose-ol:my-4 prose-ol:list-decimal prose-ol:pl-6
      prose-li:text-zinc-600 prose-li:dark:text-zinc-400 prose-li:mb-2 prose-li:leading-relaxed
      prose-blockquote:border-l-4 prose-blockquote:border-purple-500 prose-blockquote:pl-4 prose-blockquote:italic prose-blockquote:text-zinc-600 prose-blockquote:dark:text-zinc-400
      prose-code:bg-zinc-100 prose-code:dark:bg-zinc-800 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:font-mono
      prose-pre:bg-zinc-900 prose-pre:dark:bg-zinc-950 prose-pre:rounded-xl prose-pre:p-4
      prose-hr:border-zinc-200 prose-hr:dark:border-zinc-800 prose-hr:my-8
    ">
      <Markdown>{content}</Markdown>
    </div>
  );
}
