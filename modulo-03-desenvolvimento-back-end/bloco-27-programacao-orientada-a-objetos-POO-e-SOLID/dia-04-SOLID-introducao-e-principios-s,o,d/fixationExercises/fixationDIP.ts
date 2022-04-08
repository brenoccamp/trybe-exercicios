interface Notificator {
  sendNotification(message: string): void;
}

class ConsoleNotification implements Notificator {
  sendNotification(message: string) {
    console.log(`Here we go again! - ${message}`);
  }
}

class EmailNotification implements Notificator {
  private email: string;
  constructor(email: string) {
    this.email = email;
  }
  sendNotification(message: string) {
    console.log(
      `Here should go the implementation to send notification to the email: ${this.email} - ${message}`
    );
  }
}

class PhoneNotification implements Notificator {
  private phone: number;
  constructor(phone: number) {
    this.phone = phone;
  }
  sendNotification(message: string) {
    console.log(
      `Here should go the implementation to send notification to the phone ${this.phone} - ${message}`
    );
  }
}

export class ReadingTracker {
  private readingGoal: number;
  private booksRead: number;
  notificator: Notificator;
  
  constructor(
    readingGoal: number,
    email: string,
    notification: Notificator,
    ) {
    this.readingGoal = readingGoal;
    this.booksRead = 0;
  }

  trackReadings(readsCount: number) {
    this.booksRead += readsCount;
    if (this.booksRead >= this.readingGoal) {
      this.notificator.sendNotification(
        "Congratulations! You've reached your reading goal!"
      )
      return;
    }
    this.notificator.sendNotification("There are still some books to go!");
  }

  // Aqui viriam mais métodos, que fogem o escopo deste exercício 
}