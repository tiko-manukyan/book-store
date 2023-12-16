import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Author} from "../../shared/model/models";

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrl: './create-book.component.scss'
})
export class CreateBookComponent {

  bookForm: FormGroup = this.fb.group({
    name: this.fb.control('', Validators.required),
    author: this.fb.control('', Validators.required),
    description: this.fb.control(''),
    pages: this.fb.control(null, Validators.required),
    language: this.fb.control('', Validators.required),
    genre: this.fb.control('', Validators.required)
  });

  authors: Author[] = [
    { name: 'Tikov', id: 1 },
    { name: 'Varov', id:2 }
  ];

  languages = [
    { text: 'English', value: 'English' },
    { text: 'Russian', value: 'Russian' },
    { text: 'China', value: 'China' }
  ];

  submitForm(): void {
    if (!this.bookForm.valid) {
      Object.values(this.bookForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }
  constructor(private fb: FormBuilder) {}

}
