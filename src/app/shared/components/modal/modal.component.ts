import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import {Author} from "../../model/models";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent {

  @Input() isVisible = false;
  @Output() submitted: EventEmitter<Author> = new EventEmitter();
  author: FormGroup = new FormGroup({
    name: this.fb.control(''),
    id: this.fb.control(''),
  })

  show(author: any): void {
    this.author.patchValue(author);
    this.isVisible = true;
  }

  handleOk(): void {
    this.isVisible = false;
    this.submitted.emit(this.author.value);
  }

  handleCancel(): void {
    this.isVisible = false;
  }

  constructor(private fb: FormBuilder) {}

}
