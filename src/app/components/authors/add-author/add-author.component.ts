import { Component } from '@angular/core';
import { FormControl } from "@angular/forms";
import * as uuid from 'uuid';
import { Author } from "../../../shared/model/models";
import { AuthorsService } from "../../../services/authors.service";
import { NotificationService } from "../../../services/notification.service";


@Component({
  selector: 'app-add-author',
  templateUrl: './add-author.component.html',
  styleUrl: './add-author.component.scss'
})
export class AddAuthorComponent {
  public authorName = new FormControl<string>('');

  onAddAuthor() {
    if (!this.authorName.value) {
      this.notification.warning('Warning', 'Please type author name')
    } else {
      const id = uuid.v4();
      const newAuthor: Author = {
        name: this.authorName.value,
        id: id
      }
      this.authorService.addNewAuthor(newAuthor)
      this.authorName.reset();
    }
  }



  constructor(
    private authorService: AuthorsService,
    private notification: NotificationService
  ) {}


}
