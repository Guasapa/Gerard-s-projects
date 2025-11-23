import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Card from './components/common/Card';
import Button from './components/common/Button';
import Input from './components/common/Input';
import apiService from './services/api';
import type { Example } from './types';

function App() {
  const [examples, setExamples] = useState<Example[]>([]);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchExamples = async () => {
      setLoading(true);
      const response = await apiService.get<Example[]>('/api/examples');
      if (response.success && response.data) {
        setExamples(response.data);
      }
      setLoading(false);
    };
    
    fetchExamples();
  }, []);

  const handleSubmit = async () => {
    if (!name || !description) return;
    
    setLoading(true);
    const response = await apiService.post<Example>('/api/examples', {
      name,
      description,
    });
    
    if (response.success) {
      setName('');
      setDescription('');
      const updatedResponse = await apiService.get<Example[]>('/api/examples');
      if (updatedResponse.success && updatedResponse.data) {
        setExamples(updatedResponse.data);
      }
    }
    setLoading(false);
  };

  return (
    <div className="app">
      <Header />
      
      <main className="main-content">
        <div className="container">
          <section className="hero">
            <h1 className="hero-title">Welcome to Full-Stack Starter</h1>
            <p className="hero-description">
              A modern full-stack application built with React, TypeScript, Node.js, and Express
            </p>
          </section>

          <section className="features">
            <Card title="⚛️ React + TypeScript">
              Modern frontend with React 18, TypeScript, and Vite for blazing fast development
            </Card>
            <Card title="🚀 Node.js + Express">
              Robust backend with Express, TypeScript, and RESTful API architecture
            </Card>
            <Card title="🗄️ Database Ready">
              Pre-configured templates for MongoDB and PostgreSQL with type-safe models
            </Card>
            <Card title="🔐 Auth Structure">
              Authentication folder structure ready for JWT implementation
            </Card>
            <Card title="✨ Reusable Components">
              Pre-built UI components with responsive design and dark mode support
            </Card>
            <Card title="🛠️ Developer Tools">
              ESLint, Prettier, and hot-reload configured for optimal developer experience
            </Card>
          </section>

          <section className="demo">
            <Card title="🎯 API Demo">
              <div className="demo-content">
                <Input
                  label="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter a name"
                />
                <Input
                  label="Description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Enter a description"
                />
                <Button onClick={handleSubmit} disabled={loading || !name || !description}>
                  Add Example
                </Button>

                <div className="examples-list">
                  <h4>Examples from API:</h4>
                  {loading ? (
                    <p>Loading...</p>
                  ) : (
                    examples.map((example) => (
                      <div key={example.id} className="example-item">
                        <strong>{example.name}</strong>: {example.description}
                      </div>
                    ))
                  )}
                </div>
              </div>
            </Card>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
