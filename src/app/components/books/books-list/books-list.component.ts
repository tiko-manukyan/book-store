import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { Author, Book, Filter, TableColumn } from "../../../shared/model/models";
import { AuthorsService } from "../../../services/authors.service";
import { BooksService } from "../../../services/books.service";


@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrl: './books-list.component.scss'
})

export class BooksListComponent implements OnInit {
  listOfBooks: Book[] = [];
  listOfDisplayBooks: Book[] = [];
  listOfColumns: TableColumn[] = [];
  pagesCounter = [20, 100];
  searchValue = '';
  visible = false;
  pagesCountVisible = false;
  authors: Filter[] = [];
  languages: Filter[] = [];
  genres: Filter[] = [];

  constructor(private router: Router,
              private route: ActivatedRoute,
              private authorService: AuthorsService,
              private booksService: BooksService
  ) {}

  ngOnInit() {
    this.getTableData();
  }

  async getTableData(): Promise<void> {
    await this.getAuthors();
    await this.getBooksList();
    this.setColumns();
  }

  async getBooksList(): Promise<void> {
    const books: Book[] = await this.booksService.getBooksList();
    this.listOfDisplayBooks = books;
    this.listOfBooks = books;
    this.setColumnFilters(books);
  }

  async getAuthors() {
    const authors: Author[] = await this.authorService.getAuthorList();
    this.authors = authors.map((author) => ({value: author.name, text: author.name}));
  }

  setColumns() {
    this.listOfColumns = [
      {
        name: 'Author',
        listOfFilter: this.authors,
        filterFn: (list: string[], item: Book) => list.some(name => item.author.indexOf(name) !== -1),
        filterMultiple: true
      },
      {
        name: 'Language',
        listOfFilter: this.languages,
        filterFn: (list: string[], item: Book) => list.some(lang => item.language.indexOf(lang) !== -1),
        filterMultiple: true,
      },
      {
        name: 'Genre',
        filterMultiple: false,
        listOfFilter: this.genres,
        filterFn: (genre: string, item: Book) => item.genre.toLowerCase().indexOf(genre) !== -1
      },
    ];
  }

  setColumnFilters(books: Book[]) {
    const uniqueLanguages: Set<string> = new Set(books.map((book) => book.language));
    this.languages = Array.from(uniqueLanguages).map((lang) => ({text: lang, value: lang}));
    const uniqueGenre: Set<string> = new Set(books.map((book) => book.genre.toLowerCase()));
    this.genres = Array.from(uniqueGenre).map((genre) => ({text: genre, value: genre}));
  }


  reset(): any {
    this.searchValue = '';
    this.search();
  }

  search(): void {
    this.visible = false;
    this.listOfDisplayBooks = this.listOfBooks.filter(
      (item: Book) => item.name.toLowerCase().indexOf(this.searchValue.toLowerCase()) !== -1 || item.description!.toLowerCase().indexOf(this.searchValue.toLowerCase()) !== -1);
  }

  trackByName(_: number, item: TableColumn): string {
    return item.name;
  }

  searchByPages() {
    this.pagesCountVisible = false;
    this.listOfDisplayBooks = this.listOfBooks
      .filter((item) => item.pages >= this.pagesCounter[0] && item.pages <= this.pagesCounter[1]);
  }

  resetPages() {
    this.pagesCountVisible = false;
    this.listOfDisplayBooks = this.listOfBooks;
  }

  onNavigate(book: Book) {
    this.router.navigate([book.id], {relativeTo: this.route})
  }

  onCreateBook() {
    this.router.navigate(['create'], {relativeTo: this.route})
  }

}
