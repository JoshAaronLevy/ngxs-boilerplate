import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-balance-pie-card',
  templateUrl: './balance.pie.card.component.html',
  styleUrls: ['./balance.pie.card.component.css']
})
export class BalancePieCardComponent implements OnInit {

  @Input() data: any;
  constructor() { }

  ngOnInit() {
  }

}
