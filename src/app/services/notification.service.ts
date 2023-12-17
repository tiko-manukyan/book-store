import { Injectable } from '@angular/core';
import {NzNotificationService} from "ng-zorro-antd/notification";

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private notification: NzNotificationService) { }

  success(title: string, content: string) {
    this.notification.success(
      title,
      content,
      { nzPlacement: "top", nzDuration: 1500  },
    );
  }

  warning(title: string, content: string) {
    this.notification.warning(
      title,
      content,
      { nzPlacement: "top", nzDuration: 1500  },
    );
  }
}
