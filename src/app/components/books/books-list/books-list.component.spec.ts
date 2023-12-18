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
  const booksStub = [
    {
      "name": "Slaughterhouse-Five",
      "author": " Kurt Vonnegut",
      "description": "Slaughterhouse-Five, or, The Children's Crusade: A Duty-Dance with Death is a 1969 semi-autobiographic science fiction-infused anti-war novel by Kurt Vonnegut.",
      "pages": 190,
      "language": "English",
      "genre": "war novel",
      "id": "0fe7ddc7-212b-49c9-b35f-f616228f981e"
    },
    {
      "name": "Fahrenheit 451",
      "author": " Ray Bradbury",
      "description": "Fahrenheit 451 is a 1953 dystopian novel by American writer Ray Bradbury.[4] It presents an American society where books have been personified and outlawed and  firemen  burn any that are found.",
      "pages": 158,
      "language": "Russian",
      "genre": "dystopian",
      "id": "9cde898b-c030-4fb3-8272-0be1bd184d5c"
    },
    {
      "name": "The Martian Chronicles",
      "author": "Ray Bradbury",
      "description": "The Martian Chronicles is a science fiction fix-up novel, published in 1950, by American writer Ray Bradbury that chronicles the exploration and settlement of Mars",
      "pages": 222,
      "language": "Russian",
      "genre": "dystopian",
      "id": "9cde898b-c030-4fb3-8272-0be1bd184t3x"
    }
  ];

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
    // return stub of books on getBooksList call
    spyOn((component as any).booksService, 'getBooksList').and.callFake(() => booksStub);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should assign book list after fetching data', async () => {
    await component.getBooksList();
    expect(component.listOfDisplayBooks).toEqual(booksStub);
  });

  it('should set correct data for table filters', async () => {
    await component.getBooksList();
    expect(component.languages).toEqual([
      {
        "text": "English",
        "value": "English"
      },
      {
        "text": "Russian",
        "value": "Russian"
      },
    ]);
    expect(component.genres).toEqual([
      {
        "text": "war novel",
        "value": "war novel"
      },
      {
        "text": "dystopian",
        "value": "dystopian"
      }
    ]);
  });
});
