import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  data = [{
    name: 'Einnamen',
    value: 1500
  }, {
    name: 'Ausgaben',
    value: 2750
  }];

  constructor() { }

  ngOnInit() {
  }

}
