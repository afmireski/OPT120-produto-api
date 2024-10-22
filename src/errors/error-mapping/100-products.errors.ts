import { InternalMessage } from '../internal.error';

const errors: Record<number, InternalMessage> = {
  102: {
    httpCode: 500,
    message: 'Houve uma falha ao listar os produtos',
  },
};

export default errors;
