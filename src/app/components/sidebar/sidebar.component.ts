import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnDestroy, OnInit {

  @ViewChild('snav') snav: MatSidenav;

  matcher: MediaQueryList;
  isMobile = false;
  fillerNav = Array.from({ length: 50 }, (_, i) => `Nav Item ${i + 1}`);

  constructor(private breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {
    this.breakpointObserver
      .observe(['(max-width: 600px)'])
      .subscribe((state: BreakpointState) => {
        this.isMobile = state.matches;
        if (!this.isMobile) {
          this.snav.open();
        } else {
          this.snav.close();
        }
      });
    //   this.matcher = this.media.matchMedia('(max-width: 600px)');
    //   this.matcher.addListener(this.myListener);
    //   this.isMobile = this.matcher.matches;
  }



  toggle(): void {
    this.snav.toggle();
  }

  ngOnDestroy(): void {
  }

}
