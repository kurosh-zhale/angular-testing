import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-langin-page-routing',
  templateUrl: './langin-page-routing.component.html',
  styleUrls: ['./langin-page-routing.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LanginPageRoutingComponent implements OnInit {
  count = 0;

  constructor() {}

  ngOnInit(): void {}

  onClick() {
    this.count++;
  }
}
