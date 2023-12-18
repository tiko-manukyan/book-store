import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthorsService } from "../../../services/authors.service";
import { BooksService } from "../../../services/books.service";
import { v4 } from 'uuid'
import { FilterList } from "../../../shared/model/models";


@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrl: './create-book.component.scss'
})
export class CreateBookComponent implements OnInit {

  public bookForm: FormGroup = this.fb.group({
    name: this.fb.control('', Validators.required),
    author: this.fb.control('', Validators.required),
    description: this.fb.control(''),
    pages: this.fb.control(null, Validators.required),
    language: this.fb.control('', Validators.required),
    genre: this.fb.control('', Validators.required),
    id: this.fb.control('')
  });

  public authors: FilterList[] = [];
  public languages: FilterList[] = [
    { text: 'English', value: 'English' },
    { text: 'Russian', value: 'Russian' },
    { text: 'Chinese', value: 'Chinese' }
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

  public submitForm(): void {
    if (!this.bookForm.valid) {
      Object.values(this.bookForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
      return
    }
    this.bookForm.patchValue({id: v4()})
    this.bookService.addNewBook(this.bookForm.value);
  }

}
