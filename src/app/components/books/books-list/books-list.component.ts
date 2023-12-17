import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { Book, TableColumn } from "../../../shared/model/models";
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

  constructor(private router: Router,
              private route: ActivatedRoute,
              private authorService: AuthorsService,
              private booksService: BooksService
  ) {}

  ngOnInit() {
    this.getAuthors();
    this.getBooksList()
  }

  getBooksList() {
    this.booksService.getBooksList()
      .then((books) => {
        this.listOfDisplayBooks = books;
        this.listOfBooks = books;
      })
  }

  getAuthors() {
    this.authorService.getAuthorList()
      .then((authors) => {
        this.listOfAuthors = authors.map((author) => ({value: author.name, text: author.name}));
        this.setFilters();
      });
  }

  setFilters() {
    this.listOfColumns = [
      {
        name: 'Author',
        listOfFilter: this.listOfAuthors,
        filterFn: (list: string[], item: Book) => list.some(name => item.author.indexOf(name) !== -1),
        filterMultiple: true
      },
      {
        name: 'Language',
        listOfFilter: [
          { text: 'English', value: 'English' },
          { text: 'Russian', value: 'Russian' },
          { text: 'China', value: 'China' }
        ],
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
