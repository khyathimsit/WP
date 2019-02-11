import { Component, OnInit } from '@angular/core';
import {UserdataService} from '../../userdata.service';
import { PostsService } from 'src/app/posts.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  arr:any;
  total : number = 0;
  loginuser: any;
  plusstatus=false;
  result : Number;
  subtotal = 1;
  quan = 0;
  cartlength = true;

  constructor(private post:PostsService, private data: UserdataService) { }
  // val:any=1;
  ngOnInit() {
    // this.cust.getAllProducts().subscribe(posts => {
    //   console.log("-===========================cart ====================");
    //   console.log(posts);

    // });
    // console.log(this.)
    // for (var i = 0; i < this.data.userdata.length; i++){
    //   if (this.data.userdata[i].loginstatus == true){
    //     this.loginid = i;
    //     this.arr = this.data.userdata[i].cart;
    //     for(var j = 0; j < this.arr.length;j++){
    //       this.total = this.total + this.arr[j].price;
    //     }
    //   }
    // }
    this.post.getuser().subscribe((data) =>{
      console.log(data);
      this.loginuser = data[0];
      this.arr = this.loginuser.cart;
      if(this.arr.length > 0){
        this.cartlength = false;
      }
    })

  }
  // removeitem(i:any){
  //   // this.total = this.total - this.data.userdata[this.loginid].cart[i].price;
  //   // this.data.userdata[this.loginid].cart.splice(i,1);
  //   // console.log(this.data.userdata[i].cart);
  // }
  decreasequant(i, maxquan, id) {
    this.quan = Number((document.getElementById("quan" + i) as HTMLInputElement).value);
    if(this.quan > 1) {
      this.quan = Number(this.quan) - 1;
      if(this.quan >= 1) {
        (document.getElementById("quan" + i) as HTMLInputElement).value = String(this.quan);
      }
      this.post.changeCartQuant(this.quan, this.loginuser.email, id).subscribe((data)=> {
        console.log(data);
      });
    }
  }

  increasequant(i, maxquan, id) {
    this.quan = Number((document.getElementById("quan" + i) as HTMLInputElement).value);
    if (this.quan < maxquan) {
      this.quan = Number(this.quan) + 1;
      // (document.getElementById("quan" + i) as HTMLInputElement).value = String(this.quan);
      // console.log(maxquan + " avail");
      if(this.quan <= maxquan) {
        (document.getElementById("quan" + i) as HTMLInputElement).value = String(this.quan);
      }
      this.post.changeCartQuant(this.quan, this.loginuser.email, id).subscribe((data)=> {
        console.log(data);
      });
    }
  }
  removeitem(prodid):any {
    this.post.removeCartItem(this.loginuser.email,prodid).subscribe(() => {
      window.location.reload();
    });
  }

}
