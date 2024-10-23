import { InternalError } from '../errors/internal.error';
import { NewProductInput, UpdateProductInput } from '../types/products.types';
import { KnexService } from './knex.service';

export const listAllProducts = () => {
  const knex = KnexService.getInstance().knex;

  const query = knex('products').select('*').whereNull('deleted_at');

  return query.catch((e) => {
    throw new InternalError(102, e.message);
  });
};

export const findProductById = (id: number) => {
  const knex = KnexService.getInstance().knex;

  const query = knex('products')
    .select('*')
    .where('id', '=', id)
    .whereNull('deleted_at')
    .first();

  return query
    .then((response) => {
      if (!response) {
        throw new InternalError(101);
      }

      return response;
    })
    .catch((e) => {
      if (e instanceof InternalError) {
        throw e;
      }

      throw new InternalError(102, e.message);
    });
};

export const createNewProduct = (input: NewProductInput) => {
  const knex = KnexService.getInstance().knex;

  const query = knex('products').insert(input);

  return query.catch((e) => {
    throw new InternalError(104, e.message);
  });
};

export const deleteProduct = (id: number) => {
  const knex = KnexService.getInstance().knex;

  const query = knex('products')
    .update({ deleted_at: new Date() })
    .where('id', '=', id)
    .whereNull('deleted_at');

  return query.catch((e) => {
    throw new InternalError(105, e.message);
  });
};

export const updateProduct = (id: number, input: UpdateProductInput) => {
  const knex = KnexService.getInstance().knex;

  const query = knex('products')
    .update({ ...input, updated_at: new Date() })
    .where('id', '=', id)
    .whereNull('deleted_at')
    .returning('*');

  return query
    .then(([response]) => response)
    .catch((e) => {
      throw new InternalError(106, e.message);
    });
};
