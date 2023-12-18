import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksListComponent } from "./components/books/books-list/books-list.component";
import { NzTableModule } from "ng-zorro-antd/table";
import { NzButtonModule } from "ng-zorro-antd/button";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NzDropDownModule } from "ng-zorro-antd/dropdown";
import { NzInputModule } from "ng-zorro-antd/input";
import { NzSliderModule } from "ng-zorro-antd/slider";
import { NzSpaceModule } from "ng-zorro-antd/space";
import { HttpClientModule } from "@angular/common/http";
import { CreateBookComponent } from "./components/books/create-book/create-book.component";
import { NzLayoutModule } from "ng-zorro-antd/layout";
import { IonicStorageModule } from '@ionic/storage-angular';
import { Drivers } from '@ionic/storage';
import { SidebarComponent } from "./shared/components/sidebar/sidebar.component";
import { AuthorsListComponent } from "./components/authors/authors-list/authors-list.component";
import { RouterLink, RouterLinkActive } from "@angular/router";
import { NzListModule } from "ng-zorro-antd/list";
import { NzSkeletonModule } from "ng-zorro-antd/skeleton";
import { NzDividerModule } from "ng-zorro-antd/divider";
import { BookItemComponent } from "./components/books/book-item/book-item.component";
import { NzFormModule } from "ng-zorro-antd/form";
import { NzSelectModule } from "ng-zorro-antd/select";
import { NzInputNumberModule } from "ng-zorro-antd/input-number";
import { AddAuthorComponent } from "./components/authors/add-author/add-author.component";
import { ModalComponent } from "./shared/components/modal/modal.component";
import { NzModalModule } from "ng-zorro-antd/modal";
import { NzIconModule } from "ng-zorro-antd/icon";
import { AuthorsService } from "./services/authors.service";
import { Database } from "../database";
import { BooksService } from "./services/books.service";
import { NotFoundComponent } from "./components/not-found/not-found.component";
import { NzResultModule } from "ng-zorro-antd/result";

@NgModule({
  declarations: [
    BooksListComponent,
    CreateBookComponent,
    SidebarComponent,
    AuthorsListComponent,
    BookItemComponent,
    AddAuthorComponent,
    ModalComponent,
    NotFoundComponent
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
    NzModalModule,
    NzIconModule,
    NzResultModule,
  ],
  exports: [
    SidebarComponent
  ],
  providers: [
    AuthorsService,
    BooksService,
    Database
  ]
})
export class AppModule { }
