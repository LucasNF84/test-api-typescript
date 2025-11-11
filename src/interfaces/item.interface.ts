import { Schema } from "mongoose";

export interface Item {
  year: number;
  description: string;
  price: number;
  name: string;
  brand: Schema.Types.ObjectId | string; // Referencia a la marca
  category: Schema.Types.ObjectId | string; // Referencia a la categoría
}
