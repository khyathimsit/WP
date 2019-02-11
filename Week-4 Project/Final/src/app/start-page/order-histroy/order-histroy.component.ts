import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-histroy',
  templateUrl: './order-histroy.component.html',
  styleUrls: ['./order-histroy.component.css']
})
export class OrderHistroyComponent implements OnInit {

  constructor() { }


  ngOnInit() {
  }
  counter(i: number) {
    return new Array(i);
  }
}
