import { z } from 'zod';

export const findByIdSchema = z.object({
  params: z.object({
    id: z
      .string({
        message: 'Id inválido',
      })
      .regex(/^\d+$/, {
        message: 'Id deve ser um número válido',
      }),
  }),
});

export const createNewProductSchema = z.object({
  body: z.object({
    description: z
      .string({
        message: 'A descrição deve ser uma string',
      })
      .min(1, {
        message: 'A descrição deve conter entre 1 e 255 caracteres',
      })
      .max(255, {
        message: 'A descrição deve conter entre 1 e 255 caracteres',
      }),
    price: z.number().positive({
      message: 'Preço deve ser um número positivo',
    }),
    stock: z.number().positive({
      message: 'Estoque deve ser um número positivo',
    }),
    created_at: z.string().datetime({
      message: 'Data de criação inválida',
      local: true,
    }),
  }),
});

export const updateProductSchema = z.object({
  params: z.object({
    id: z
      .string({
        message: 'Id inválido',
      })
      .regex(/^\d+$/, {
        message: 'Id deve ser um número válido',
      }),
  }),
  body: z.object({
    description: z
      .string({
        message: 'A descrição deve ser uma string',
      })
      .min(1, {
        message: 'A descrição deve conter entre 1 e 255 caracteres',
      })
      .max(255, {
        message: 'A descrição deve conter entre 1 e 255 caracteres',
      })
      .optional(),
    price: z
      .number({
        message: 'Preço deve ser um número positivo',
      })
      .positive()
      .optional(),
    stock: z
      .number({
        message: 'Estoque deve ser um número positivo',
      })
      .positive()
      .optional(),
    created_at: z
      .string()
      .datetime({
        message: 'Data de criação inválida',
        local: true,
      })
      .optional(),
  }),
});

export const deleteProductSchema = z.object({
  params: z.object({
    id: z
      .string({
        message: 'Id inválido',
      })
      .regex(/^\d+$/, {
        message: 'Id deve ser um número válido',
      }),
  }),
});
