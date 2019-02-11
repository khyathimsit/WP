import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import
// import 'rxjs/add/operator/map';
// var router = express.Router();

// observable
@Injectable({
  providedIn: 'root'
})
export class PostsService {

  uri = 'http://localhost:3000';
  constructor(private http: HttpClient) {}

  getcatproducts(id) {
    return this.http.get(`${this.uri}/getcatproducts/${id}`);
  }
  getoneproduct(id){
    return this.http.get(`${this.uri}/getoneproduct/${id}`);
  }
  loginuser(username, password){
    var loginuser = {
      username : username,
      password : password
    };
    return this.http.post(`${this.uri}/user/login`, loginuser);
  }
  logoutuser(){
    return this.http.post(`${this.uri}/logoutuser`, false);
  }
  checkuser(){
    return this.http.post(`${this.uri}/checkuser`, true)
  }
  addnewuser(details){
    return this.http.post(`${this.uri}/adduser`, details)
  }
  getuser(){
    return this.http.get(`${this.uri}/getuser`);
  }
  addtocart(email, productdetails){
    // console.log(productdetails);
    var cart = {
      email : email,
      details : productdetails
    };
    // console.log(cart);
    return this.http.post(`${this.uri}/addtocart`, cart);
  }
  changeCartQuant(i, email, id){
    var cartUpdatedetails = {
      email : email,
      quantity : i,
      prodid : id
    }
    console.log(cartUpdatedetails);
    return this.http.post(`${this.uri}/changeCart`, cartUpdatedetails);
  }
  removeCartItem(userid, prodid) {
    var cartDetails = {
      userid : userid,
      prodid : prodid
    }
    return this.http.post(`${this.uri}/removeFromCart`, cartDetails);
  }
  postquantity(prodid, i) {
    var cartDetails = {
      prodid : prodid,
      i : i
    }
    console.log(cartDetails);
    return this.http.post(`${this.uri}/postquantity`, cartDetails);
  }
  saveaddress(email, add){
    var details = {
      email : email,
      add : add
    }
    return this.http.post(`${this.uri}/checkout/saveaddress`, details);
  }
  emptycart(email){
    console.log(email);
    return this.http.post(`${this.uri}/emptycart`, {email});
  }
  postcomment(email, prodid, com){
    var details = {
      email : email,
      prodid : prodid, 
      com : com
    }
    console.log(details);
    return this.http.post(`${this.uri}/postcomment`, details);
  }
  // updateloginstatus(id){
  //   console.log(id);
  //   return this.http.get(`${this.uri}/updatelo/${id}`);
  // }

  // ercived from MyPosts page
  // getAllProducts() {
  //   return this.http.get('http://127.0.0.1:8081/posts/');
  // }
  // getAllProductsorders() {
  //   return this.http.get('http://127.0.0.1:8081/orders/');
  // }
  // getAllProductsSearchPage() {
  //   return this.http.get('http://127.0.0.1:8081/searchpage/');
  // }
  // getAllProductscart() {
  //   return this.http.get('http://127.0.0.1:8081/cart/');
  // }
  // getAllProductsregister() {
  //   return this.http.get('http://127.0.0.1:8081/register/');
  // }
  // getAllProductslogin() {
  //   return this.http.get('http://127.0.0.1:8081/login/');
  // }

  // ==================================== USERS DATA ============================================
  // getAllUserlogin() {
  //   return this.http.get('http://127.0.0.1:8081/login/');
  // }

  // AddUserData(mydata) {
  //   console.log('this is adding user post service ' + mydata);
  //   console.log('mydata Name = ' + mydata.firstname);

  //   return this.http.post('http://127.0.0.1:8081/register', mydata);
  // }

  //  getAllPosts() {
  //  return this.http.get('/posts/').pipe(map(data => {})).subscribe(result => {
  //    console.log('Hello I am Batman in posts service');
  //    console.log(result);

  //  });
  //  }

  //  getAllPosts(){
  //   this.http.get('/posts/').map(res => res.json()).subscribe(items => console.log(items));

  //  }

  // getAllPosts() {
  //   return this.http.get('/posts/').map((posts) => {
  //     return posts;
  //   });
  // }

  // getAllPosts():Observable<getAllPosts[]> {
  //   return this.http.get<getAllPosts[]>('/posts/').pipe(map(res => res.json));
  //   // return this.http.get('/posts/').map((posts) => {
  //   //   return posts;
  //   // });
  // }
}
