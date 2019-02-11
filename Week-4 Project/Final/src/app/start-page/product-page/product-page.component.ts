import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { UserdataService } from '../../userdata.service';
import { Router, ActivatedRoute } from '@angular/router';
import { PostsService } from 'src/app/posts.service';
@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {
  commentCheck: boolean = false;
  ratingCheck: boolean = false;
  isHide: string = 'block';
  hiddenCheck: string = 'block';
  item: any;
  com: any = '';
  loginuser: any;
  id: any;
  obj1: any;
  showcart = true;
  reviews: any;
  user:any;
  counter(i: number) {
    return new Array(i);
  }

  constructor(
    private users: UserdataService,
    private products: DataService,
    private router: Router,
    private route: ActivatedRoute,
    private postService: PostsService
  ) {
    
  }

  ngOnInit() {
    this.route.params.subscribe(val => {
      // console.log('outsisse'+ this.postsarr[0]);
      // const i = val.id;
      this.id = this.route.snapshot.paramMap.get('id');
      console.log(this.id);
      this.postService.getuser().subscribe((data) =>{
        this.user = data[0];
        // console.log(this.user);
      });

    this.postService.getoneproduct(this.id).subscribe((data) => {
      // console.log(data);
      this.item = data[0];
      if(this.item.quantity == 0){
        this.showcart = false;
      }
      this.reviews = this.item.reviews;
    })
    // console.log(this.item);
      
    });
  }

  comment() {
    this.commentCheck = true;
    // this.hiddenCheck='none';
  }

  postComment() {
    
    // console.log("entered");
    console.log(this.user);
    this.postService.postcomment(this.user.email, this.item.id, this.com).subscribe((data) =>{
      console.log(data);
    })
    alert("Comment Posted Successfully!");
    this.commentCheck = false;
    window.location.reload();
  }

  rating() {
    this.ratingCheck = true;
    // this.isHide='none';
  }

  ratingValue(val) {
    console.log(val);
  }

  postRating() {
    alert('Rating Submitted');
    this.isHide = 'none';
  }
  addcart() {
    // for (var i = 0; i < this.users.userdata.length; i++) {
    //   if (this.users.userdata[i].loginstatus == true) {
    //     this.users.userdata[i].cart.push(this.item);
    //   }
    // }
    // alert(
    //   'This Item Successfully addet to your Cart! Visit Cart for Other details!'
    // );
    // console.log(this.users.userdata);
    this.postService.getuser().subscribe((data) =>{
      if(data == false){
        alert("You can't add products to cart without login into our Website. Please login.");
        this.router.navigate(['/login']);
      } else {
        this.loginuser = data[0];
        // console.log(this.loginuser);
      }
      
    })
    // console.log(this.loginuser.email);
    this.postService.addtocart(this.loginuser.email, this.item).subscribe((data) =>{
        if(data == true){
          alert("Added to cart Successfully!");
          this.router.navigate(['/cart']);
        // } else {
        //   alert("This item is Out of stock!!");
        //   this.router.navigate(['/startpage']);
        // }
    }})
  }
}
