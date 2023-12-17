import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { Author, Book, TableColumn } from "../../../shared/model/models";
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
  listOfAuthors: { value: string, text: string }[] = [];
  listOfColumns: TableColumn[] | any = [];
  pagesCounter = [20, 100];
  searchValue = '';
  visible = false;
  pagesCountVisible = false;
  languages: { value: string, text: string }[] = [];

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
    const uniqueLanguages: Set<string> = new Set(books.map((book) => book.language));
    this.languages = Array.from(uniqueLanguages).map((lang) => ({text: lang, value: lang}));
  }

  async getAuthors() {
    const authors: Author[] = await this.authorService.getAuthorList();
    this.listOfAuthors = authors.map((author) => ({value: author.name, text: author.name}));
  }

  setColumns() {
    this.listOfColumns = [
      {
        name: 'Author',
        listOfFilter: this.listOfAuthors,
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
        sortOrder: null,
        sortDirections: ['ascend', 'descend', null],
        filterMultiple: false,
        listOfFilter: [
          { text: 'urax', value: 'urax' },
          { text: 'txur', value: 'txur' }
        ],
        filterFn: (address: string, item: Book) => item.genre.indexOf(address) !== -1
      },
    ];
  }


  reset(): any {
    this.searchValue = '';
    this.search();
  }

  search(): void {
    this.visible = false;
    this.listOfDisplayBooks = this.listOfBooks.filter(
      (item: Book) => item.name.indexOf(this.searchValue) !== -1);
  }

  trackByName(_: number, item: TableColumn): string {
    return item.name;
  }

  onChange(value: number): void {
    console.log(`onChange: ${value}`);
  }

  onAfterChange(value: number[] | number): void {
    console.log(`onAfterChange: ${value}`);
  }

  searchByPage() {
    this.pagesCountVisible = false;
    this.listOfDisplayBooks = this.listOfBooks
      .filter((item) => item.pages >= this.pagesCounter[0] && item.pages <= this.pagesCounter[1]);
  }

  resetPages() {
    this.pagesCountVisible = false;
    this.listOfDisplayBooks = this.listOfBooks;
  }

  onNavigate(data: any) {
    this.router.navigate([data.id], {relativeTo: this.route})
  }

  onCreateBook() {
    this.router.navigate(['create'], {relativeTo: this.route})
  }

}
