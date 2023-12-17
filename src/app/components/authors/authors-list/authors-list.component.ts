import {Component, OnInit} from '@angular/core';
import { Author } from "../../../shared/model/models";
import { AuthorsService } from "../../../services/authors.service";



@Component({
  selector: 'app-authors-list',
  templateUrl: './authors-list.component.html',
  styleUrl: './authors-list.component.scss'
})
export class AuthorsListComponent implements OnInit {
  editMode = false;
  listOfAuthors: Author[] = [];

  constructor(
    private authorService: AuthorsService
  ) {}

  ngOnInit() {
    this.getAuthorList();
  }

  getAuthorList() {
    this.authorService.getAuthorList().then((list) => {
      this.listOfAuthors = list
    })
  }

  onDeleteAuthor(id: string) {
    const editedArr = this.listOfAuthors.filter((author) => author.id !== id);
    this.authorService.deleteAuthor(editedArr)
      .then(() => this.getAuthorList());
  }

  onEditAuthor(author: any) {
    this.listOfAuthors.find((item: Author) => item?.id === author?.id)!.name = author.name
    this.authorService.editAuthor(this.listOfAuthors, author.name)
      .then(() => this.getAuthorList());
  }
}
