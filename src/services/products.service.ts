import { InternalError } from '../errors/internal.error';
import { KnexService } from './knex.service';

export const listAllProducts = () => {
  const knex = KnexService.getInstance().knex;

  const query = knex('products').select('*').whereNull('deleted_at');

  return query.catch((e) => {
    throw new InternalError(102, e.message);
  });
};
