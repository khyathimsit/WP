const express = require('express');
const app = express();

const mongoose = require('mongoose');

const cors = require('cors');

app.use(cors());

const router = express.Router();

app.use('/', router);

const bodyParser = require('body-parser');

const products = require('./models/products');
const users = require('./models/users');

const urlencodedParser = bodyParser.urlencoded({extended:false});

app.set('view engine', 'ejs');

router.route('/products/add').get((req, res) => {
    res.render('productsadd');
})

router.route('/users/add').get((req, res) => {
    res.render('usersadd');
})


var jsonParser = bodyParser.json();

mongoose.connect('mongodb://praveensite:kotamma1997@ds129045.mlab.com:29045/praveensite' , {useNewUrlParser : true});

router.post('/add', urlencodedParser, (req,res) => {
    var productdata = {
    title : req.body.title,
    imageurl : req.body.imageurl,
    id : req.body.id,
    shortdes : req.body.shortdes,
    longdes : req.body.longdes,
    price : req.body.price,
    quantity : 10,
    rating : [],
    reviews : [], 
    };
    var product = new products(productdata);
    product.save().then(product => {
        console.log("Product added succesfully");
        res.redirect('/products/add');
    }).catch(err => {
        console.log("Failed");
        res.redirect('/products/add');
    })
})



router.post('/user/add', urlencodedParser, (req,res) => {
    var userdata = {
        firstname : req.body.firstname,
        lastname : req.body.lastname,
        email : req.body.email,
        mobileno : req.body.mobileno,
        password : req.body.password,
        loginstatus : false,
        address : [], 
        oldorders : [], 
        cart : []  
    };
    var user = new users(userdata);
    user.save().then(user => {
        console.log("User added succesfully");
        res.redirect('/users/add');
    }).catch(err => {
        console.log("Failed");
        res.redirect('/users/add');
    })
})

// =======================Products Methods======================================


// For getting Category Products
router.get('/getcatproducts/:id', (req,res) => {
    products.find({id : {$regex : req.params.id}}, (err,data) => {
        if(err) throw err;
        res.send(data);
    })
})


// For Getting One Product
router.get('/getoneproduct/:id', (req,res) => {
    products.find({id : {$regex : req.params.id}}, (err,data) => {
        if(err) throw err;
        res.send(data);
    })
})

// ================================== USERS Methods =====================================

// For login 
router.route('/user/login').post(jsonParser ,(req, res) => {
    // console.log("Enterd into server");
    // console.log(req.body);
    users.find({email : req.body.username, password : req.body.password},function(err, result){
        // console.log(result);
        if(err) {
            throw err;
        }
        if(result.length != 0) {
            users.update({email : req.body.username}, {$set : {loginstatus : true}}, function(err, data) {
                res.send(true);
            });
            
        } else {
            res.send(false);
        }
    });
    
});


// For Logout
router.route('/logoutuser').post(jsonParser ,(req, res) => {
    users.updateOne({loginstatus : true}, {$set : {loginstatus : false}}, function(err, data) {
        if (err) throw err;
    });
});


// For checking User
router.route('/checkuser').post(jsonParser ,(req, res) => {
    users.find({loginstatus : true},function(err, result){
        if(result.length != 0){
            res.send(true);
        }
        else {
            res.send(false);
        }
    })
});


// For Adding New User
router.route('/adduser').post(jsonParser ,(req, res) => {
    users.find({email : req.body.email},function(err, result){
        if(result.length != 0){
            res.send(true);
        }
        else {
            let use = new users(req.body);
                    use.save()
                        .then(use => {
                                //res.status(200).json({'user': 'Added successfully'});
                        })
                        .catch(err => {
                            //res.status(400).send('Failed to create new record');
                        });
                        res.send(false);
        }
    })
});


// router.get('/checkuser', (req,res) => {
//     users.find({loginstatus : true}, (err,data) => {
//         if(err) throw err;
//         res.send(data);
//     })
// })

// For getting Particular User with email
router.get('/getuser', (req,res) => {
    users.find({loginstatus : true}, (err,data) => {
        if(data.length == 0){
            res.send(false);
        } else {
            res.send(data);
        }
        
    })
})


// ================================Add to Cart ===========================================

router.route('/addtocart').post(jsonParser, (req, res) => {
    // console.log(req.body);
    users.find({email : req.body.email}, (err, data) => {
        // console.log(data );
        if(data.length != 0){
            console.log(data[0].email)
            users.update({email : data[0].email},{ $push : { cart : 
                [{
                    title : req.body.details.title,
                    imageurl : req.body.details.imageurl,
                    id : req.body.details.id,
                    shortdes : req.body.details.shortdes,
                    longdes : req.body.details.longdes,
                    price : req.body.details.price,
                    quantity : req.body.details.quantity,
                    count : 1
                }]
            }}, function(err, data){
                if(err) throw err;
                res.send(true);
            });
        }
    })
})

router.route('/changeCart').post(jsonParser, function(req,res) {
    users.update({email : req.body.email, "cart.id" : req.body.prodid},{ $set : {"cart.$.count" : req.body.quantity }}, function(err, data){
        res.json("Updated Successfully");
    });
});

router.route('/removeFromCart').post(jsonParser, function(req,res) {
    users.update({email : req.body.userid},{ $pull: {cart : {id : req.body.prodid}}}, function(err, data){
        res.json("Updated Successfully");
    });
});

router.route('/postquantity').post(jsonParser, function(req,res) {
    console.log(req.body.prodid);
    products.updateOne({id : req.body.prodid},{ $set : {quantity : req.body.i }}, function(err, data){
        res.json("Updated Successfully");
    });
});

router.route('/emptycart').post(jsonParser, function(req,res) {
    console.log(req.body.email);
    users.update({email : req.body.email},{ $set : {cart : []}}, function(err, data){
        res.json("Updated Successfully");
    });
});

// =============================== Checkout =================================================


router.route('/checkout/saveaddress').post(jsonParser, function(req,res) {
    users.update({email : req.body.email},{ $push : {address : req.body.add}}, function(err, data){
        res.json("Updated Successfully");
    });
});


// ==============================Post Comment =========================================

router.route('/postcomment').post(jsonParser, function(req,res) {
    products.update({id : req.body.prodid},{ $push : {reviews : {
                                               com : req.body.com, 
                                               username : req.body.email
                                            }}}, function(err, data){
        res.json("Updated Successfully");
    });
});


// ============================== Listening Port ==========================================

app.listen('3000', function() {
    console.log('Listening on port 3000');
});