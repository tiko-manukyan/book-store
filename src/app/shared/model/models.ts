import { NzTableFilterFn, NzTableFilterList } from "ng-zorro-antd/table";

export interface Book {
  id: string,
  author: string,
  name: string,
  pages: number,
  language: string,
  genre: string,
  description? : string
}

export interface Author {
  id: string
  name: string,
}

export interface TableColumn {
  name: string;
  listOfFilter: NzTableFilterList;
  filterFn: NzTableFilterFn<Book> | null;
  filterMultiple: boolean
}


export interface FilterList {
  text: string,
  value: string
}
