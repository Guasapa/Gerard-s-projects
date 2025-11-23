import { type ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  title?: string;
}

export function Card({ children, className = '', title }: CardProps) {
  return (
    <div className={`bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 ${className}`}>
      {title && (
        <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
          {title}
        </h3>
      )}
      {children}
    </div>
  );
}
