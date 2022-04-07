// ReadingTracker.ts
// Observe o código abaixo e faça as alterações necessárias
// para que ele passe a respeitar o Princípio da Responsabilidade Única (SRP).

type Book = {
  book: string;
  author: string;
  genre: string;
}

class ReadingTracker {
  private readingGoal: number;

  private booksRead: number;

  private wishlist: Book[];

  constructor(readingGoal: number) {
    this.readingGoal = readingGoal;
    this.booksRead = 0;
    this.wishlist = [];
  }

  trackReadings(readsCount: number) {
    this.booksRead += readsCount;
    if (this.booksRead >= this.readingGoal) {
      ReadingTracker.progressNotification(
        'Congratulations! You\'ve reached your reading goal!',
      );
      return;
    }
    ReadingTracker.progressNotification(
      'There are still some books to go!',
    );
  }

  addToWishList(book: Book): void {
    this.wishlist.push(book);
  }

  showWishlist(): void {
    console.log(this.wishlist);
  }

  static progressNotification(message: string): void {
    console.log(message);
  }
}

const readTracker = new ReadingTracker(20);
readTracker.addToWishList({ book: 'The Road', author: 'Cormac McCarthy', genre: 'Dystopia' });
readTracker.showWishlist();
readTracker.trackReadings(12);
readTracker.trackReadings(9);