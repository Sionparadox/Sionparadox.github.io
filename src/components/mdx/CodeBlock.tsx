import { ComponentPropsWithoutRef } from 'react';
import { cn } from '@/utils/cn';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import jsx from 'react-syntax-highlighter/dist/esm/languages/hljs/xml';
import typescript from 'react-syntax-highlighter/dist/esm/languages/hljs/typescript';
import javascript from 'react-syntax-highlighter/dist/esm/languages/hljs/javascript';
import css from 'react-syntax-highlighter/dist/esm/languages/hljs/css';
import bash from 'react-syntax-highlighter/dist/esm/languages/hljs/bash';
import CopyButton from '../molecules/CopyButton';
import { useTheme } from '@/hooks/useTheme';
import { a11yDark, a11yLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';

SyntaxHighlighter.registerLanguage('jsx', jsx);
SyntaxHighlighter.registerLanguage('typescript', typescript);
SyntaxHighlighter.registerLanguage('javascript', javascript);
SyntaxHighlighter.registerLanguage('css', css);
SyntaxHighlighter.registerLanguage('bash', bash);

interface CodeBlockProps extends ComponentPropsWithoutRef<'code'> {
  children: string;
}

export const CodeBlock = ({ children, className, ...props }: CodeBlockProps) => {
  const { theme } = useTheme();
  const match = /language-(\w+)/.exec(className || '');
  if (!match) {
    return (
      <code
        className={cn('rounded bg-subBg px-1.5 py-0.5 text-blue-600 dark:text-blue-400', className)}
        {...props}
      >
        {children}
      </code>
    );
  }

  const language = match[1];
  const code = String(children).replace(/\n$/, '');

  return (
    <div className="group relative mb-4">
      <div className="absolute right-2 top-2 opacity-0 transition-opacity group-hover:opacity-100">
        <CopyButton size="sm" type="text" text={code} />
      </div>
      <div className="overflow-x-auto rounded-lg border border-strokeMain">
        {/* @ts-expect-error SyntaxHighlighter not used in JSX at React 18 */}
        <SyntaxHighlighter
          lineProps={{ style: { wordBreak: 'break-all', whiteSpace: 'pre-wrap' } }}
          wrapLines={true}
          language={language}
          style={theme === 'dark' ? a11yDark : a11yLight}
          customStyle={{
            margin: 0,
            borderRadius: '0.5rem',
            fontSize: '0.875rem',
          }}
        >
          {code}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};
