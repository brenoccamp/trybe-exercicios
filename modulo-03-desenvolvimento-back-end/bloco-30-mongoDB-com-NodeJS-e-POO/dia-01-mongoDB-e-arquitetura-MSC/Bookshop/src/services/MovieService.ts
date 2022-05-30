import MovieModel from '../models/MovieModel';
import { IMovie } from '../schemas/MovieSchema';

class MovieService {
  constructor(private movieModel = new MovieModel()) {}

  public async getMovies(): Promise<IMovie[]> {
    const movies = await this.movieModel.getMovies();
    return movies;
  }
}

export default MovieService;