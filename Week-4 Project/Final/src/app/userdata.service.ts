import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {
  userdata = [
    {
      firstname : 'praveen',
      lastname : 'nalamolu',
      email : 'praveennalamolu1997@gmail.com',
      mobileno : '7730950439',
      password : 'praveen',
      loginstatus : false,
      address : ['7-62, PallaPothuVariStreet, Chimakurthy, Prakasam(Dt).'],
      offers : ['NEWUSER10'],
      oldorders :
      [
        {
          imageurl:"https://images-na.ssl-images-amazon.com/images/I/81iq991JMEL._SL1500_.jpg",
          id:"l1",
          title:"HP 250 G6 3XL40PA 15.6-inch Screen Size Laptop(Intel Celeron Dual Core/4GB Ram/1TB HDD/DOS), Black",
          shortdescription:"Identity Protection Technology (Intel IPT) Protect Your Identity and Business Intel. Identity Protection Technology (Intel IPT) protects enterprises from being penetrated by stolen credentials and online user account access with an added layer of hardware-based security and authentication as well as a multifactor authentication framework to manage different authentication methods.",
          longdescription:"Identity Protection Technology (Intel IPT) Protect Your Identity and Business Intel. Identity Protection Technology (Intel IPT) protects enterprises from being penetrated by stolen credentials and online user account access with an added layer of hardware-based security and authentication as well as a multifactor authentication framework to manage different authentication methods. Intel Quick Sync Video Technology Intel Quick Sync Video Technology Create, Edit, and Share Video in a Flash Intel Quick Sync Video uses the dedicated media processing capabilities of Intel Graphics Technology to make video encoding tasks-such as creating DVDs or Blu-ray discs, creating and editing 3D videos, converting 2D video files into 3D, and converting video for portable media players and social networking sites-faster and easier. Intel High Definition Audio (Intel HD Audio) Intel High Definition Audio (Intel HD Audio) Integrated Audio for Today and Tomorrow. ",
          price:20990,
          quantity:10,
          count:0
        }
      ],
      cart :
      [
        {
          imageurl:"https://images-na.ssl-images-amazon.com/images/I/81iq991JMEL._SL1500_.jpg",
          id:"l1",
          title:"HP 250 G6 3XL40PA 15.6-inch Screen Size Laptop(Intel Celeron Dual Core/4GB Ram/1TB HDD/DOS), Black",
          shortdescription:"Identity Protection Technology (Intel IPT) Protect Your Identity and Business Intel. Identity Protection Technology (Intel IPT) protects enterprises from being penetrated by stolen credentials and online user account access with an added layer of hardware-based security and authentication as well as a multifactor authentication framework to manage different authentication methods.",
          longdescription:"Identity Protection Technology (Intel IPT) Protect Your Identity and Business Intel. Identity Protection Technology (Intel IPT) protects enterprises from being penetrated by stolen credentials and online user account access with an added layer of hardware-based security and authentication as well as a multifactor authentication framework to manage different authentication methods. Intel Quick Sync Video Technology Intel Quick Sync Video Technology Create, Edit, and Share Video in a Flash Intel Quick Sync Video uses the dedicated media processing capabilities of Intel Graphics Technology to make video encoding tasks-such as creating DVDs or Blu-ray discs, creating and editing 3D videos, converting 2D video files into 3D, and converting video for portable media players and social networking sites-faster and easier. Intel High Definition Audio (Intel HD Audio) Intel High Definition Audio (Intel HD Audio) Integrated Audio for Today and Tomorrow. ",
          price:20990,
          quantity:10,
          count:0
        }
      ]
    },
    {
      firstname : 'khyathi',
      lastname : 'cheedalla',
      email : 'khyathi17@gmail.com',
      mobileno : '9293949559',
      password : 'khyathi',
      loginstatus : false,
      address : ['Room No 201, Parijath Nivas, IIITH.'],
      offers : ['NEWUSER10'],
      oldorders :
      [
        {
          imageurl:"1.jpeg",
          id:"m1",
          title:"LG V40 ThinQ LM-V405EBW (Grey, 6GB RAM, 128GB Storage)",
          shortdescription:"LG V40 ThinQ, 5-camera smartphone, which deliver a stunning Triple Shot to capture the same photo from 3 different angles: Standard, Telephoto Zoom and Super Wide.",
          longdescription:"LG V40 ThinQ, 5-camera smartphone, which deliver a stunning Triple Shot to capture the same photo from 3 different angles: Standard, Telephoto Zoom and Super Wide. But the pro-style features don’t stop there. You’ll also get Cine Shot, which partially animates GIFs adding life to photos, as well as Artificial Intelligence capabilities, like AI Cam, which suggests the best angles and effects for your pics and AI Composition, which recognizes up to three people and adjusts composition like a pro.",
          price:49999,
          quantity:10,
          count:0
        }
      ],
      cart :
      [
        {
          imageurl:"1.jpeg",
          id:"m1",
          title:"LG V40 ThinQ LM-V405EBW (Grey, 6GB RAM, 128GB Storage)",
          shortdescription:"LG V40 ThinQ, 5-camera smartphone, which deliver a stunning Triple Shot to capture the same photo from 3 different angles: Standard, Telephoto Zoom and Super Wide.",
          longdescription:"LG V40 ThinQ, 5-camera smartphone, which deliver a stunning Triple Shot to capture the same photo from 3 different angles: Standard, Telephoto Zoom and Super Wide. But the pro-style features don’t stop there. You’ll also get Cine Shot, which partially animates GIFs adding life to photos, as well as Artificial Intelligence capabilities, like AI Cam, which suggests the best angles and effects for your pics and AI Composition, which recognizes up to three people and adjusts composition like a pro.",
          price:49999,
          quantity:10,
          count:0
        }
      ]
    },
    {
      firstname : 'sidharth',
      lastname : 'siddu',
      email : 'sidharth@gmail.com',
      mobileno : '9989540275',
      password : 'sidharth',
      loginstatus : false,
      address : ['Room No 545, Bakul Nivas, IIITH.'],
      offers : ['NEWUSER10'],
      oldorders :
      [
        {
          imageurl:"2.jpeg",
          id:"m2",
          title:"Mi A2 (Black, 6GB RAM, 128GB Storage)",
          shortdescription:"Qualcomm Snapdragon 660, 2.2 GHz processor. 3010mAh battery capacity. 15.91 cm (5.99) FHD+ Display. Stock Android Oreo 8.1. 12 MP + 20 MP dual rear camera with portrait mode PDAF, HDR, dual flash. 20 MP front camera with portrait mode, flash light. Proximity sensor, E compass, Gyroscope, Accelerometer, IR Blaster.",
          longdescription:"Qualcomm Snapdragon 660, 2.2 GHz processor. 3010mAh battery capacity. 15.91 cm (5.99) FHD+ Display. Stock Android Oreo 8.1. 12 MP + 20 MP dual rear camera with portrait mode PDAF, HDR, dual flash. 20 MP front camera with portrait mode, flash light. Proximity sensor, E compass, Gyroscope, Accelerometer, IR Blaster.",
          price:15999,
          quantity:10,
          count:0
        }
      ],
      cart :
      [
        {
          imageurl:"2.jpeg",
          id:"m2",
          title:"Mi A2 (Black, 6GB RAM, 128GB Storage)",
          shortdescription:"Qualcomm Snapdragon 660, 2.2 GHz processor. 3010mAh battery capacity. 15.91 cm (5.99) FHD+ Display. Stock Android Oreo 8.1. 12 MP + 20 MP dual rear camera with portrait mode PDAF, HDR, dual flash. 20 MP front camera with portrait mode, flash light. Proximity sensor, E compass, Gyroscope, Accelerometer, IR Blaster.",
          longdescription:"Qualcomm Snapdragon 660, 2.2 GHz processor. 3010mAh battery capacity. 15.91 cm (5.99) FHD+ Display. Stock Android Oreo 8.1. 12 MP + 20 MP dual rear camera with portrait mode PDAF, HDR, dual flash. 20 MP front camera with portrait mode, flash light. Proximity sensor, E compass, Gyroscope, Accelerometer, IR Blaster.",
          price:15999,
          quantity:10,
          count:0
        }
      ]
    },
    {
      firstname : 'akhil',
      lastname : 'kumar',
      email : 'akhilkumar@gmail.com',
      mobileno : '8790508509',
      password : 'akhil',
      loginstatus : false,
      address : ['Room No 550, Bakul Nivas, IIITH.'],
      offers : ['NEWUSER10'],
      oldorders :
      [
        {
          imageurl:"https://images-na.ssl-images-amazon.com/images/I/61snu48HMFL._SL1300_.jpg",
          id:"m3",
          title:"OnePlus 6T McLaren (Midnight Black, 8GB RAM, 128GB Storage)",
          shortdescription:"Hidden under the display, you will find our new in-screen fingerprint sensor. The OnePlus 6T unlocks the moment your finger lands on the display for a seamless and intuitive unlock experience that takes just 0.36 seconds.",
          longdescription:"Hidden under the display, you will find our new in-screen fingerprint sensor. The OnePlus 6T unlocks the moment your finger lands on the display for a seamless and intuitive unlock experience that takes just 0.36 seconds.",
          price:41999,
          quantity:10,
          count:0
        }
      ],
      cart :
      [
        {
          imageurl:"https://images-na.ssl-images-amazon.com/images/I/61snu48HMFL._SL1300_.jpg",
          id:"m3",
          title:"OnePlus 6T (Midnight Black, 8GB RAM, 128GB Storage)",
          shortdescription:"Hidden under the display, you will find our new in-screen fingerprint sensor. The OnePlus 6T unlocks the moment your finger lands on the display for a seamless and intuitive unlock experience that takes just 0.36 seconds.",
          longdescription:"Hidden under the display, you will find our new in-screen fingerprint sensor. The OnePlus 6T unlocks the moment your finger lands on the display for a seamless and intuitive unlock experience that takes just 0.36 seconds.",
          price:41999,
          quantity:10,
          count:0
        }
      ]
    }
  ];
  constructor() { }

  adddetails(user){
    this.userdata.push(user);
  }
}

