import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  number = 0;
  @ViewChild('input') input!: ElementRef;

  constructor() {}

  ngAfterViewInit(): void {
    console.log(this.input.nativeElement.value);
  }

  add() {
    this.number++;
  }

  submit() {
    this.number = this.input.nativeElement.value;
  }

  sub() {
    this.number > 0 ? this.number-- : 0;
  }
}
