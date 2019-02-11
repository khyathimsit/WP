import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../../data.service';
import { UserdataService } from '../../userdata.service';
import { Router, ActivatedRoute } from '@angular/router';
import { registerContentQuery } from '@angular/core/src/render3';
import { PostsService } from 'src/app/posts.service';

@Component({
  selector: 'app-registerpage',
  templateUrl: './registerpage.component.html',
  styleUrls: ['./registerpage.component.css']
})
export class RegisterpageComponent implements OnInit {
  // for forms
  registerForm: FormGroup;
  submitted = false;

  // for saving user details in service
  firstname_key = '';
  lastname_key = '';
  number_key = '';
  email_key = '';
  password_key = '';
  address_key = '';
  details: any;


  constructor(
    private newcustomer: PostsService,
    private formBuilder: FormBuilder,
    private service: DataService,
    private userservice: UserdataService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      number: ['', [Validators.required, Validators.minLength(10)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      address:[]
    });
    
  }

  get f() {
    return this.registerForm.controls;
  }

  onSubmit() {
    // alert("hello");
    this.submitted = true;

    if (this.registerForm.invalid) {
      return;
    }
    this.register();
  }

  register() {
    this.details = {
      firstname: this.firstname_key,
      lastname: this.lastname_key,
      email: this.email_key,
      mobileno: this.number_key,
      password: this.password_key,
      loginstatus: true,
      address: [this.address_key],
      offers: ['NEWUSER10'],
      oldorders: [],
      cart: []
    };

    this.newcustomer.addnewuser(this.details).subscribe((data) =>{
      console.log(data);
        if(data){
          alert("You are already registered for this website!!");
          this.router.navigate(['/login']);
        } else {
          alert("You are successfully Registered for this web site");
          this.router.navigate(['/startpage']);
        }
    });

    // document.getElementById('sos').click();

    // this.custs.AddUserData(this.details);
    // alert('Registration Successful!!');
    
    // console.log(this.custsa);
  }
}
