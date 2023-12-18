import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ActivatedRoute } from "@angular/router";
import { Storage } from "@ionic/storage-angular";
import { NzFormModule } from "ng-zorro-antd/form";
import { NzSelectModule } from "ng-zorro-antd/select";
import { NzInputNumberModule } from "ng-zorro-antd/input-number";
import { AppModule } from "../../../app.module";
import { AuthorsService } from "../../../services/authors.service";
import { CreateBookComponent } from './create-book.component';

describe('CreateBookComponent', () => {
  let component: CreateBookComponent;
  let fixture: ComponentFixture<CreateBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NzFormModule, NzSelectModule, NzInputNumberModule, AppModule, BrowserAnimationsModule],
      declarations: [CreateBookComponent],
      providers: [AuthorsService, Storage, {provide: ActivatedRoute, useValue: {}}]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
