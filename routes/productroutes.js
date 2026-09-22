import express from 'express';
import { createproduct, readproduct, getProductById, Updateproduct,deleteproduct } from '../controllers/productController.js';

const router = express.Router();

router.post('/', createproduct);
router.get('/', readproduct);
router.get('/:id', getProductById);
router.put('/:id', Updateproduct);
router.delete('/:id', deleteproduct);

export default router