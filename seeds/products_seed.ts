import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("products").del();

    // Inserts seed entries
    await knex("products").insert([
        { description: "Maça", price: 250, stock: 10 },
        { description: "Banana", price: 300, stock: 15 },
        { description: "Café", price: 1000, stock: 5 },
        { description: "Laranja", price: 400, stock: 0 },
        { description: "Tomate", price: 800, stock: 30 },
    ]);
};
