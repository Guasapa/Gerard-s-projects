import { useTheme } from '../hooks/useTheme';
import { Button } from './common';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      onClick={toggleTheme}
      variant="outline"
      size="sm"
      className="fixed top-4 right-4"
    >
      {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
    </Button>
  );
}
