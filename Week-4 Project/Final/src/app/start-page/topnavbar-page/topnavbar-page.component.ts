import { Component, OnInit } from '@angular/core';
import {DataService} from '../../data.service';
import {Router, ActivatedRoute} from '@angular/router';
import {SearchPageComponent} from '../search-page/search-page.component';
import { PostsService } from 'src/app/posts.service';
@Component({
  selector: 'app-topnavbar-page',
  templateUrl: './topnavbar-page.component.html',
  styleUrls: ['./topnavbar-page.component.css'],
  providers : [SearchPageComponent]
})
export class TopnavbarPageComponent implements OnInit {
  // dropdownvalues :any= this.data.productdata[0].drop;
  user;
  constructor(private post: PostsService, private data:DataService,private router:Router, private route : ActivatedRoute, private searchpage: SearchPageComponent) { 
    this.post.checkuser().subscribe((data) => {
      console.log(data);
      // if (data.length == 0){
      //   console.log("Printing False");
      //   this.user = false;
      // } else {
      //   console.log("Printing True");
      //   this.user = true;
      // }
      this.user = data;
    })
  }

  ngOnInit() {
    
  }
  
  logout(){
    console.log("Logout clicked");
    this.post.logoutuser().subscribe((data) => {
      // this.router.navigate(['']);
      console.log("logout successfully");
  })}
}
