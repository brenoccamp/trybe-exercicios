import { model as createModel } from 'mongoose';
import { MovieSchema, IMovie } from '../schemas/MovieSchema';

class MovieModel {
  constructor(private movieModel = createModel<IMovie>('movies', MovieSchema)) {}

  public async getMovies(): Promise<IMovie[]> {
    const movies = await this.movieModel.find();
    return movies;
  }
}

export default MovieModel;