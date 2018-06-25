import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { BehaviorSubject, Observable } from 'rxjs';
import { SetCurrentMonth } from '../../../@ngxs/actions/entries.actions';
import { IEntry } from '../../../@ngxs/model/data.objects';
import { EntriesState } from '../../../@ngxs/stores/entries.state';

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

  currentDate: Date = new Date();

  constructor(private store: Store) { }

  ngOnInit() {

    this.currentMonth$.subscribe(cm => {
      this.currentDate = cm;
    });

    this.entries$.subscribe((entries) => {
      this.income$.next(entries.filter(e => {
        return e.value >= 0
          && e.date.getUTCFullYear() === this.currentDate.getUTCFullYear()
          && e.date.getUTCMonth() === this.currentDate.getUTCMonth();
      }));
      this.outgoing$.next(entries.filter(e => {
        return e.value < 0
          && e.date.getUTCFullYear() === this.currentDate.getUTCFullYear()
          && e.date.getUTCMonth() === this.currentDate.getUTCMonth();
      }));
    });
  }

  test() {
    this.store.dispatch(new SetCurrentMonth(new Date(2018, 0, 1)));
  }

}
