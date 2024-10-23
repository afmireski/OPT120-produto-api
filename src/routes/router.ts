import { Router } from 'express';
import {
  createNewProductHandler,
  deleteProductHandler,
  findByIdHandler,
  listAllProductsHandler,
  updateProductHandler,
} from '../controllers/products.controller';
import { internalErrorsMiddleware } from '../middlewares/errors.middleware';

export const router = Router();

router.get('/products', listAllProductsHandler, internalErrorsMiddleware);

router.get('/products/:id', findByIdHandler, internalErrorsMiddleware);

router.post('/products/new', createNewProductHandler, internalErrorsMiddleware);

router.delete(
  '/products/:id/remove',
  deleteProductHandler,
  internalErrorsMiddleware,
);

router.patch(
  '/products/:id/update',
  updateProductHandler,
  internalErrorsMiddleware,
);
