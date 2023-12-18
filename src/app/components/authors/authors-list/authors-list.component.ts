import { Component, OnInit } from '@angular/core';
import { Author } from "../../../shared/model/models";
import { AuthorsService } from "../../../services/authors.service";

@Component({
  selector: 'app-authors-list',
  templateUrl: './authors-list.component.html',
  styleUrl: './authors-list.component.scss'
})
export class AuthorsListComponent implements OnInit {
  public editMode = false;
  public listOfAuthors: Author[] = [];

  constructor(private authorService: AuthorsService) {}

  ngOnInit() {
    this.getAuthorList();
  }

  private getAuthorList(): void {
    this.authorService.getAuthorList()
      .then((list) => this.listOfAuthors = list);
  }

  public onDeleteAuthor(id: string): void {
    const editedArr = this.listOfAuthors.filter((author) => author.id !== id);
    this.authorService.deleteAuthor(editedArr)
      .then(() => this.getAuthorList());
  }

  public onEditAuthor(author: Author): void {
    const updateList = this.listOfAuthors
      .map((item) => author.id === item.id ? { name: author.name, id: author.id} : item);
    this.authorService.editAuthor(updateList, author.name)
      .then(() => this.getAuthorList());
  }
}
