import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from "@angular/router";
import { Storage } from "@ionic/storage-angular";
import { NzFormModule } from "ng-zorro-antd/form";
import { NzSpaceModule } from "ng-zorro-antd/space";
import { AppModule } from "../../../app.module";
import { AuthorsService } from "../../../services/authors.service";
import { AddAuthorComponent } from './add-author.component';

describe('AddAuthorComponent', () => {
  let component: AddAuthorComponent;
  let fixture: ComponentFixture<AddAuthorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NzFormModule, NzSpaceModule, AppModule],
      declarations: [AddAuthorComponent],
      providers: [AuthorsService, Storage, {provide: ActivatedRoute, useValue: {}}]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddAuthorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
