import { Component } from '@angular/core';
import { FormControl } from "@angular/forms";
import { v4 } from 'uuid'
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

  constructor(
    private authorService: AuthorsService,
    private notification: NotificationService
  ) {}

  onAddAuthor() {
    if (!this.authorName.value) {
      this.notification.warning('Warning', 'Please type author name')
    } else {
      const newAuthor: Author = {
        name: this.authorName.value,
        id: v4()
      }
      this.authorService.addNewAuthor(newAuthor)
      this.authorName.reset();
    }
  }






}
