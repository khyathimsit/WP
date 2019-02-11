import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { PostsService } from 'src/app/posts.service';
@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {
  title = 'shoppingCart';
  arr: any;
  id: any;
  cou = 0;
  postsarr: any;

  counter(i: number) {
    return new Array(i);
  }
  constructor(
    private postService: PostsService,
    private userdata: DataService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    
  }
  ngOnInit() {
    this.route.params.subscribe(val => {
        // console.log('outsisse'+ this.postsarr[0]);
        // const i = val.id;
        this.id = this.route.snapshot.paramMap.get('id');

    this.postService.getcatproducts(this.id).subscribe((data) => {
      this.arr = data;
    })
        
      });
    
  }
}
