import { Request, Response } from 'express';

// Example controller demonstrating basic CRUD operations
export const exampleController = {
  // GET all examples
  getAll: async (req: Request, res: Response) => {
    try {
      // In a real app, this would fetch from database
      const examples = [
        { id: 1, name: 'Example 1', description: 'First example' },
        { id: 2, name: 'Example 2', description: 'Second example' },
      ];
      res.json({ success: true, data: examples });
    } catch {
      res.status(500).json({ success: false, error: 'Failed to fetch examples' });
    }
  },

  // GET single example by ID
  getById: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      // In a real app, this would fetch from database
      const example = { id: parseInt(id), name: `Example ${id}`, description: `Example description ${id}` };
      res.json({ success: true, data: example });
    } catch {
      res.status(500).json({ success: false, error: 'Failed to fetch example' });
    }
  },

  // POST create new example
  create: async (req: Request, res: Response) => {
    try {
      const { name, description } = req.body;
      // In a real app, this would save to database
      const newExample = { id: Date.now(), name, description };
      res.status(201).json({ success: true, data: newExample });
    } catch {
      res.status(500).json({ success: false, error: 'Failed to create example' });
    }
  },

  // PUT update example
  update: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const { name, description } = req.body;
      // In a real app, this would update in database
      const updatedExample = { id: parseInt(id), name, description };
      res.json({ success: true, data: updatedExample });
    } catch {
      res.status(500).json({ success: false, error: 'Failed to update example' });
    }
  },

  // DELETE example
  delete: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      // In a real app, this would delete from database
      res.json({ success: true, message: `Example ${id} deleted` });
    } catch {
      res.status(500).json({ success: false, error: 'Failed to delete example' });
    }
  },
};
