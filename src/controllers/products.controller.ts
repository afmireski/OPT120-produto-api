import { NextFunction, Request, Response } from 'express';
import { listAllProducts } from '../services/products.service';

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
