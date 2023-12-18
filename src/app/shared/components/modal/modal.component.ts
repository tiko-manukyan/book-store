import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { Author } from "../../model/models";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent {

  @Input() isVisible = false;
  @Output() submitted: EventEmitter<Author> = new EventEmitter();
  public author: FormGroup = new FormGroup({
    name: this.fb.control(''),
    id: this.fb.control(''),
  });

  constructor(private fb: FormBuilder) {}

  public show(author: Author): void {
    this.author.patchValue(author);
    this.isVisible = true;
  }

  public handleOk(): void {
    this.isVisible = false;
    this.submitted.emit(this.author.value);
  }

  public handleCancel(): void {
    this.isVisible = false;
  }

}
