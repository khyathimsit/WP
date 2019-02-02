import { Component, OnInit } from '@angular/core';
import {DataService} from  '../data.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  product:any;
  constructor(private data:DataService) { }
  ngOnInit() {
  }
  display() {
    this.product = this.data.show();
    console.log(this.product[0]);
  }
  
  delete(obj : any) {
    this.data.delete(obj);
  }
}
