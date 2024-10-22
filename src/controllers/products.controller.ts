import { NextFunction, Request, Response } from 'express';
import { findProductById, listAllProducts } from '../services/products.service';

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
