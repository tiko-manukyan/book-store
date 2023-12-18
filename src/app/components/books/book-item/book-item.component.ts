import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { BooksService } from "../../../services/books.service";
import { Book } from "../../../shared/model/models";

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrl: './book-item.component.scss'
})
export class BookItemComponent implements OnInit {

  public listOfColumns = [
    { name: 'Author' },
    { name: 'Language' },
    { name: 'Pages' },
    { name: 'Genre' },
    { name: 'Name' },
    { name: 'Description' },
  ];
  public book!: Book;

  constructor(private route: ActivatedRoute,
              private bookService: BooksService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(({ id }) => {
      this.bookService.getBook(id)
        .then((book) => this.book = book);
    });
  }

}
