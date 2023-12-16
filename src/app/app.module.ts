import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksListComponent } from "./books/books-list/books-list.component";
import { NzTableModule } from "ng-zorro-antd/table";
import { NzButtonModule } from "ng-zorro-antd/button";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NzDropDownModule } from "ng-zorro-antd/dropdown";
import { NzInputModule } from "ng-zorro-antd/input";
import { NzSliderModule } from "ng-zorro-antd/slider";
import { NzSpaceModule } from "ng-zorro-antd/space";
import { HttpClientModule } from "@angular/common/http";
import { CreateBookComponent } from "./books/create-book/create-book.component";
import { NzLayoutModule } from "ng-zorro-antd/layout";
import { IonicStorageModule } from '@ionic/storage-angular';
import { Drivers } from '@ionic/storage';
import { SidebarComponent } from "./shared/components/sidebar/sidebar.component";
import { AuthorsListComponent } from "./authors/authors-list/authors-list.component";
import { RouterLink, RouterLinkActive } from "@angular/router";
import { NzListModule } from "ng-zorro-antd/list";
import { NzSkeletonModule } from "ng-zorro-antd/skeleton";
import { NzDividerModule } from "ng-zorro-antd/divider";
import { BookItemComponent } from "./books/book-item/book-item.component";
import { NzFormModule } from "ng-zorro-antd/form";
import { NzSelectModule } from "ng-zorro-antd/select";
import { NzInputNumberModule } from "ng-zorro-antd/input-number";
import { AddAuthorComponent } from "./authors/add-author/add-author.component";
import {ModalComponent} from "./shared/components/modal/modal.component";
import {NzModalModule} from "ng-zorro-antd/modal";

@NgModule({
  declarations: [
    BooksListComponent,
    CreateBookComponent,
    SidebarComponent,
    AuthorsListComponent,
    BookItemComponent,
    AddAuthorComponent,
    ModalComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    NzTableModule,
    NzButtonModule,
    FormsModule,
    NzDropDownModule,
    NzInputModule,
    NzSliderModule,
    NzSpaceModule,
    NzLayoutModule,
    IonicStorageModule.forRoot({
      driverOrder: [Drivers.SecureStorage, Drivers.IndexedDB, Drivers.LocalStorage]
    }),
    ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'}),
    RouterLinkActive,
    RouterLink,
    NzListModule,
    NzSkeletonModule,
    NzDividerModule,
    NzFormModule,
    ReactiveFormsModule,
    NzSelectModule,
    NzInputNumberModule,
    NzModalModule
  ],
  exports: [
    SidebarComponent
  ]
})
export class AppModule { }
