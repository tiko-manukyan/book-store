import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from "@angular/router";
import { Storage } from "@ionic/storage-angular";
import { NzTableModule } from "ng-zorro-antd/table";
import { NzSpaceModule } from "ng-zorro-antd/space";
import { AppModule } from "../../../app.module";
import { AuthorsService } from "../../../services/authors.service";
import { AuthorsListComponent } from './authors-list.component';

describe('AuthorsListComponent', () => {
  let component: AuthorsListComponent;
  let fixture: ComponentFixture<AuthorsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NzTableModule, NzSpaceModule, AppModule],
      declarations: [AuthorsListComponent],
      providers: [AuthorsService, Storage, {provide: ActivatedRoute, useValue: {}}]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthorsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
