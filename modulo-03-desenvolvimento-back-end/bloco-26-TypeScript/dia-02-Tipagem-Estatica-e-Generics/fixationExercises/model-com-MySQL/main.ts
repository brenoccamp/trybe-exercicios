import * as readline from 'readline-sync';
import BookModel, { Book } from './models/Book';
import connection from './models/connection';

const main = async () => {
  const bookModel = new BookModel(connection);

  const books = await bookModel.getAll();
  console.log(books);

  const title = readline.question('Digite o título do livro: \n');
  const price = readline.questionFloat('Digite o preço do livro: \n');
  const author = readline.question('Digite o autor do livro: \n');
  const isbn = readline.question('Digite o isbn do livro: \n');

  const newBook: Book = { title, price, author, isbn };

  const createdBook = await bookModel.create(newBook);
  console.log(createdBook);
}

main()