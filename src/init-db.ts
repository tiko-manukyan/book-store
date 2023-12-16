import { Storage } from "@ionic/storage-angular";
import {Injectable} from "@angular/core";

@Injectable({providedIn: 'root'})
export class Database {
  constructor(private storage: Storage) {
  }

   async init() {
    await this.storage.create();
    await this.storage.set('test', {a: 'val'})
    const a = await this.storage.get('test');
    console.log(a)
  }
}
