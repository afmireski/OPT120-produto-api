import { Router } from 'express';
import {
  findByIdHandler,
  listAllProductsHandler,
} from '../controllers/products.controller';
import { internalErrorsMiddleware } from '../middlewares/errors.middleware';

export const router = Router();

router.get('/products', listAllProductsHandler, internalErrorsMiddleware);

router.get('/products/:id', findByIdHandler, internalErrorsMiddleware);
