import { Component } from '@angular/core';
import { FormControl } from "@angular/forms";
import { NzNotificationService } from "ng-zorro-antd/notification";

@Component({
  selector: 'app-add-author',
  templateUrl: './add-author.component.html',
  styleUrl: './add-author.component.scss'
})
export class AddAuthorComponent {
  public authorName = new FormControl<string>('');

  onAddAuthor() {
    if (!this.authorName.value) {
      this.createBasicNotification()
    }
  }

  createBasicNotification(): void {
    this.notification.warning(
      'Warning',
      'Please type author name',
      { nzPlacement: "top", nzDuration: 1500  },

    );
  }

  constructor(private notification: NzNotificationService) {}


}
