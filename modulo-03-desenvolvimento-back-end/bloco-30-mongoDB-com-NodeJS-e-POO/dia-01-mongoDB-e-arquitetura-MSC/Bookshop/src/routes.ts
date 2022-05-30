  // src/routes.ts

  import { Router } from 'express';

  import BookController from './controllers/BookController';
  import MovieController from './controllers/MovieController';

  const bookController = new BookController();
  const movieController = new MovieController();
  const routes = Router();

  const booksId = '/books/:id';

  routes.get('/books', bookController.getBooks);
  // routes.post('/books', bookController.create);
  // routes.put(booksId, bookController.updateBook);
  // routes.delete(booksId, bookController.deleteBook);
  // routes.get(booksId, bookController.getBook);

  routes.get('/movies', movieController.getMovies);

  export default routes;