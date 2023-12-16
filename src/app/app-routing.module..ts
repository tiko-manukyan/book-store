import { Routes } from '@angular/router';
import { BooksListComponent } from "./books/books-list/books-list.component";
import { BookItemComponent } from "./books/book-item/book-item.component";
import { CreateBookComponent } from "./books/create-book/create-book.component";
import {AuthorsListComponent} from "./authors/authors-list/authors-list.component";
import {AddAuthorComponent} from "./authors/add-author/add-author.component";

export const routes: Routes = [
  { path: '',
    pathMatch: 'full',
    redirectTo: 'books'
  },
  { path: 'books', component: BooksListComponent },
  { path: 'books/create', component: CreateBookComponent },
  { path: 'books/:id', component: BookItemComponent },
  { path: 'authors', component: AuthorsListComponent },
  { path: 'authors/create', component: AddAuthorComponent },
];
