import { Router } from "express";
import * as productController from '../controllers/products.controller';
import {verifyToken} from '../middleware'
const router = Router();

router.post('/',verifyToken, productController.createProduct);

router.get('/', productController.getProducts);

router.get('/:productId', productController.getProductById);

router.put('/:productId', verifyToken, productController.updateProductsById);

router.delete('/:productId', verifyToken, productController.deleteProductsById);


export default router;