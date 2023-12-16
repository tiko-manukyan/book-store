import { Component } from '@angular/core';
import { NzNotificationService } from "ng-zorro-antd/notification";
import { Author } from "../../shared/model/models";



@Component({
  selector: 'app-authors-list',
  templateUrl: './authors-list.component.html',
  styleUrl: './authors-list.component.scss'
})
export class AuthorsListComponent {
  editMode = false;
  listOfAuthors: Author[] = [
    {
      id: 0,
      name: 'John Brown',
    },
    {
      id: 1,
      name: 'Jim Green',
    },
    {
      id: 2,
      name: 'Joe Black',
    }
  ];

  onDeleteAuthor(id: number) {
    this.listOfAuthors = this.listOfAuthors.filter((author) => author.id !== id)
  }

  onEditAuthor(author: any) {
    this.editMode= false;
    this.notification.success(
      'You successfully changed name',
      `Now author name is ${author?.value?.name}`,
      { nzPlacement: "top", nzDuration: 1500  }
    );
  }

  constructor(private notification: NzNotificationService) {
  }
}
