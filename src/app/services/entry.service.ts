import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { IEntry } from '../@ngxs/model/data.objects';

@Injectable()
export class EntryService {

  entries: IEntry[];

  constructor(private http: HttpClient) {

  }

  loadEntries(forceReload?: boolean) {
    if (forceReload || !this.entries) {
      return this.http.get<IEntry[]>('http://localhost:3000/api/entries').pipe(tap(data => this.entries = data));
    } else {
      return of(this.entries);
    }
  }

}

