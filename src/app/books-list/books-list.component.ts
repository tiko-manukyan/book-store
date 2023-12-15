import { Component } from '@angular/core';
import { NzTableFilterFn, NzTableFilterList } from "ng-zorro-antd/table";

interface DataItem {
  author: string;
  name: string;
  page: number;
  language: string;
  genre: string;
  description? : string;
  id?: number;
}

interface ColumnItem {
  name: string;
  listOfFilter: NzTableFilterList;
  filterFn: NzTableFilterFn<DataItem> | null;
  filterMultiple: boolean;
}

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrl: './books-list.component.scss'
})

export class BooksListComponent {

  listOfBooks: DataItem[] = [
    {
      author: 'John Brown',
      name: 'Random Name 1',
      page: 50,
      language: 'English',
      genre: "urax"
    },
    {
      author: 'Jim Green',
      name: 'Random Name 2',
      page: 100,
      language: 'Russian',
      genre: 'txur'
    },
    {
      author: 'Joe Black',
      name: 'Random Name 3',
      page: 10,
      language: 'China',
      genre: 'urax'
    },
    {
      author: 'Jim Red',
      name: 'Random Name 4',
      page: 800,
      language: 'English',
      genre: 'txur'
    }
  ];

  listOfDisplayBooks = [...this.listOfBooks];

  listOfAuthor = [
    { text: 'John Brown', value: 'John Brown' },
    { text: 'Gogol', value: 'Gogol' },
    { text: 'Cech', value: 'Cech' }
  ];

  listOfColumns: ColumnItem[] | any = [
    {
      name: 'Author',
      listOfFilter: this.listOfAuthor,
      filterFn: (list: string[], item: DataItem) => list.some(author => item.author.indexOf(author) !== -1),
      filterMultiple: true
    },
    {
      name: 'Language',
      listOfFilter: [
        { text: 'English', value: 'English' },
        { text: 'Russian', value: 'Russian' },
        { text: 'China', value: 'China' }
      ],
      filterFn: (list: string[], item: DataItem) => list.some(lang => item.language.indexOf(lang) !== -1),
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
      filterFn: (address: string, item: DataItem) => item.genre.indexOf(address) !== -1
    },
  ];

  pagesCounter: number[] = [20, 100];
  searchValue = '';
  visible = false;
  pagesCountVisible = false;





  reset(): any {
    this.searchValue = '';
    this.search();
  }

  search(): void {
    this.visible = false;
    this.listOfDisplayBooks = this.listOfBooks.filter(
      (item: DataItem) => item.name.indexOf(this.searchValue) !== -1);
  }

  trackByName(_: number, item: ColumnItem): string {
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
      .filter((item) => item.page >= this.pagesCounter[0] && item.page <= this.pagesCounter[1]);
  }

  resetPages() {
    this.pagesCountVisible = false;
    this.listOfDisplayBooks = this.listOfBooks;
  }

}
