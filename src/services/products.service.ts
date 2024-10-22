import knex from 'knex';
import { InternalError } from '../errors/internal.error';

export const listAllProducts = () => {
  const query = knex('products').select('*').whereNull('deleted_at');

  return query.catch((e) => {
    throw new InternalError(102, e.message);
  });
};
