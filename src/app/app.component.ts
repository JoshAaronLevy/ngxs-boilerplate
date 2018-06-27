import { Component, OnInit } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  loading = true;

  constructor(private router: Router) {

    router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.loading = true;
        console.dir(this.router.config);
      } else if (event instanceof NavigationEnd) {
        this.loading = false;
      }
    });
  }

  ngOnInit(): void {
    this.router.navigate(['app', { outlets: { content: 'home' } }]);
  }

}
