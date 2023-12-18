import { Injectable } from "@angular/core";
import { NzNotificationService } from "ng-zorro-antd/notification";

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private notification: NzNotificationService) { }

  public success(title: string, content: string): void {
    this.notification.success(
      title,
      content,
      { nzPlacement: "top", nzDuration: 1500  },
    );
  }

  public warning(title: string, content: string): void {
    this.notification.warning(
      title,
      content,
      { nzPlacement: "top", nzDuration: 1500  },
    );
  }
}
