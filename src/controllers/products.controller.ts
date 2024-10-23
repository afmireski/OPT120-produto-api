import { NextFunction, Request, Response } from 'express';
import {
  createNewProduct,
  deleteProduct,
  findProductById,
  listAllProducts,
  updateProduct,
} from '../services/products.service';

export const listAllProductsHandler = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  return listAllProducts()
    .then((response) => {
      if (response.length === 0) {
        res.status(204).json();
        return;
      }

      res.status(200).json(response);
    })
    .catch((e) => {
      next(e);
    });
};

export const findByIdHandler = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const {
    params: { id },
  } = req;

  return findProductById(Number(id))
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((e) => {
      next(e);
    });
};

export const createNewProductHandler = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { body } = req;

  return createNewProduct(body)
    .then(() => {
      res.status(201).json();
    })
    .catch((e) => {
      next(e);
    });
};

export const deleteProductHandler = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const {
    params: { id },
  } = req;

  return deleteProduct(Number(id))
    .then(() => {
      res.status(204).json();
    })
    .catch((e) => {
      next(e);
    });
};

export const updateProductHandler = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const {
    params: { id },
    body,
  } = req;

  return updateProduct(Number(id), body)
    .then((response) => {
      if (!response) {
        res.status(204).json();
        return;
      }

      res.status(200).json(response);
    })
    .catch((e) => {
      next(e);
    });
};
