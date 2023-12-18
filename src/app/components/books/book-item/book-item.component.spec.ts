import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from "@angular/router";
import { Storage } from "@ionic/storage-angular";
import { NzTableModule } from "ng-zorro-antd/table";
import { BooksService } from "../../../services/books.service";
import { BookItemComponent } from './book-item.component';

describe('BookItemComponent', () => {
  let component: BookItemComponent;
  let fixture: ComponentFixture<BookItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NzTableModule],
      declarations: [BookItemComponent],
      providers: [{provide: ActivatedRoute, useValue: {params: {subscribe: () => Promise}}}, BooksService, Storage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
