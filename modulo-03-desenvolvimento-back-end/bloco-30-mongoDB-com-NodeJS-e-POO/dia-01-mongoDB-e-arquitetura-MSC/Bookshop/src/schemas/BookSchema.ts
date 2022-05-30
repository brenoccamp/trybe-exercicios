// /src/schemas/BookSchema.ts

import { Schema } from 'mongoose';

export interface IBook {
  title: string;
  author: string;
  publishedYear: number;
  weight?: string;
}

/*
  Uma vez que implementamos a interface Book,
  colocamos ela entre <>, para definir o tipo
  do Schema.
*/

export const BookSchema = new Schema<IBook>({
  title: { type: String, required: true },
  author: { type: String, required: true },
  publishedYear: { type: Number, required: false },
  weight: { type: String, required: false }
});