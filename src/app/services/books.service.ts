import { Injectable } from '@angular/core';
import { Book } from "../shared/model/models";
import { Database } from "../../database";
import { NotificationService } from "./notification.service";
import { Location } from "@angular/common";

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(
    private dataBase: Database,
    private notification: NotificationService,
    private _location: Location) { }

  public async getBooksList(): Promise<Book[]> {
    return await this.dataBase.getTable('books');
  }

  public getBook(id: string): Promise<Book> {
    return new Promise(async (resolve, reject) => {
      const books = await this.dataBase.getTable('books');
      const book = books.find((book: Book) => book.id === id);
      if (book) {
        resolve(book);
      } else {
        this.notification.warning('Warning', 'Book not found');
        reject();
      }
    })
  }

  public addNewBook(book: Book): void {
    this.dataBase.add('books', book)
      .finally(() => {
        this.notification.success('Success', 'Book added');
        this._location.back()
      })
      .catch(() =>
        this.notification.warning('Warning', 'Something went wrong')
      );
  }
}
