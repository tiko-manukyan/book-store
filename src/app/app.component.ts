import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from "@angular/router";
import { AppModule } from "./app.module";
import { Database } from "../database";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [
    AppModule,
    RouterOutlet,
  ],
  styleUrl: './app.component.scss',
  providers: [Database]
})
export class AppComponent implements OnInit {

  constructor(private database: Database) {
  }

  ngOnInit() {
    this.database.init();
  }
}
