import { Injectable } from '@angular/core';
import { Book } from "../shared/model/models";
import { Database } from "../../init-db";
import {NotificationService} from "./notification.service";
import {Location} from "@angular/common";

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(
    private dataBase: Database,
    private notification: NotificationService,
    private _location: Location) { }

  async getBooksList(): Promise<Book[]> {
    return await this.dataBase.getTable('books')
  }

  addNewBook(book: Book) {
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
