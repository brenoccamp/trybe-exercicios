import { Request, Response } from 'express';
import MovieService from '../services/MovieService';

class MovieController {
  constructor(private movieService = new MovieService()) {}

  notFound = 'Movie not found';

  internalError = 'Internal server error';

  public getMovies = async (req: Request, res: Response): Promise<Response> => {
    try {
      const movies = await this.movieService.getMovies();
      return res.status(200).json(movies);
    } catch (error: unknown) {
      console.error(error);
      return res.status(500).send({ message: this.internalError });
    }
  }
}

export default MovieController;