import express from 'express';
import { createproduct, readproduct, getProductById, Updateproduct,deleteproduct } from '../controllers/productController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/', protect, createproduct);
router.get('/', readproduct);
router.get('/:id', getProductById);
router.put('/:id', protect, Updateproduct);
router.delete('/:id',protect, deleteproduct);

export default router