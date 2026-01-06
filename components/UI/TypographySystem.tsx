import { ReactNode } from &apos;react&apos;;

interface TypographyProps {
  variant?: &apos;h1&apos; | &apos;h2&apos; | &apos;h3&apos; | &apos;h4&apos; | &apos;body&apos; | &apos;caption&apos;;
  className?: string;
  children: ReactNode;
  as?: keyof JSX.IntrinsicElements;
}

export const Typography: React.FC<TypographyProps> = ({
  variant = 'body',
  className = '',
  children,
  as: Component = 'p',
}) => {
  const baseStyles = &apos;font-sans text-gray-900 dark:text-white&apos;;
  
  const variantStyles = {
    h1: &apos;text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600&apos;,
    h2: &apos;text-3xl md:text-5xl font-bold&apos;,
    h3: &apos;text-2xl md:text-3xl font-semibold&apos;,
    h4: &apos;text-xl md:text-2xl font-medium&apos;,
    body: &apos;text-base md:text-lg leading-relaxed&apos;,
    caption: &apos;text-sm text-gray-500 dark:text-gray-400&apos;,
  };

  // Use a more specific typing approach
  const props = {
    className: `${baseStyles} ${variantStyles[variant]} ${className}`,
  };

  switch (Component) {
    case &apos;h1&apos;:
      return <h1 {...props}>{children}</h1>;
    case &apos;h2&apos;:
      return <h2 {...props}>{children}</h2>;
    case &apos;h3&apos;:
      return <h3 {...props}>{children}</h3>;
    case &apos;h4&apos;:
      return <h4 {...props}>{children}</h4>;
    case &apos;p&apos;:
      return <p {...props}>{children}</p>;
    case &apos;span&apos;:
      return <span {...props}>{children}</span>;
    default:
      return <p {...props}>{children}</p>;
  }
};

export const TypographySystem: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <div className="space-y-6 max-w-4xl mx-auto&quot;>{children}</div>;
};