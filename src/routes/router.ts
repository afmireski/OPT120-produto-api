import { Router } from 'express';
import {
  createNewProductHandler,
  deleteProductHandler,
  findByIdHandler,
  listAllProductsHandler,
  updateProductHandler,
} from '../controllers/products.controller';
import { internalErrorsMiddleware } from '../middlewares/errors.middleware';
import { validatorMiddleware } from '../middlewares/validators.middleware';
import {
  createNewProductSchema,
  deleteProductSchema,
  findByIdSchema,
  updateProductSchema,
} from '../validators/schemas';

export const router = Router();

router.get('/products', listAllProductsHandler, internalErrorsMiddleware);

router.get(
  '/products/:id',
  validatorMiddleware(findByIdSchema, 107),
  findByIdHandler,
  internalErrorsMiddleware,
);

router.post(
  '/products/new',
  validatorMiddleware(createNewProductSchema, 107),
  createNewProductHandler,
  internalErrorsMiddleware,
);

router.delete(
  '/products/:id/remove',
  validatorMiddleware(deleteProductSchema, 107),
  deleteProductHandler,
  internalErrorsMiddleware,
);

router.patch(
  '/products/:id/update',
  validatorMiddleware(updateProductSchema, 107),
  updateProductHandler,
  internalErrorsMiddleware,
);
