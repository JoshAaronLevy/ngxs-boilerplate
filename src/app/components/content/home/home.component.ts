import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { BehaviorSubject, Observable } from 'rxjs';
import { SetCurrentMonth, GetEntries } from '../../../@ngxs/actions/entries.actions';
import { IEntry } from '../../../@ngxs/model/data.objects';
import { EntriesState } from '../../../@ngxs/stores/entries.state';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @Select(EntriesState.entries) entries$: Observable<Array<IEntry>>;
  @Select(EntriesState.currentMonth) currentMonth$: Observable<Date>;

  income$: BehaviorSubject<IEntry[]> = new BehaviorSubject([]);
  outgoing$: BehaviorSubject<IEntry[]> = new BehaviorSubject([]);

  constructor(private store: Store, private router: Router) { }

  ngOnInit() {

    this.store.dispatch(new GetEntries);
    this.entries$.subscribe((entries) => {
      this.currentMonth$.pipe(tap(date => {
        this.income$.next(entries.filter(e => {
          return e.value >= 0
            && e.date.getUTCFullYear() === date.getUTCFullYear()
            && e.date.getUTCMonth() === date.getUTCMonth();
        }));
        this.outgoing$.next(entries.filter(e => {
          return e.value < 0
            && e.date.getUTCFullYear() === date.getUTCFullYear()
            && e.date.getUTCMonth() === date.getUTCMonth();
        }));
      }));
    });
  }

  test() {
    // this.store.dispatch(new SetCurrentMonth(new Date(2018, 0, 1)));
    this.router.navigate(['/test']);
  }

}
