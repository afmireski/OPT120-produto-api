export interface NewProductInput {
  description: string;
  price: number;
  stock: number;
  created_at: Date;
}

export interface Product {
  id: number;
  description: string;
  price: number;
  stock: number;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date;
}

export interface UpdateProductInput {
  description?: string;
  price?: number;
  stock?: number;
  created_at?: Date;
}
