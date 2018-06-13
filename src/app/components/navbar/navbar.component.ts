import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Login, Logout } from '../../@ngxs/actions/app.actions';
import { GetEntries } from '../../@ngxs/actions/entries.actions';
import { AppState } from '../../@ngxs/stores/app.state';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Select(AppState.getUser) user$: Observable<string>;

  entries$: Observable<Store>;

  constructor(private store: Store) { }

  ngOnInit() {
  }

  login() {
    this.store.dispatch(new Login('mr login test')).subscribe(res => {
      this.entries$ = this.store.dispatch(new GetEntries());
    });
  }

  logout() {
    this.store.dispatch(new Logout());
  }

}
