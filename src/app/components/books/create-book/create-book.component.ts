import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Database } from "../../../../init-db";
import { AuthorsService } from "../../../services/authors.service";
import {log} from "ng-zorro-antd/core/logger";
import {BooksService} from "../../../services/books.service";

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrl: './create-book.component.scss'
})
export class CreateBookComponent implements OnInit {

  bookForm: FormGroup = this.fb.group({
    name: this.fb.control('', Validators.required),
    author: this.fb.control('', Validators.required),
    description: this.fb.control(''),
    pages: this.fb.control(null, Validators.required),
    language: this.fb.control('', Validators.required),
    genre: this.fb.control('', Validators.required)
  });

  authors: { value: string, text: string }[] = [];

  languages = [
    { text: 'English', value: 'English' },
    { text: 'Russian', value: 'Russian' },
    { text: 'China', value: 'China' }
  ];

  constructor(private fb: FormBuilder,
              private authorService: AuthorsService,
              private bookService: BooksService
  ) {}

  ngOnInit() {
    this.authorService.getAuthorList()
      .then((authors) =>
        this.authors.push(...authors.map((author) => { return {value: author.id, text: author.name} })))
  }

submitForm(): void {
    if (!this.bookForm.valid) {
      Object.values(this.bookForm.controls).forEach(control => {
        console.log(control)
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
    this.bookService.addNewBook(this.bookForm.value)
  }

}
