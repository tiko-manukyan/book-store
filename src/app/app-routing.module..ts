import { Routes } from '@angular/router';
import { BooksListComponent } from "./components/books/books-list/books-list.component";
import { BookItemComponent } from "./components/books/book-item/book-item.component";
import { CreateBookComponent } from "./components/books/create-book/create-book.component";
import { AuthorsListComponent } from "./components/authors/authors-list/authors-list.component";
import { AddAuthorComponent } from "./components/authors/add-author/add-author.component";
import { NotFoundComponent } from "./components/not-found/not-found.component";

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
  { path: '**', component: NotFoundComponent }
];
