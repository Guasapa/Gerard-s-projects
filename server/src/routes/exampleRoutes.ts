import { Router } from 'express';
import { exampleController } from '../controllers/exampleController';

const router = Router();

// Define routes
router.get('/', exampleController.getAll);
router.get('/:id', exampleController.getById);
router.post('/', exampleController.create);
router.put('/:id', exampleController.update);
router.delete('/:id', exampleController.delete);

export default router;
