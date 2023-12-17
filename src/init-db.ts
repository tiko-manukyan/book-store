import { Storage } from "@ionic/storage-angular";
import { Injectable } from "@angular/core";
@Injectable({providedIn: 'root'})

export class Database {
  constructor(private storage: Storage) {
  }

   async init() {
    await this.storage.create();
  }

  async getTable(key: 'books' | 'authors') {
    return await this.storage.get(key) || [];
  }

  async add(key: string, body: {}) {
    const list = await this.storage.get(key) || [];
    const newList = [...list, body]
    await this.storage.set(key, newList);
  }

  async set(key: string, body: {}) {
    await this.storage.set(key, body);
  }

}
