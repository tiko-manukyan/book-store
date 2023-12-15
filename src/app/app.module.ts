import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksListComponent } from "./books-list/books-list.component";
import { NzTableModule } from "ng-zorro-antd/table";
import { NzButtonModule } from "ng-zorro-antd/button";
import { FormsModule } from "@angular/forms";
import { NzDropDownModule } from "ng-zorro-antd/dropdown";
import { NzIconModule } from "ng-zorro-antd/icon";
import { NzInputModule } from "ng-zorro-antd/input";
import { NzSliderModule } from "ng-zorro-antd/slider";
@NgModule({
  declarations: [
    BooksListComponent
  ],
  imports: [
    CommonModule,
    NzTableModule,
    NzButtonModule,
    FormsModule,
    NzDropDownModule,
    NzIconModule,
    NzInputModule,
    NzSliderModule,
  ],
})
export class AppModule { }
