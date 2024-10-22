import { InternalMessage } from '../internal.error';

const errors: Record<number, InternalMessage> = {
  101: {
    httpCode: 404,
    message: 'Produto não encontrado',
  },
  102: {
    httpCode: 500,
    message: 'Houve uma falha ao listar os produtos',
  },
  103: {
    httpCode: 500,
    message: 'Houve uma falha ao buscar o produto',
  },
  104: {
    httpCode: 500,
    message: 'Houve uma falha ao criar o novo produto',
  },
};

export default errors;
