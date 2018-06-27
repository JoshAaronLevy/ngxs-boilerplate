import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Login, Logout } from '../../@ngxs/actions/app.actions';
import { GetEntries } from '../../@ngxs/actions/entries.actions';
import { AppState } from '../../@ngxs/stores/app.state';
import { EntriesState } from '../../@ngxs/stores/entries.state';
import { IEntry } from '../../@ngxs/model/data.objects';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Select(AppState.getUser) user$: Observable<string>;
  @Select(EntriesState.entries) entries$: Observable<IEntry>;

  constructor(private store: Store, private router: Router) { }

  ngOnInit() {
  }

  login() {
    this.store.dispatch(new Login('mr login test')).subscribe(res => {
      this.store.dispatch(new GetEntries());
      this.router.navigate(['app', { outlets: { content: 'test' } }]);
    });
  }

  logout() {
    this.store.dispatch(new Logout());
  }

}
