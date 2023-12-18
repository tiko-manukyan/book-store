import { Injectable } from '@angular/core';
import { Database } from "../../init-db";
import { Author } from "../shared/model/models";
import { NotificationService } from "./notification.service";
import { Location } from '@angular/common'

@Injectable()
export class AuthorsService {

  constructor(
    private dataBase: Database,
    private notification: NotificationService,
    private _location: Location
  ) {}

  public async getAuthorList(): Promise<Author[]> {
    return await  this.dataBase.getTable('authors');
  }

  public addNewAuthor(author: Author): void {
    this.dataBase.add('authors', author)
      .finally(() => {
        this.notification.success('Success', `Author with name ${author.name} added`);
        this._location.back()
      })
      .catch(() =>
        this.notification.warning('Warning', 'Something went wrong')
      );
  }

  public async editAuthor(authors: Author[], name: string): Promise<void> {
    await this.dataBase.set('authors', authors)
      .finally(() =>
        this.notification.success('Name changed',`Now author name is ${name}`))
      .catch(() =>
        this.notification.warning( 'Warning', 'Something went wrong')
      );
  }

  public async deleteAuthor(authors: Author[]): Promise<void> {
    await this.dataBase.set('authors', authors)
      .finally(() =>
        this.notification.success('Success', 'Author was successfully deleted'))
      .catch(() =>
        this.notification.warning( 'Warning', 'Something went wrong')
      );
  }

}
