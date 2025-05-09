import { ComponentPropsWithoutRef } from 'react';
import { CodeBlock } from './CodeBlock';

type HeadingProps = ComponentPropsWithoutRef<'h1'>;
type ParagraphProps = ComponentPropsWithoutRef<'p'>;
type ListProps = ComponentPropsWithoutRef<'ul'>;
type ListItemProps = ComponentPropsWithoutRef<'li'>;
type AnchorProps = ComponentPropsWithoutRef<'a'>;
type BlockquoteProps = ComponentPropsWithoutRef<'blockquote'>;

const generateId = (text: string) => {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9가-힣]/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
};

export const components = {
  h1: ({ children, ...props }: HeadingProps) => {
    const id = generateId(children as string);
    return (
      <h1 id={id} className="my-5 text-3xl font-bold text-title" {...props}>
        {children}
      </h1>
    );
  },
  h2: ({ children, ...props }: HeadingProps) => {
    const id = generateId(children as string);
    return (
      <h2 id={id} className="my-3 text-2xl font-bold text-title" {...props}>
        {children}
      </h2>
    );
  },
  h3: ({ children, ...props }: HeadingProps) => {
    const id = generateId(children as string);
    return (
      <h3 id={id} className="my-3 text-xl font-semibold text-title" {...props}>
        {children}
      </h3>
    );
  },
  h4: ({ children, ...props }: HeadingProps) => {
    const id = generateId(children as string);
    return (
      <h4 id={id} className="my-2 text-lg font-semibold text-title" {...props}>
        {children}
      </h4>
    );
  },
  p: (props: ParagraphProps) => <p className="mb-4 leading-relaxed text-foreground" {...props} />,
  ul: (props: ListProps) => <ul className="mb-4 list-disc pl-5 text-foreground" {...props} />,
  ol: (props: ListProps) => <ol className="mb-4 list-decimal pl-5 text-foreground" {...props} />,
  li: (props: ListItemProps) => <li className="mb-2 text-foreground" {...props} />,
  a: ({ href, children, ...props }: AnchorProps) => {
    const className = 'text-mint hover:underline';
    const isExternal = href && !href.startsWith('/');

    return (
      <a
        href={href}
        className={className}
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noopener noreferrer' : undefined}
        {...props}
      >
        {children}
      </a>
    );
  },
  blockquote: (props: BlockquoteProps) => (
    <blockquote
      className="border-l-4 border-strokeMain bg-subBg px-4 py-2 [&>p]:mb-0 [&>p]:text-foreground"
      {...props}
    />
  ),
  code: CodeBlock,
  pre: ({ children, ...props }: ComponentPropsWithoutRef<'pre'>) => (
    <pre className="mb-4 overflow-x-auto p-4 text-foreground" {...props}>
      {children}
    </pre>
  ),
  img: (props: ComponentPropsWithoutRef<'img'>) => (
    <img className="mb-4 rounded-lg shadow-md" {...props} />
  ),
  hr: (props: ComponentPropsWithoutRef<'hr'>) => (
    <hr className="my-8 border-strokeMain" {...props} />
  ),
  table: (props: ComponentPropsWithoutRef<'table'>) => (
    <table className="mb-4 w-full table-fixed border-collapse border-strokeMain" {...props} />
  ),
  th: (props: ComponentPropsWithoutRef<'th'>) => (
    <th className="border border-strokeMain bg-subBg px-4 py-2 text-title" {...props} />
  ),
  td: (props: ComponentPropsWithoutRef<'td'>) => (
    <td className="border border-strokeMain px-4 py-2" {...props} />
  ),
  strong: (props: ComponentPropsWithoutRef<'strong'>) => (
    <strong className="font-bold" {...props} />
  ),
  del: (props: ComponentPropsWithoutRef<'del'>) => <del className="text-greyText" {...props} />,
};

export type MDXProvidedComponents = typeof components;
