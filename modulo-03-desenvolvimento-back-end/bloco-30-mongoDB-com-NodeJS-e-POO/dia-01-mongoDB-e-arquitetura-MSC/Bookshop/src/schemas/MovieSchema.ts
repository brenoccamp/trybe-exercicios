import { Schema } from 'mongoose';

export interface IMovie {
  title: string;
  releaseYear: number;
}

export const MovieSchema = new Schema<IMovie>({
  title: { type: String, required: true },
  releaseYear: { type: Number, required: true },
});