import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BooksListComponent } from './books-list.component';
import { ActivatedRoute } from "@angular/router";
import { Storage } from "@ionic/storage-angular";
import { NzTableModule } from "ng-zorro-antd/table";
import { NzSpaceModule } from "ng-zorro-antd/space";
import { NzDropDownModule } from "ng-zorro-antd/dropdown";
import { NzSliderModule } from "ng-zorro-antd/slider";
import { AppModule } from "../../../app.module";
import { AuthorsService } from "../../../services/authors.service";

describe('BooksListComponent', () => {
  let component: BooksListComponent;
  let fixture: ComponentFixture<BooksListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NzTableModule, NzSpaceModule, NzDropDownModule, NzSliderModule, AppModule],
      declarations: [BooksListComponent],
      providers: [{provide: ActivatedRoute, useValue: {}}, AuthorsService, Storage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BooksListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
