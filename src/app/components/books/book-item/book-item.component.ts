import {Component, Input, OnInit} from '@angular/core';
import {Book} from "../../../shared/model/models";
import {ActivatedRoute, Route, Router} from "@angular/router";
import {BooksService} from "../../../services/books.service";

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrl: './book-item.component.scss'
})
export class BookItemComponent implements OnInit {

  listOfColumns = [
    { name: 'Author' },
    { name: 'Language' },
    { name: 'Page' },
    { name: 'Genre' },
    { name: 'Name' },
    { name: 'Description' },
  ];

  book! : any;

  constructor(private route: ActivatedRoute,
              private bookService: BooksService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(({ id }) => {
      this.bookService.getBooksList().then((books) => {
        console.log('id', id)
        console.log('books', books)
        // // @ts-ignore
        // this.book = books.find(it => it.id == id)
        // console.log(this.book)

      })
    })
  }


}
