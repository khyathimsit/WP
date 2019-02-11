import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {UserdataService} from '../../userdata.service';
import { PostsService } from 'src/app/posts.service';
@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.css']
})
export class CheckoutPageComponent implements OnInit {
totalamount = 0;
off="";
add = "No Previous Address!!";
samp : number = 0;
loginuser: any;
newaddress : any;
  constructor(private post:PostsService, private router:Router, private route : ActivatedRoute, private users:UserdataService) { 
    // route.params.subscribe(val => {
    //   this.totalamount = val.total;
    //   for(var i = 0; i < this.users.userdata.length;i++){
    //     if(this.users.userdata[i].loginstatus == true){
    //       this.add = this.users.userdata[i].address[0];
    //     }
    //   }
    // });
    this.post.getuser().subscribe((data) => {
      this.loginuser = data[0];
      this.add = this.loginuser.address[0];
      for(var i = 0; i < this.loginuser.cart.length; i++){
        this.totalamount = this.totalamount + (this.loginuser.cart[i].price * this.loginuser.cart[i].count);
        this.samp = this.loginuser.cart[i].quantity - this.loginuser.cart[i].count; 
        // console.log(this.loginuser.cart[i].id);

        this.post.postquantity( this.loginuser.cart[i].id, this.samp).subscribe((data) => {
          console.log(data);
        })
      }
    })
  }

  ngOnInit() {
  }
  saveaddress(){
    this.post.saveaddress(this.loginuser.email ,this.newaddress).subscribe((data) => {
      console.log(data);
    })
  }
  placeorder(){
    alert("Order Placed Successfully!!");
    this.post.emptycart(this.loginuser.email).subscribe((data) => {
      console.log(data);
    })
    console.log(this.totalamount);
    this.router.navigate(['/startpage']);
  }
  offer(){
    if(this.off=="NEWUSER10"){
      this.totalamount= Math.round(this.totalamount*0.9);
      document.getElementById('promobox').style.display="none";
      alert("Congrats Promo Applied!!");
    }
    
  }
}
