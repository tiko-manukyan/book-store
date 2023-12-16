import {NzTableFilterFn, NzTableFilterList} from "ng-zorro-antd/table";

export interface Book {
  author: string,
  name: string,
  page: number,
  language: string,
  genre: string,
  id: number,
  description? : string
}

export interface TableColumn {
  name: string;
  listOfFilter: NzTableFilterList;
  filterFn: NzTableFilterFn<Book> | null;
  filterMultiple: boolean
}

export interface Author {
  name: string,
  id: number
}
