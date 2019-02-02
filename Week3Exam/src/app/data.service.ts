import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  products = [{
    "title": "Samsung Galaxy J6 Smart Phone 64 GB, 4 GB RAM, Blue",
    "description": "Super AMOLED Display with 1480 x 720 (HD+) Resolution",
    "image": "1.jpeg",
    "quantity":"10"
  },
  {
    "title": "Mi A2 4GB + 64GB | 6GB + 128GB",
    "description": "15.2cm (5.99) large display",
    "image": "2.jpeg",
    "quantity":"20"
  },
  {
    "title": "Apple iphone 32GB",
    "description": "11.4 cm(4.7)display",
    "image": "3.jpeg",
    "quantity":"30"
  },
  {
    "title": "red mi note 6 pro",
    "description": "15.9 cm (6.26 inch) FHD+ Display with Resolution ",
    "image": "4.jpeg",
    "quantity":"40"
  }
];
count:number;
  constructor() { }

  show() {
    console.log(this.products);
    return this.products;
  }

  delete(i:any) {
    this.count = -1;
    console.log(this.count);
    for (var j=0; j<this.products.length; j++) {
      this.count = this.count + 1;
      console.log(this.count);
      if (i === this.products[j]) {
        this.products.splice(this.count , 1);
      }
    }
  }
}
