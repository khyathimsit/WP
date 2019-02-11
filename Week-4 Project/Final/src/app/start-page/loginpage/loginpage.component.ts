import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { UserdataService } from '../../userdata.service';
import { Router, ActivatedRoute } from '@angular/router';
import { PostsService } from 'src/app/posts.service';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  email_key = '';
  password_key = '';
  cou = 0;
  arr: any ;
  constructor(
    private customers: PostsService,
    private formBuilder: FormBuilder,
    private users: UserdataService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    // this.customers.getAllUserlogin().subscribe(posts => {
    //   this.MyCusts = posts;
    //   console.log(this.MyCusts);
    // });

    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  get f() {
    return this.loginForm.controls;
  }

  onSubmit(myForm: NgForm) {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    this.login(myForm);
  }
  login(myForm: NgForm) {
    // for (let i = 0; i < this.users.userdata.length; i++) {
    //   this.users.userdata[i].loginstatus = false;
    // }
    // for (let i = 0; i < this.users.userdata.length; i++) {
    //   if (
    //     this.email_key == this.users.userdata[i].email &&
    //     this.password_key == this.users.userdata[i].password
    //   ) {
    //     alert('Logged in Successfully');
    //     this.cou = 1;
    //     this.users.userdata[i].loginstatus = true;
    //     this.router.navigate(['/']);
    //   }
    // }
    // if (this.cou == 0) {
    //   alert('Enter correct Username and Password!!');
    //   myForm.reset();
    //   this.submitted = false;
    // }
    // this.cou = 0;
    // console.log(this.email_key);
    this.customers.loginuser(this.email_key, this.password_key).subscribe((data) => {
      if (data){
        alert("logged in successfully!");
        this.router.navigate(['/']);
      } else {
        alert("Please Enter correct credentials!");
        myForm.reset();
      }
      
      // if (this.arr.length == 0){
      //   alert("Please Enter Correct Mail Id");
      //   myForm.reset();
      // }
      // else {
      //   if(this.password_key === this.arr[0].password){
      //     alert("Logged In successfully!!");
      //     console.log(this.arr);
      //     // this.customers.updateloginstatus(this.email_key);
      //     // this.customers.getusers(this.email_key).subscribe((data) => {
      //     //   console.log(data);
      //     // });
      //     this.router.navigate(['/']);
      //   }
      //   else {
      //     alert("Enter Correct Password");
      //     myForm.reset();
      //   }
      // }
    });
    // this.customers.updateloginstatus(this.email_key);
    // this.customers.getusers(this.email_key).subscribe((data) => {
    //   console.log(data);
    // });
    
  }
}
