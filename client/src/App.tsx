import { ThemeProvider } from './contexts/ThemeContext';
import { ThemeToggle } from './components/ThemeToggle';
import { Button, Card, Input } from './components/common';
import { useState } from 'react';

function App() {
  const [inputValue, setInputValue] = useState('');

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-200">
        <ThemeToggle />
        
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-center mb-8 text-gray-900 dark:text-white">
              Full-Stack Starter Project
            </h1>
            
            <p className="text-center mb-12 text-gray-600 dark:text-gray-400">
              React + Vite + TypeScript + TailwindCSS with Dark Mode
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card title="Welcome Card">
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  This is a complete full-stack starter template with modern technologies.
                </p>
                <Button variant="primary">Primary Button</Button>
              </Card>

              <Card title="Features">
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
                  <li>React with TypeScript</li>
                  <li>Vite for fast development</li>
                  <li>TailwindCSS styling</li>
                  <li>Dark/Light mode toggle</li>
                  <li>Reusable components</li>
                  <li>Custom hooks</li>
                </ul>
              </Card>
            </div>

            <Card title="Example Form">
              <Input
                label="Name"
                placeholder="Enter your name"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
              <div className="flex gap-2">
                <Button variant="primary">Submit</Button>
                <Button variant="secondary">Cancel</Button>
                <Button variant="outline">Reset</Button>
              </div>
            </Card>

            <div className="mt-8 text-center">
              <Card>
                <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
                  Backend Ready
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  The backend server with Express is configured in the <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">server</code> directory.
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-500">
                  Start building your full-stack application!
                </p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
