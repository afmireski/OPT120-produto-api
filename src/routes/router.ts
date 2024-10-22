import { Router } from 'express';
import {
  createNewProductHandler,
  findByIdHandler,
  listAllProductsHandler,
} from '../controllers/products.controller';
import { internalErrorsMiddleware } from '../middlewares/errors.middleware';

export const router = Router();

router.get('/products', listAllProductsHandler, internalErrorsMiddleware);

router.get('/products/:id', findByIdHandler, internalErrorsMiddleware);

router.post('/products/new', createNewProductHandler, internalErrorsMiddleware);
