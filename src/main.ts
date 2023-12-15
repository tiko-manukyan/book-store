import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import {  provideAnimations } from "@angular/platform-browser/animations";
import { provideRouter } from "@angular/router";
import { routes } from "./app/app-routing.module.";
import en from '@angular/common/locales/en';
import { registerLocaleData } from "@angular/common";
registerLocaleData(en);
import { en_US, NZ_I18N } from 'ng-zorro-antd/i18n';

bootstrapApplication(AppComponent, { providers: [provideAnimations(), provideRouter(routes), { provide: NZ_I18N, useValue: en_US } ]})
  .catch((err) => console.error(err));
