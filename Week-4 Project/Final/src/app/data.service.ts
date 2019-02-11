import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  productdata = [
    {
        "electronic": [
          {
            "laptop" : [
              {
                //This is Details of Product 1
                "imageurl":"https://images-na.ssl-images-amazon.com/images/I/81iq991JMEL._SL1500_.jpg",
                "id":"l1",
                "title":"HP 250 G6 3XL40PA 15.6-inch Screen Size Laptop(Intel Celeron Dual Core/4GB Ram/1TB HDD/DOS), Black",
                "shortdescription":"Identity Protection Technology (Intel IPT) Protect Your Identity and Business Intel. Identity Protection Technology (Intel IPT) protects enterprises from being penetrated by stolen credentials and online user account access with an added layer of hardware-based security and authentication as well as a multifactor authentication framework to manage different authentication methods.",
                "longdescription":"Identity Protection Technology (Intel IPT) Protect Your Identity and Business Intel. Identity Protection Technology (Intel IPT) protects enterprises from being penetrated by stolen credentials and online user account access with an added layer of hardware-based security and authentication as well as a multifactor authentication framework to manage different authentication methods. Intel Quick Sync Video Technology Intel Quick Sync Video Technology Create, Edit, and Share Video in a Flash Intel Quick Sync Video uses the dedicated media processing capabilities of Intel Graphics Technology to make video encoding tasks-such as creating DVDs or Blu-ray discs, creating and editing 3D videos, converting 2D video files into 3D, and converting video for portable media players and social networking sites-faster and easier. Intel High Definition Audio (Intel HD Audio) Intel High Definition Audio (Intel HD Audio) Integrated Audio for Today and Tomorrow. ",
                "price":20990,
                "quantity":10,
                "rating":0,
                "review":[],
                "count":0
              },
              {
                //2
                "imageurl":"https://images-na.ssl-images-amazon.com/images/I/71F4EwEErQL._SL1500_.jpg",
                "id":"l2",
                "title":"Lenovo Ideapad 530S-14IKB 81EU007UIN 14-inch Full HD Laptop (8th Gen I5-8250U/8GB DDR4/512GB SSD/Windows 10 Home/Office H&S 2016/2GB Graphics), Copper",
                "shortdescription":"1.49 kgs and 16.4 mm thin with 3 sided narrow bezels. Extremely slim, light and handy laptop with wider display for life-like view. Harman Speakers with Dolby Audio.",
                "longdescription":"1.49 kgs and 16.4 mm thin with 3 sided narrow bezels. Extremely slim, light and handy laptop with wider display for life-like view. Harman Speakers with Dolby Audio. Premium quality audio for immersive sound experience. Nvidia MX 150 Gfx. Advanced graphics with 25% better performance over 940 MX. FHD IPS Antiglare Display with 180 degree hinge. Visibly clear visuals from all angles with hinge protection. Up to 8 hours battery life with Rapid Charge . Long battery life with rapid charge providing 2 hours usage in 15 minutes.",
                "price":81699,
                "quantity":10,
                "rating":0,
                "review":[],
                "count":0
              },
              {
                //3
                "imageurl":"https://images-na.ssl-images-amazon.com/images/I/71JKnpmKyWL._SL1500_.jpg",
                "id":"l3",
                "title":"HP Pavilion x360 Core i5 8th Gen 14-inch Touchscreen 2-in-1 FHD Laptop (8GB/1TB+8GB SSHD/Windows 10 Home/MS Office Home & Student 2016/Natural Silver/1.59 kg)",
                "shortdescription":"Be free to create, connect and share in more ways with the new Pavilion x360. With the latest technology and an ultra thin and light design, this powerful PC is the one device for everything you're into. A durable 360-degree geared hinge gets you in the perfect position to work, write, watch and play.",
                "longdescription":"Be free to create, connect and share in more ways with the new Pavilion x360. With the latest technology and an ultra thin and light design, this powerful PC is the one device for everything you're into. A durable 360-degree geared hinge gets you in the perfect position to work, write, watch and play. Easily convert to tablet for notetaking and drawing that feels as natural as pen on paper. All your activities become easier and faster than before with the latest processor and advanced graphics.",
                "price":69990,
                "quantity":10,
                "rating":0,
                "review":[],
                "count":0
              },
              {
                //4
                "imageurl":"https://images-na.ssl-images-amazon.com/images/I/81TEeRrh5FL._SL1500_.jpg",
                "id":"l4",
                "title":"HP 15 Core i5 8th gen 15.6-inch FHD Laptop (8GB/1TB HDD/DOS/Sparkling Black /2.04 kg), 15q-ds0009TU",
                "shortdescription":"Designed for long-lasting performance, this stylishly designed HP 15 laptop has a long-lasting battery that keeps you connected, entertained, and productive all day.",
                "longdescription":"Designed for long-lasting performance, this stylishly designed HP 15 laptop has a long-lasting battery that keeps you connected, entertained, and productive all day. Speed through tasks, or sit back and socialize – with the latest processors and a rich HD display. Do it all, all day.",
                "price":42990,
                "quantity":10,
                "rating":0,
                "review":[],
                "count":0
              },
              {
                //5
                "imageurl":"https://images-na.ssl-images-amazon.com/images/I/31HZ8gbAHEL.jpg",
                "id":"l5",
                "title":"Lenovo Ideapad 330s Intel Core i3 8th Gen 14-inch Full HD Thin & Light Laptop (4GB/1TB HDD/Windows 10 Home/Platinum Grey/1.7kg)",
                "shortdescription":"Meet the IdeaPad 330S. Thinner and lighter with narrow bezels for broader viewing, it boasts state-of-the-art processing and accelerated graphics performance. Power through any task with ease. Featuring a streamlined chassis with a polished aluminum cover, the IdeaPad 330S is designed to make an impression.",
                "longdescription":"Meet the IdeaPad 330S. Thinner and lighter with narrow bezels for broader viewing, it boasts state-of-the-art processing and accelerated graphics performance. Power through any task with ease. Featuring a streamlined chassis with a polished aluminum cover, the IdeaPad 330S is designed to make an impression. Choose from a range of sophisticated tone-on-tone color options to make it yours. Enjoy powerful, quiet performance in an ultra-thin laptop-the best of all worlds, whether you’re gaming, editing videos and more.",
                "price":40000,
                "quantity":10,
                "rating":0,
                "review":[],
                "count":0
              },
              {
                //6
                "imageurl":"https://images-na.ssl-images-amazon.com/images/I/61%2BLE3LurUL._SL1281_.jpg",
                "id":"l6",
                "title":"Asus Vivobook X540MA-GQ024T 15.6-inch Laptop (Intel Celeron N4000/4GB/500GB/Windows 10/Integrated Graphics)",
                "shortdescription":"Identity Protection Technology (Intel IPT) Protect Your Identity and Business Intel. Identity Protection Technology (Intel IPT) protects enterprises from being penetrated by stolen credentials and online user account access with an added layer of hardware-based security and authentication as well as a multifactor authentication framework to manage different authentication methods.",
                "longdescription":"Identity Protection Technology (Intel IPT) Protect Your Identity and Business Intel. Identity Protection Technology (Intel IPT) protects enterprises from being penetrated by stolen credentials and online user account access with an added layer of hardware-based security and authentication as well as a multifactor authentication framework to manage different authentication methods. Intel Quick Sync Video Technology Intel Quick Sync Video Technology Create, Edit, and Share Video in a Flash Intel Quick Sync Video uses the dedicated media processing capabilities of Intel Graphics Technology to make video encoding tasks-such as creating DVDs or Blu-ray discs, creating and editing 3D videos, converting 2D video files into 3D, and converting video for portable media players and social networking sites-faster and easier. Intel High Definition Audio (Intel HD Audio) Intel High Definition Audio (Intel HD Audio) Integrated Audio for Today and Tomorrow. ",
                "price":18990,
                "quantity":10,
                "rating":0,
                "review":[],
                "count":0
              },
              {
                //7
                "imageurl":"https://images-na.ssl-images-amazon.com/images/I/51lkK1Ol5TL.jpg",
                "id":"l7",
                "title":"Dell Inspiron 5370 Intel Core i5 8th Gen 13.3-inch FHD Thin and Light Laptop (8GB/256GB SSD/Windows 10 Home/MS Office/Silver/1.50kg)",
                "shortdescription":"DELL Inspiron 13 5370 core i5-8250U, 8GB DDR4 RAM, 256GB SSD with Windows 10 (6MB Cache, up to 3.4 GHz).",
                "longdescription":"DELL Inspiron 13 5370 core i5-8250U, 8GB DDR4 RAM, 256GB SSD with Windows 10 (6MB Cache, up to 3.4 GHz).",
                "price":62390,
                "quantity":10,
                "rating":0,
                "review":[],
                "count":0
              },
              {
                //8
                "imageurl":"https://images-na.ssl-images-amazon.com/images/I/61s%2B5Mi07AL._SL1032_.jpg",
                "id":"l8",
                "title":"Apple MacBook Air Core i5 13.3-inch Laptop (8GB/128GB/MacOS Sierra/Silver/1.35kg), MQD32HN/A",
                "shortdescription":"MacBook Air lasts up to an incredible 12 hours between charges. So from your morning coffee to your evening commute, you can work unplugged. When it’s time to kick back and relax, you can get up to 12 hours of iTunes movie playback. And with up to 30 days of standby time, you can go away for weeks and pick up where you left off.",
                "longdescription":"MacBook Air lasts up to an incredible 12 hours between charges. So from your morning coffee to your evening commute, you can work unplugged. When it’s time to kick back and relax, you can get up to 12 hours of iTunes movie playback. And with up to 30 days of standby time, you can go away for weeks and pick up where you left off.Whatever the task, fifth-generation Intel Core i5 and i7 processors with Intel HD Graphics 6000 are up to it. From editing photos to browsing the web, everything happens ultra-fast.",
                "price":67990,
                "quantity":10,
                "rating":0,
                "review":[],
                "count":0
              },
              {
                //9
                "imageurl":"https://images-na.ssl-images-amazon.com/images/I/41573I-Ae9L.jpg",
                "id":"l9",
                "title":"Acer Predator Helios 300 G3-572 Core i7 7th Gen- 8 GB/1 TB /128GB 4GB Grap/ W10",
                "shortdescription":"SSD Capacity: 128 GB Brand: ACER Family Line: Predator Helios 300 MPN: NH.Q2CSI.009, NH.Q2CSI.003 Type: Notebook Operating System: Windows 10 Processor Brand: Intel Screen Size: 15.6 Utility: Everyday Use Processor: Core i7 Warranty Duration: 1 Year Processor Speed: 2.5 GHz with Turbo Boost Upto 3.5 GHz",
                "longdescription":"SSD Capacity: 128 GB Brand: ACER Family Line: Predator Helios 300 MPN: NH.Q2CSI.009, NH.Q2CSI.003 Type: Notebook Operating System: Windows 10 Processor Brand: Intel Screen Size: 15.6 Utility: Everyday Use Processor: Core i7 Warranty Duration: 1 Year Processor Speed: 2.5 GHz with Turbo Boost Upto 3.5 GHz",
                "price":87999,
                "quantity":10,
                "count":0
              },
              {
                //10
                "imageurl":"https://images-na.ssl-images-amazon.com/images/I/815zBODjzvL._SL1500_.jpg",
                "id":"l10",
                "title":"Acer Nitro Core i7 8th Gen 15.6-inch Laptop (8GB/1TB/128 GB SSD/Windows 10/4GB Graphics/Black/2.7kg)",
                "shortdescription":"Enjoy premium looks without the premium price with the Acer Nitro Gaming Notebook (model AN515-52), which features a beautiful exterior. It features a 15.6-inch high-def. display giving you ample space for opening multiple windows and digital entertainment.",
                "longdescription":"Enjoy premium looks without the premium price with the Acer Nitro Gaming Notebook (model AN515-52), which features a beautiful exterior. It features a 15.6-inch high-def. display giving you ample space for opening multiple windows and digital entertainment.",
                "price":75550,
                "quantity":10,
                "rating":0,
                "review":[],
                "count":0
              }
            ],
            "mobile" : [
              {
                // 1
                "imageurl":"data:image/jpeg;base64,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",
                "id":"m1",
                "title":"LG V40 ThinQ LM-V405EBW (Grey, 6GB RAM, 128GB Storage)",
                "shortdescription":"LG V40 ThinQ, 5-camera smartphone, which deliver a stunning Triple Shot to capture the same photo from 3 different angles: Standard, Telephoto Zoom and Super Wide.",
                "longdescription":"LG V40 ThinQ, 5-camera smartphone, which deliver a stunning Triple Shot to capture the same photo from 3 different angles: Standard, Telephoto Zoom and Super Wide. But the pro-style features don’t stop there. You’ll also get Cine Shot, which partially animates GIFs adding life to photos, as well as Artificial Intelligence capabilities, like AI Cam, which suggests the best angles and effects for your pics and AI Composition, which recognizes up to three people and adjusts composition like a pro.",
                "price":49999,
                "quantity":10,
                "rating":0,
                "review":[],
                "count":0
              },
              {
                //2
                "imageurl":"https://images-na.ssl-images-amazon.com/images/I/91Dh3ec3EFL._SL1500_.jpg",
                "id":"m2",
                "title":"Mi A2 (Black, 6GB RAM, 128GB Storage)",
                "shortdescription":"Qualcomm Snapdragon 660, 2.2 GHz processor. 3010mAh battery capacity. 15.91 cm (5.99) FHD+ Display. Stock Android Oreo 8.1. 12 MP + 20 MP dual rear camera with portrait mode PDAF, HDR, dual flash. 20 MP front camera with portrait mode, flash light. Proximity sensor, E compass, Gyroscope, Accelerometer, IR Blaster.",
                "longdescription":"Qualcomm Snapdragon 660, 2.2 GHz processor. 3010mAh battery capacity. 15.91 cm (5.99) FHD+ Display. Stock Android Oreo 8.1. 12 MP + 20 MP dual rear camera with portrait mode PDAF, HDR, dual flash. 20 MP front camera with portrait mode, flash light. Proximity sensor, E compass, Gyroscope, Accelerometer, IR Blaster.",
                "price":15999,
                "quantity":10,
                "rating":0,
                "review":[],
                "count":0
              },
              {
                //3
                "imageurl":"https://images-na.ssl-images-amazon.com/images/I/61snu48HMFL._SL1300_.jpg",
                "id":"m3",
                "title":"OnePlus 6T (Midnight Black, 8GB RAM, 128GB Storage)",
                "shortdescription":"Hidden under the display, you will find our new in-screen fingerprint sensor. The OnePlus 6T unlocks the moment your finger lands on the display for a seamless and intuitive unlock experience that takes just 0.36 seconds.",
                "longdescription":"Hidden under the display, you will find our new in-screen fingerprint sensor. The OnePlus 6T unlocks the moment your finger lands on the display for a seamless and intuitive unlock experience that takes just 0.36 seconds.",
                "price":41999,
                "quantity":10,
                "rating":0,
                "review":[],
                "count":0
              },
              {
                //4
                "imageurl":"https://images-na.ssl-images-amazon.com/images/I/71EAyzhyWlL._SL1500_.jpg",
                "id":"m4",
                "title":"Honor 7C (Blue, 3GB RAM, 32GB Storage)",
                "shortdescription":"Honor 7C is here to redefine the budget segment smartphones with high end specs, It is the most affordable dual camera phone powered by Qualcomm Snapdragon Octa core chipset. ",
                "longdescription":"Honor 7C is here to redefine the budget segment smartphones with high end specs, It is the most affordable dual camera phone powered by Qualcomm Snapdragon Octa core chipset. The large 5.99-inch HD+ (720x1440 pixels) IPS LCD panel is one of the first things you'll notice about the Honor 7C. ",
                "price":10999,
                "quantity":10,
                "rating":0,
                "review":[],
                "count":0
              },
              {
                //5
                "imageurl":"https://images-na.ssl-images-amazon.com/images/I/91%2BFsUOc7RL._SL1500_.jpg",
                "id":"m5",
                "title":"Moto G5 Plus (32GB, Fine Gold)",
                "shortdescription":"One of the first new Moto G phones with a head-turning metal design, it’s packed with all of the stuff you need—and none of the stuff you don’t.",
                "longdescription":"Take stunning photos using the most advanced 12MP camera in its class featuring Dual Autofocus Pixels. Free yourself with a 3000 mAh all-day battery and fuel up fast with TurboPower charging.* Get smooth app performance without stops and stutters thanks to a speedy 2.0 GHz octa-core processor.",
                "price":11500,
                "quantity":10,
                "count":0
              },
              {
                //6
                "imageurl":"https://images-na.ssl-images-amazon.com/images/I/61vtCu41MgL._SL1500_.jpg",
                "id":"m6",
                "title":"Moto G6 Plus (Indigo Black, 6+64 GB)",
                "shortdescription":"Click more with a 12+5 MP smart dual rear camera enabled with cool creative modes such as spot colour, selective black and white, portrait mode and more. ",
                "longdescription":"Get flawless low light selfies with the 16 MP front camera which allows up to 300% more light in. Just look at your phone to unlock it. It knows who you are thanks to face recognition software.",
                "price":15788,
                "quantity":10,
                "rating":0,
                "review":[],
                "count":0
              },
              {
                //7
                "imageurl":"https://images-na.ssl-images-amazon.com/images/I/815Aay6NVhL._SL1500_.jpg",
                "id":"m7",
                "title":"Samsung Galaxy Note 8 (Midnight Black, 6GB RAM, 64GB Storage)",
                "shortdescription":"More screen means more space to do great things. Go big with the Galaxy Note8's 16. 05cm (6. 3 inch) screen. It's the largest ever screen on a Note device and it still fits easily in your hand. Use the S Pen to express yourself in ways that make a difference. Draw your own emoji's to show how you feel or write a message on a photo and send it as a handwritten note. ",
                "longdescription":"The Galaxy Note8's dual camera has a wide-angle camera that comes with the great low-light capabilities that you've come to expect from Galaxy phones. The dual camera supports 2x optical zoom so you get sharp photos or videos even from a distance, and both cameras have optical image stabilisation so you get steady shots even when zoomed in. The Galaxy Note8 is your portal to a new world when connected to this range of devices and interfaces",
                "price":74690,
                "quantity":10,
                "rating":0,
                "review":[],
                "count":0
              },
              {
                //8
                "imageurl":"https://images-na.ssl-images-amazon.com/images/I/71a34To2v8L._SL1500_.jpg",
                "id":"m8",
                "title":"Samsung Galaxy A7 (Gold, 4GB RAM and 64GB Storage)",
                "shortdescription":"Samsung Galaxy A7 with 4GB RAM and 64GB Memory | 15.36 cm (6.0 inch) Infinity display (HD+) | 24MP F1.7 + 5MP F2.2 + 8MP F2.4 Rear Camera",
                "longdescription":"The Super AMOLED Infinity Display delivers stunning colour reproduction and deep contrasts. Enjoy True FHD+ experience on popular video streaming apps.",
                "price":18990,
                "quantity":10,
                "rating":0,
                "review":[],
                "count":0
              },
              {
                //9
                "imageurl":"https://images-na.ssl-images-amazon.com/images/I/61682XpNGFL._SL1500_.jpg",
                "id":"m9",
                "title":"Apple iPhone X (Silver, 3GB RAM, 64GB Storage, 12 MP Dual Camera, 458 PPI Display)",
                "shortdescription":"With iPhone X, the device is the display. An all‑new 5.8‑inch Super Retina screen fills the hand and dazzles the eyes.",
                "longdescription":"The first OLED screen that rises to the standards of iPhone, with accurate, stunning colors, true blacks, high brightness, and a 1,000,000 to 1 contrast ratio.",
                "price":79999,
                "quantity":10,
                "rating":0,
                "review":[],
                "count":0
              },
              {
                //10
                "imageurl":"https://images-na.ssl-images-amazon.com/images/I/71lK7%2BbDFrL._SL1500_.jpg",
                "id":"m10",
                "title":"Redmi Note 5 Pro (Black, 6GB RAM, 64GB Storage)",
                "shortdescription":"Qualcomm snapdragon 636, 1.8 GHz processor, 4000mah battery capacity, 15.91 cm (5.99) FHD+ display, 6gb + 64gb flash memory, MIUI 9 based on android 7.1.1",
                "longdescription":"The large 1.251am pixel dual camera delivers high-quality images, even in low lighting conditions. Pairing high-quality Sony and Samsung sensors offers a depth of field not available on typical smartphone cameras.",
                "price":13999,
                "quantity":10,
                "rating":0,
                "review":[],
                "count":0
              }
            ],
          }
        ],

        "accessories": [
          {
            "goggle" : [
              {
                //This is Details of Product 1
                "imageurl":"https://images-na.ssl-images-amazon.com/images/I/61tGx1Nx5HL._UL1500_.jpg",
                "id":"g1",
                "title":"Younky Wayfarer Unisex Sunglasses (Clbm-Sm-0001|Black)",
                "shortdescription":"Its Size Is Medium, It Can Fit To Any Mature Or Semi Mature Face, Lens Width Is 55Mm, Front Bridge View Is 142Mm, And Side Temple Width Is 136Mm.",
                "longdescription":"Younky Unisex UV Protected Stylish Silver Mercury Wayfarer Sunglasses For Men and Women ( CLBM-SM-001|55|Silver ) - 1 Sunglass Case. Accessories age and aqua attachment aviator aviators ban below belt Black blue bluetooth box boys branded brown by camera car case cat cateye chase children choo circle cleaner clip color colored colour colours combo coolers cooling cost cover creature creed cricket dark day deal detachable dhawan diamond diesel discount",
                "price":1799,
                "quantity":10,
                "rating":0,
                "review":[],
                "count":0
              },
              {
                //2
                "imageurl":"https://images-na.ssl-images-amazon.com/images/I/612XTFUR0eL._UL1500_.jpg",
                "id":"g2",
                "title":"SOJOS UV Protected Aviator Gold Frame Mirrored Lens Men's Sunglasses with Spring Hinges (SJ1030C2, Silver)",
                "shortdescription":"SOJOS Vision sunglasses is the perfect choice for outdoor sports and activities such as cycling, driving, shopping, travelling, hiking, and is suitable as high fashion accessory and daily wear all year round.",
                "longdescription":"UV400 PROTECTION – SOJOS Vision lenses can block 100% of both UVA and UVB radiation. UV400 rated sunglasses is essential to protecting your eyes against long term UV damage and keeping your eyes healthy when you go out.",
                "price":2599,
                "quantity":10,
                "rating":0,
                "review":[],
                "count":0
              },
              {
                //3
                "imageurl":"https://images-na.ssl-images-amazon.com/images/I/51Ij-UDaIuL._UL1280_.jpg",
                "id":"g3",
                "title":"Y&S UV Protected Mirror Reflector Unisex Sunglasses (55, Black)",
                "shortdescription":"Y&S is India’s most asked online Youngster's Sunglasses Name. It is sporty Yet classy. While Y&S Sunglasses stays focused on its buyers and delivers what they want without knowing even what they want in it.",
                "longdescription":"Y&S believes that it is all about fastrack fashion and reach that the audiences of the premium accessories for all segment looks for. Enjoy the Pair of your Y&S Goggles and we would love to hear from you. if its positive we will appreciate and if its not even than we will appreciate and revise the product as per consolidated comebacks.",
                "price":2500,
                "quantity":10,
                "rating":0,
                "review":[],
                "count":0
              },
              {
                //4
                "imageurl":"https://images-na.ssl-images-amazon.com/images/I/81GqizXc2OL._UL1500_.jpg",
                "id":"g4",
                "title":"Fastrack UV protected Square Men's Sunglasses (P358BK2|57 millimeters|Black)",
                "shortdescription":"Fastrack Black Full Rimmed UV Protected Sunglasses for Guys.",
                "longdescription":"Fastrack Black Full Rimmed UV Protected Sunglasses for Guys.",
                "price":800,
                "quantity":10,
                "rating":0,
                "review":[],
                "count":0
              },
              {
                //5
                "imageurl":"https://images-na.ssl-images-amazon.com/images/I/51TY3qfUT9L._UL1000_.jpg",
                "id":"g5",
                "title":"MaFs Geometric Retro Hexagonal Aviator Sunglasses | Perfect For Daily Use | Uv Proected Sunglasses Unisex Sunglasses | Stylish, Trendy, Comfortable | For Men And Women",
                "shortdescription":"MaFs Sunglasses have the finest frame, Ideal for Men and Women. Style amongst all age groups especially youngsters. It has UV 400 protection which blocks all light rays with wavelengths up to 400 nanometers. (This covers all of UVA and UVB rays.)",
                "longdescription":" Made of polycarbonate material our products are ergonomically designed to give you a comfortable head hugging fit. They are flexible and contour your face comfortably, thus providing all-day wearing comfort. These sunglasses add charm to your personality with their appealing excellence. These exclusive Metal sunglasses keep you cool in sunny days and make you feel warm in winters.",
                "price":1899,
                "quantity":10,
                "rating":0,
                "review":[],
                "count":0
              },
              {
                //6
                "imageurl":"https://images-na.ssl-images-amazon.com/images/I/31LpGaQUb5L.jpg",
                "id":"g6",
                "title":"RAZMAZ® Geometric Retro Hexagonal Aviator Sunglasses Mirrored Flat Lens for Men Women UV400",
                "shortdescription":"Multiple mirror lenses colours are available for this style, hope they can bring you a colourful mood in the hot summer.",
                "longdescription":"RazMaz brand consistently adheres to the leading design concepts and innovation style, follows the world fashion trend. RazMaz focuses on the fashion of your life. We design each of our glasses with style, comfort and spirituality in mind to fit your lifestyle. There is truly a story behind everyone’s eyes and we take pride in creating beautiful eyewear that only protects but showcases the mystery of your eyes. ",
                "price":2599,
                "quantity":10,
                "rating":0,
                "review":[],
                "count":0
              },
              {
                //7
                "imageurl":"https://images-na.ssl-images-amazon.com/images/I/51h54emikkL._UL1100_.jpg",
                "id":"g7",
                "title":"RAZMAZ Bridgeless Butterfly Stylish Sunglasses for Women Men UV400- RZ2139",
                "shortdescription":"Multiple mirror lenses colours are available for this style, hope they can bring you a colourful mood in the hot summer.",
                "longdescription":"RazMaz brand consistently adheres to the leading design concepts and innovation style, follows the world fashion trend. RazMaz focuses on the fashion of your life. We design each of our glasses with style, comfort and spirituality in mind to fit your lifestyle. There is truly a story behind everyone’s eyes and we take pride in creating beautiful eyewear that only protects but showcases the mystery of your eyes. ",
                "price":2199,
                "quantity":10,
                "rating":0,
                "review":[],
                "count":0
              },
              {
                //8
                "imageurl":"https://images-na.ssl-images-amazon.com/images/I/51sUrzg0QbL._UL1100_.jpg",
                "id":"g8",
                "title":"RazMaz Polarised UV Protected Round Unisex Glasses -(RZ2166| 50| Grey)",
                "shortdescription":"Multiple mirror lenses colours are available for this style, hope they can bring you a colourful mood in the hot summer.",
                "longdescription":"RazMaz brand consistently adheres to the leading design concepts and innovation style, follows the world fashion trend. RazMaz focuses on the fashion of your life. We design each of our glasses with style, comfort and spirituality in mind to fit your lifestyle. There is truly a story behind everyone's eyes and we take pride in creating beautiful eyewear that only protects but showcases the mystery of your eyes. RazMaz sunglasses have therefore been designed to be extremely lightweight.",
                "price":2600,
                "quantity":10,
                "rating":0,
                "review":[],
                "count":0
              },
              {
                //9
                "imageurl":"https://images-na.ssl-images-amazon.com/images/I/5154VKbhZSL._UL1038_.jpg",
                "id":"g9",
                "title":"Younky Uv Protected Combo Of 3 Round Men's, Women's, Boy's, Girl's Sunglasses - (Ynk-Rgrn-Rslvr-Rblu|55|Silver)",
                "shortdescription":"Younky Unisex Combo Offer Pack of UV Protected Round Stylish Mercury Sunglasses For Men Women Boys & Girls ( RGrn-RSlvr-RBlu|55|SIlver ) - 3 Sunglass Case.",
                "longdescription":"It Is The Most Commonly Used Style Amongst All Age Groups Especially Youngsters, Younky Sunglasses And Eyewear Comes With The Radically New Shape And Gave The Frame A Masculine Look, And Have A Distinctive Metal Frame With Sturdy Temple Arms.",
                "price":2500,
                "quantity":10,
                "rating":0,
                "review":[],
                "count":0
              },
              {
                //10
                "imageurl":"https://images-na.ssl-images-amazon.com/images/I/61o8%2Bmi7DZL._UL1500_.jpg",
                "id":"g10",
                "title":"Sheomy unisex UV protected cat eye stylish silver mercury sunglasses for men women boys and girls (drssm|55|silver)",
                "shortdescription":"This range of exclusive Sheomy goggles shades is going to be your perfect companion this season. Be it for the party, outdoors, office, driving or you just wanna say hello to the scorching sun",
                "longdescription":"Sheomy unisex UV protected cat eye stylish silver mercury sunglasses for men women boys and girls ( drssm|55|silver ) - 1 sunglass case and material used: lightweight cellulose acetate, beta-titanium material used to make the finest frame, so that you never compromise on quality",
                "price":210,
                "quantity":10,
                "rating":0,
                "review":[],
                "count":0
              }
            ],
            "watch" : [
              {
                // 1
                "imageurl":"https://images-na.ssl-images-amazon.com/images/I/71pdoQ57YpL._UL1500_.jpg",
                "id":"w1",
                "title":"Fastrack Analog Dial Women's Watch (Pink, 6150SM04)-NK6150SM04",
                "shortdescription":"BrandFastrack Case Length 36.00 Case Thickness 7.50 Case Width 30.00 GenderWomen",
                "longdescription":"Brand FastTrack Case Length 36.00 Case Thickness 7.50 Case Width 30.00 Gender Women Movement Type Time Module - Y121TE Product Watches Strap Color Silver Strap Material Stainless Steel Battery Composition Lithium Dial Color Pink Function Type Plain 3 Hands Glass .",
                "price":1520,
                "quantity":10,
                "rating":0,
                "review":[],
                "count":0
              },
              {
                //2
                "imageurl":"https://images-na.ssl-images-amazon.com/images/I/81tsUDpWNIL._UL1500_.jpg",
                "id":"w2",
                "title":"Fastrack Analog Silver Dial Women's Watch -NK6112SM01",
                "shortdescription":"Dial Color: Silver, Case Shape: Round, Dial Glass Material: Mineral",
                "longdescription":"3ATM/30m Water Resistance. Metal strap. Stainless steel back cover. Quartz analogue movement.",
                "price":3000,
                "quantity":10,
                "rating":0,
                "review":[],
                "count":0
              },
              {
                //3
                "imageurl":"https://images-na.ssl-images-amazon.com/images/I/81p8i1VJVcL._UL1500_.jpg",
                "id":"w3",
                "title":"Fastrack Beach Upgrades Analog White Dial Women's Watch -NK9827PP07",
                "shortdescription":"Dial Color: White, Case Shape: Round, Dial Glass Material: Mineral",
                "longdescription":"Fastrack has stood the test of time and lived on to become one of the most popular watch lines in the country. It matured into an independent accessory brand in 2005. Targeted towards the youth and playing on contemporary fashion, it forayed into making sunglasses in 2005. Later in 2009, the brand started manufacturing bags, belts and wallets. Fastrack watches are a fantastic combination of style and utility. The chic designs are a rage among the youth. ",
                "price":1660,
                "quantity":10,
                "rating":0,
                "review":[],
                "count":0
              },
              {
                //4
                "imageurl":"https://images-na.ssl-images-amazon.com/images/I/61a5-fD%2BxWL._UL1100_.jpg",
                "id":"w4",
                "title":"Sonata Everyday Analog Black Dial Women's Watch -NK8085SM01",
                "shortdescription":"Dial Color: Black, Case Shape: Oval, Dial Glass Material: Mineral",
                "longdescription":"Sonata women's analog watch caters to your daily accessorizing needs. Enclosed in a stainless steel case, the women's analog watch displays time clearly and brightly on its contrast black dial. Displaying accurate time to the second with its three-hand format, this oval watch is designed for regular time-keeping.",
                "price":875,
                "quantity":10,
                "rating":0,
                "review":[],
                "count":0
              },
              {
                //5
                "imageurl":"https://images-na.ssl-images-amazon.com/images/I/81ogK47WDEL._UL1500_.jpg",
                "id":"w5",
                "title":"Sonata Fashion Fibre Analog Black Dial Women's Watch -NJ8992PP02C",
                "shortdescription":"Sonata offers stylish and contemporary designs that adds an element of preciousness to all special occasions.",
                "longdescription":"The sophisticated Sonata collection takes pride in its exquisite range of more than 600 exclusive designs. There is a timepiece for every individual, every mood and all the occasions. Be it the Eva Collection for the fashionable and formal working women or the gold collection for those who take pride in the royalty and tradition of the precious element gold. While the smart and elegant steel collection appeals to all, the sporty and adventurous designs of Super Fibre matches the wild spirit of youth.",
                "price":555,
                "quantity":10,
                "rating":0,
                "review":[],
                "count":0
              },
              {
                //6
                "imageurl":"https://cdn.shopify.com/s/files/1/0027/5536/2879/products/Native_Silver_Nylon_PV_GB_540x.jpg?v=1536319398",
                "id":"w6",
                "title":"Nordgreen Native Silver Navy Blue Leather 40MM",
                "shortdescription":"Minimalist Scandinavian designer watch designed by Jakob Wagner",
                "longdescription":"Nordgreen, a Scandinavian watch brand born in Copenhagen, has worked tirelessly to ensure that the values of the Scandinavian people are incorporated within their watches. To achieve this, Nordgreen has partnered with the renowned Jakob Wagner, who has worked with some of the leading global household brands such as Bang and Olufsen, Cappellini, and Moroso to name just a few. An important element of a Copenhagen's values are sustainability.",
                "price":14499,
                "quantity":10,
                "rating":0,
                "review":[],
                "count":0
              },
              {
                //7
                "imageurl":"https://images-na.ssl-images-amazon.com/images/I/81xMRp8IyAL._UL1500_.jpg",
                "id":"w7",
                "title":"Titan Neo Analog Black Dial Men's Watch-NK1730SL02",
                "shortdescription":"Dial Color: Black, Case Shape: Round, Dial Glass Material: Mineral",
                "longdescription":"This analog watch for men has patterned brown dial enclosed within a round, metal case, the dial displays plain three hands and has date function, the combination of arabic numerals and long vertical minute markings ensure easy time reading, the watch features brown leather strap fastened by buckle and a water resistance of 5 atm, it also comes with a 24-month warranty, this is the watch you grab without thinking twice since it pairs effortlessly with just about everything you already own.",
                "price":2595,
                "quantity":10,
                "rating":0,
                "review":[],
                "count":0
              },
              {
                //8
                "imageurl":"https://images-na.ssl-images-amazon.com/images/I/81TjkJjomzL._UL1500_.jpg",
                "id":"w8",
                "title":"Titan Karishma Analog Black Dial Men's Watch -NH9151SM02A",
                "shortdescription":"Dial Color: Black, Case Shape: Rectangular, Dial Glass material: Mineral",
                "longdescription":"The Titan Company Ltd. is a world renowned designer and manufacturer of accessories like watches, sunglasses, wallets, bags, belts, and so on. It was actually a joint venture between the Tata Group, and the Tamil Nadu Industrial Development Corporation. This brand has very well become the world's fifth largest manufacturer of wrist watches. Fastrack, Edge, Sonata, Xylys, Titan Eye+, Raga, Goldplus, Zoya, Octane and Tanishq are some of the famous sub brands of Titan.",
                "price":1835,
                "quantity":10,
                "rating":0,
                "review":[],
                "count":0
              },
              {
                //9
                "imageurl":"https://images-na.ssl-images-amazon.com/images/I/91gTdmnM03L._UL1500_.jpg",
                "id":"w9",
                "title":"Titan Neo Analog Grey Dial Men's Watch-1733BM01",
                "shortdescription":"Dial Color: Grey, Case Shape: Round, Dial Glass Material: Mineral",
                "longdescription":"Men's watches are often worn as style adornments. Whether you are an office goer, a college going teenager or an established man, you cannot deny the satisfaction you get after donning the attractive timepiece on your wrist. The straps are usually made from different materials like fabric, leather, jewel, metal and such. Choose a strap material based on your comfort and one that complements your skin tone.",
                "price":5495,
                "quantity":10,
                "rating":0,
                "review":[],
                "count":0
              },
              {
                //10
                "imageurl":"https://images-na.ssl-images-amazon.com/images/I/914jo-J-xyL._UL1500_.jpg",
                "id":"w10",
                "title":"Titan Neo Analog Black Dial Men's Watch-1729SL02",
                "shortdescription":"Cognizant of the latest trends in design, the Workwear collection offers timepieces crafted in elegant designs, superior aesthetic appeal and supreme comfort.",
                "longdescription":"This analog watch for men has patterned silver dial enclosed within a round, metal case, the dial displays plain three hands and has date function, the combination of arabic numerals and long vertical minute markings ensure easy time reading, the watch features black leather strap fastened by buckle and a water resistance of 5 atm, it also comes with a 24-month warranty, this is a must have watch for men to mark every momentous occasion of life.",
                "price":1835,
                "quantity":10,
                "rating":0,
                "review":[],
                "count":0
              }
            ],
          }
        ],

        "clothing": [
          {
            "men" : [
              {
                "shirt" : [
                  {
                    //This is Details of Product 1
                    "imageurl":"https://images-na.ssl-images-amazon.com/images/I/31Emc%2BVUBrL.jpg",
                    "id":"ms1",
                    "title":"Vivi Polo T-Shirt with Contrast Collor in Stylish Pattern for Men",
                    "shortdescription":"Care Instructions: Machine Wash, Hand Wash",
                    "longdescription":"Put on this VIVI men’s Polo T-shirt to keep your style looking fresh. The unique and stylish flag motif on the body is easily distinguishable and eye-catching, while its fabric makes it an epitome of comfort. The short sleeves and Polo make it the perfect pick for summer dressing. Consult the size chart to ensure your best fit.",
                    "price":800,
                    "quantity":10,
                    "rating":0,
                    "review":[],
                    "count":0
                  },
                  {
                    //2
                    "imageurl":"https://images-na.ssl-images-amazon.com/images/I/81lZVkzrBmL._UL1500_.jpg",
                    "id":"ms2",
                    "title":"United Colors of Benetton Men's Solid Regular Fit Cotton Polo",
                    "shortdescription":"A cult garment in casual style, the Benetton polo shirt is an icon in men's fashion that has been revamped every season since 1965.",
                    "longdescription":"In solid color models, the polo shirts are a solid alternative to t-shirts and shirts. It's essential to have at least one classic polo shirt with a button-down collar, clashing edges and an embroidered logo, paired with cargo trousers and suede shoes. On the other hand, if you prefer more daring and casual models, opt for stripes, patches or allover print, best when worn with bermudas and trainers.",
                    "price":1299,
                    "quantity":10,
                    "rating":0,
                    "review":[],
                    "count":0
                  },
                  {
                    //3
                    "imageurl":"https://images-na.ssl-images-amazon.com/images/I/91nBe89msDL._UL1500_.jpg",
                    "id":"ms3",
                    "title":"Van Heusen Men's Solid Regular Fit Polo",
                    "shortdescription":"The best tees are simple, relaxed and stylish, which is why the design is such a classic",
                    "longdescription":"Van Heusen Polos are available in various fabrics, jerseys, pique, interlock made out of soft long staple cotton fibre giving them a softhand feel. Available in solids,stripes, engineered and abstract patterns spread over an array of colours, you will always find something suited to the occasion.",
                    "price":900,
                    "quantity":10,
                    "rating":0,
                    "review":[],
                    "count":0
                  },
                  {
                    //4
                    "imageurl":"https://images-na.ssl-images-amazon.com/images/I/81rPx-IXsxL._UL1500_.jpg",
                    "id":"ms4",
                    "title":"Van Heusen Men's Printed Slim Fit Polo",
                    "shortdescription":"The best tees are simple, relaxed and stylish, which is why the design is such a classic",
                    "longdescription":"Unwind on leisure day in style with this smart top, crafted from light, breathable cotton blend in a versatile shade, it makes the perfect addition to your casual wardrobe, team with basic jeans, suede shoes and big dial watch for an evening outing with friends, inches.",
                    "price":1899,
                    "quantity":10,
                    "rating":0,
                    "review":[],
                    "count":0
                  },
                  {
                    //5
                    "imageurl":"https://images-na.ssl-images-amazon.com/images/I/81HNqGfST6L._UL1500_.jpg",
                    "id":"ms5",
                    "title":"Van Heusen Men's Printed Slim Fit Polo",
                    "shortdescription":"The best tees are simple, relaxed and stylish, which is why the design is such a classic",
                    "longdescription":"Unwind on leisure day in style with this smart top, crafted from light, breathable cotton blend in a versatile shade, it makes the perfect addition to your casual wardrobe, team with basic jeans, suede shoes and big dial watch for an evening outing with friends, inches.",
                    "price":1399,
                    "quantity":10,
                    "rating":0,
                    "review":[],
                    "count":0
                  },
                  {
                    //6
                    "imageurl":"https://images-na.ssl-images-amazon.com/images/I/81TDF1v-SAL._UL1500_.jpg",
                    "id":"ms6",
                    "title":"Van Heusen Men's Printed Slim Fit Polo",
                    "shortdescription":"The best tees are simple, relaxed and stylish, which is why the design is such a classic.",
                    "longdescription":"Unwind on leisure day in style with this smart top, crafted from light, breathable cotton blend in a versatile shade, it makes the perfect addition to your casual wardrobe, team with basic jeans, suede shoes and big dial watch for an evening outing with friends, inches.",
                    "price":950,
                    "quantity":10,
                    "rating":0,
                    "review":[],
                    "count":0
                  },
                  {
                    //7
                    "imageurl":"https://images-na.ssl-images-amazon.com/images/I/81ckHPm0SiL._UL1500_.jpg",
                    "id":"ms7",
                    "title":"Van Heusen Men's Polo",
                    "shortdescription":"The best tees are simple, relaxed and stylish, which is why the design is such a classic. This brand ticks all the right boxes with this version.",
                    "longdescription":"The best tees are simple, relaxed and stylish, which is why the design is such a classic. This brand ticks all the right boxes with this version. The minimal detailing, flattering fit and fine cotton fabric ensure it will be a weekend favourite. Throw it on with indigo denim and sneakers for a stroll into town, or monochrome and add a leather jacket for a bit more attitude.",
                    "price":1000,
                    "quantity":10,
                    "rating":0,
                    "review":[],
                    "count":0
                  },
                  {
                    //8
                    "imageurl":"https://images-na.ssl-images-amazon.com/images/I/91eJT1K7IoL._UX569_.jpg",
                    "id":"ms8",
                    "title":"Van Heusen Men's Striped Regular Fit T-Shirt",
                    "shortdescription":"The best tees are simple, relaxed and stylish, which is why the design is such a classic. This brand ticks all the right boxes with this version.",
                    "longdescription":"The best tees are simple, relaxed and stylish, which is why the design is such a classic. This brand ticks all the right boxes with this version. The minimal detailing, flattering fit and fine cotton fabric ensure it will be a weekend favourite. Throw it on with indigo denim and sneakers for a stroll into town, or monochrome and add a leather jacket for a bit more attitude.",
                    "price":900,
                    "quantity":10,
                    "rating":0,
                    "review":[],
                    "count":0
                  },
                  {
                    //9
                    "imageurl":"https://images-eu.ssl-images-amazon.com/images/I/51eMxOIWYZL._AC_UL390_SR300,390_FMwebp_QL65_.jpg",
                    "id":"ms9",
                    "title":"Allen Solly Men's Polo",
                    "shortdescription":"Wash with mild detergent, do not bleach, dry in shade",
                    "longdescription":"Allen Solly was the First Brand to introduce Uncrushable in India– a innovative range of wrinkle- free shirts and trousers in unconventional 'solids' palette.",
                    "price":899,
                    "quantity":10,
                    "rating":0,
                    "review":[],
                    "count":0
                  },
                  {
                    //10
                    "imageurl":"https://images-na.ssl-images-amazon.com/images/I/81YhKOEZAQL._UL1500_.jpg",
                    "id":"ms10",
                    "title":"Allen Solly Men's Printed Regular Fit Polo",
                    "shortdescription":"Allen Solly pink prints t-shirt. This product is made of the most comfortable and high-quality fabric",
                    "longdescription":"Machine wash warm with similar colours, gentle cycle, do not bleach, do not wring, flat dry in shade, warm iron, do not iron on print",
                    "price":1599,
                    "quantity":10,
                    "rating":0,
                    "review":[],
                    "count":0
                  }
                ],
                "pant" : [
                  {
                    //This is Details of Product 1
                    "imageurl":"https://images-na.ssl-images-amazon.com/images/I/71vdopEovDL._UL1405_.jpg",
                    "id":"mp1",
                    "title":"Ben Martin Men's Regular Fit Denim Jeans",
                    "shortdescription":"Directly From Manufacturer To Buyer At Lowest Cost Possible.",
                    "longdescription":"Ben Martin men's branded denim jeans created with passion,dedication,hard work and most of all creativity to carve out a masterpiece.",
                    "price":2998,
                    "quantity":10,
                    "rating":0,
                    "review":[],
                    "count":0
                  },
                  {
                    //2
                    "imageurl":"https://images-na.ssl-images-amazon.com/images/I/61Ahqp-jEvL._UL1024_.jpg",
                    "id":"mp2",
                    "title":"Ben Martin Men's Regular Fit Denim Jeans",
                    "shortdescription":"Directly From Manufacturer To Buyer At Lowest Cost Possible.",
                    "longdescription":"Ben Martin men's branded denim jeans created with passion,dedication,hard work and most of all creativity to carve out a masterpiece.",
                    "price":1799,
                    "quantity":10,
                    "rating":0,
                    "review":[],
                    "count":0
                  },
                  {
                    //3
                    "imageurl":"https://images-na.ssl-images-amazon.com/images/I/7170eNskasL._UL1405_.jpg",
                    "id":"mp3",
                    "title":"Ben Martin Men's Denim Regular Fit Jeans",
                    "shortdescription":"Directly From Manufacturer To Buyer At Lowest Cost Possible.",
                    "longdescription":"Ben Martin men's branded denim jeans created with passion,dedication,hard work and most of all creativity to carve out a masterpiece.",
                    "price":2499,
                    "quantity":10,
                    "rating":0,
                    "review":[],
                    "count":0
                  },
                  {
                    //4
                    "imageurl":"https://images-na.ssl-images-amazon.com/images/I/61Gvg7wkexL._UL1405_.jpg",
                    "id":"mp4",
                    "title":"Ben Martin Men's Denim Regular Fit Jeans",
                    "shortdescription":"Denim jeans. Wash care instructions : do not bleach, dry in shade",
                    "longdescription":"Ben Martin men's branded denim jeans created with passion, dedication, hard work and most of all creativity to carve out a masterpiece.",
                    "price":2499,
                    "quantity":10,
                    "rating":0,
                    "review":[],
                    "count":0
                  },
                  {
                    //5
                    "imageurl":"https://images-na.ssl-images-amazon.com/images/I/61bRvUc4EVL._UL1405_.jpg",
                    "id":"mp5",
                    "title":"Ben Martin Men's Regular Fit Denim Jeans(BMW-JNS-.WHITEnew)",
                    "shortdescription":"Casual Wear.Material : Denim Jeans. Wash Care Instructions : Do Not Bleach",
                    "longdescription":"This men's jeans is made with 100% pre-shrunk and pill-resistant cotton. Fine, very stretchy. Still perfect fit even after the wash",
                    "price":2998,
                    "quantity":10,
                    "rating":0,
                    "review":[],
                    "count":0
                  },
                  {
                    //6
                    "imageurl":"https://images-na.ssl-images-amazon.com/images/I/71BF%2BshH0vL._UL1500_.jpg",
                    "id":"mp6",
                    "title":"Ben Martin's Men's Regular Fit Denim Joggers",
                    "shortdescription":"Ben Martin's Regular Fit Denim Jogger for Men's is crafted from Denim and is dark blue in colour. It is made of soft fabric that lets you be at ease all day.",
                    "longdescription":"Ben Martin's Regular Fit Denim Jogger for Men's is crafted from Denim and is dark blue in colour. It is made of soft fabric that lets you be at ease all day.",
                    "price":2699,
                    "quantity":10,
                    "rating":0,
                    "review":[],
                    "count":0
                  },
                  {
                    //7
                    "imageurl":"https://images-na.ssl-images-amazon.com/images/I/61ELAf0ZLcL._UL1024_.jpg",
                    "id":"mp7",
                    "title":"McHenry Men's Poly Viscose Regular Fit Solid Formal Trousers",
                    "shortdescription":"McHenry Men's Regular Fit Formal Trouser comes with an excellent fall of the fabric which enhances your outlook",
                    "longdescription":"We have a constant eye on what's trending in today's market and design accordingly. McHenry includes an amazing range of formal wear. Our formal trousers for men regular fit are quite comfortable to wear and are skin friendly as well like our chinos trousers. These cotton formal trousers for men will make you stand out in the crowd",
                    "price":1999,
                    "quantity":10,
                    "rating":0,
                    "review":[],
                    "count":0
                  },
                  {
                    //8
                    "imageurl":"https://images-na.ssl-images-amazon.com/images/I/612YDUsbv1L._UL1024_.jpg",
                    "id":"mp8",
                    "title":"BEEVEE Men's Cotton Regular Fit Cargo Pants",
                    "shortdescription":"Care Instructions: Hand wash cold water, dry naturally, do not iron imprint directly, do not bleach",
                    "longdescription":"Shop from the regular range of BEEVEE Men's Cargo Pants today. It comes in a solid pattern and has been crafted from cotton.",
                    "price":1329,
                    "quantity":10,
                    "rating":0,
                    "review":[],
                    "count":0
                  },
                  {
                    //9
                    "imageurl":"https://images-na.ssl-images-amazon.com/images/I/61WKk7zVQ6L._UL1024_.jpg",
                    "id":"mp9",
                    "title":"Verticals Stylish and Trendy Dori Style Cargo Jogger Pants for Men (plaindori-2)",
                    "shortdescription":"Nation Polo Club Men's Slim Fit Cotton Lycra Blend Casual Trouser",
                    "longdescription":"Cargo Joggers are just the perfect combination of trendy and comfort! Style yours with any shirt or t-shirt and we guarantee you will be rolling in compliments real quick! Grab yours now!",
                    "price":1000,
                    "quantity":10,
                    "rating":0,
                    "review":[],
                    "count":0
                  },
                  {
                    //10
                    "imageurl":"https://images-na.ssl-images-amazon.com/images/I/719UwVmrivL._UL1500_.jpg",
                    "id":"mp10",
                    "title":"Nation Polo Club Men's Slim Fit Cotton Lycra Blend Casual Trouser",
                    "shortdescription":"The casual trousers feature a tapered look along with a slim fit which enhances the style and look of the outfit.",
                    "longdescription":"Nation Polo brings to you this casual trousers which is made from cotton and lycra blended fabric and is available in attractive colours. This fabric has been designed keeping in mind the latest trends in casual fashion.",
                    "price":900,
                    "quantity":10,
                    "rating":0,
                    "review":[],
                    "count":0
                  }
                ]
              }
            ],

            "women" : [
              {
                "shirt" : [
                  {
                    //This is Details of Product 1
                    "imageurl":"https://images-na.ssl-images-amazon.com/images/I/614SCFNJ2eL._UL1467_.jpg",
                    "id":"ws1",
                    "title":"Femninora Women's Maroon Color Full Sleeves Formal Shirt",
                    "shortdescription":"This shirt runs true to size. We recommend going one size up for backup (see following fit notes for exceptions). Bust: Works best for A to C cup Sizes( Fitted at bust). Waist: Fitted, comfortable throughout midsection Hips: Fitted, Curvier women should consider sizing up for full hips Length: Hip Length Fabric: Fabric has no stretch",
                    "longdescription":"This shirt runs true to size. We recommend going one size up for backup (see following fit notes for exceptions). Bust: Works best for A to C cup Sizes( Fitted at bust). Waist: Fitted, comfortable throughout midsection Hips: Fitted, Curvier women should consider sizing up for full hips Length: Hip Length Fabric: Fabric has no stretch",
                    "price":899,
                    "quantity":10,
                    "rating":0,
                    "review":[],
                    "count":0
                  },
                  {
                    //2
                    "imageurl":"https://images-na.ssl-images-amazon.com/images/I/317g1-PCF3L.jpg",
                    "id":"ws2",
                    "title":"GARMR Women Plain Orange 100% Cotton Solid Formal Shirt",
                    "shortdescription":"This Formal Wear Shirt Has Been Made With A Perfect Blend Of Cotton . We Have Made Sure That It Matches With Your Comfort Level In All The Seasons Through Out The Year. You Can Wear This Shirt To A Party, To A Wedding, To An Engagement Function Or Any Other Casual Occasions. ",
                    "longdescription":"This Formal Wear Shirt Has Been Made With A Perfect Blend Of Cotton . We Have Made Sure That It Matches With Your Comfort Level In All The Seasons Through Out The Year. You Can Wear This Shirt To A Party, To A Wedding, To An Engagement Function Or Any Other Casual Occasions. ",
                    "price":799,
                    "quantity":10,
                    "rating":0,
                    "review":[],
                    "count":0
                  },
                  {
                    //3
                    "imageurl":"https://images-na.ssl-images-amazon.com/images/I/61ojoAN4Z%2BL._UL1500_.jpg",
                    "id":"ws3",
                    "title":"GARMR Women Royal Blue 100% Cotton Solid Formal Shirt",
                    "shortdescription":"This Formal Wear Shirt Has Been Made With A Perfect Blend Of Cotton . We Have Made Sure That It Matches With Your Comfort Level In All The Seasons Through Out The Year. You Can Wear This Shirt To A Party, To A Wedding, To An Engagement Function Or Any Other Casual Occasions.",
                    "longdescription":"This Formal Wear Shirt Has Been Made With A Perfect Blend Of Cotton . We Have Made Sure That It Matches With Your Comfort Level In All The Seasons Through Out The Year. You Can Wear This Shirt To A Party, To A Wedding, To An Engagement Function Or Any Other Casual Occasions.",
                    "price":1000,
                    "quantity":10,
                    "rating":0,
                    "review":[],
                    "count":0
                  },
                  {
                    //4
                    "imageurl":"https://images-na.ssl-images-amazon.com/images/I/61SmGvdXi7L._UL1500_.jpg",
                    "id":"ws4",
                    "title":"Leriya Fashion Long Sleeve Casual Shirt for Women, Girls",
                    "shortdescription":"Trendy and appealing, this shirt from Leriya Fashion's exclusive collection will surely impress fashionable women. This shirt will surely add unique charm to your casual as well as party look. Made from soft fabric, this top will help you stay relaxed all day long.",
                    "longdescription":"Trendy and appealing, this shirt from Leriya Fashion's exclusive collection will surely impress fashionable women. This shirt will surely add unique charm to your casual as well as party look. Made from soft fabric, this top will help you stay relaxed all day long.",
                    "price":799,
                    "quantity":10,
                    "rating":0,
                    "review":[],
                    "count":0
                  },
                  {
                    //5
                    "imageurl":"https://images-na.ssl-images-amazon.com/images/I/61NPP2GjqzL._UL1024_.jpg",
                    "id":"ws5",
                    "title":"Mallory Winston Navy Stripe Balloon Top.",
                    "shortdescription":"Mallory Winston woven navy and white stripe print balloon top with gathers, has color, front placket, three-quarter sleeve, cuff placket with buttons and elastic at bottom this design you can use for party wear, occasions and casually.",
                    "longdescription":"Mallory Winston woven navy and white stripe print balloon top with gathers, has color, front placket, three-quarter sleeve, cuff placket with buttons and elastic at bottom this design you can use for party wear, occasions and casually.",
                    "price":999,
                    "quantity":10,
                    "rating":0,
                    "review":[],
                    "count":0
                  },
                  {
                    //6
                    "imageurl":"https://images-na.ssl-images-amazon.com/images/I/61ZNEnjhiXL._UL1500_.jpg",
                    "id":"ws6",
                    "title":"Mayra Women's Rayon Shirt",
                    "shortdescription":"Look timelessly stylish at a casual occasion wearing this shirt for women from Mayra. Tailored from fabric, this shirt ensures excellent comfort, all day long. This button down shirt can be teamed with a pair of skinny jeans and low ankle-length boots to flaunt an ever-trendy look.",
                    "longdescription":"Look timelessly stylish at a casual occasion wearing this shirt for women from Mayra. Tailored from fabric, this shirt ensures excellent comfort, all day long. This button down shirt can be teamed with a pair of skinny jeans and low ankle-length boots to flaunt an ever-trendy look.",
                    "price":995,
                    "quantity":10,
                    "rating":0,
                    "review":[],
                    "count":0
                  },
                  {
                    //7
                    "imageurl":"https://images-na.ssl-images-amazon.com/images/I/61Q%2BI3Byg9L._UL1496_.jpg",
                    "id":"ws7",
                    "title":"DAMEN MODE Women's Cotton Check Shirt",
                    "shortdescription":"Damen mode presents a complete fashion wardrobe that complements every facet of your personality at work, when you are relaxed, while you party and for those special occasions. Discover a tempting range of work wear, relaxed wear, club wear and fashion accessories.",
                    "longdescription":"Damen mode presents a complete fashion wardrobe that complements every facet of your personality at work, when you are relaxed, while you party and for those special occasions. Discover a tempting range of work wear, relaxed wear, club wear and fashion accessories.",
                    "price":1000,
                    "quantity":10,
                    "rating":0,
                    "review":[],
                    "count":0
                  },
                  {
                    //8
                    "imageurl":"https://images-na.ssl-images-amazon.com/images/I/71jVg8sX7QL._UL1500_.jpg",
                    "id":"ws8",
                    "title":"QueenShield Women's Formal & Casual 3/4th Sleeves White Shirt for Office Wear",
                    "shortdescription":"While some women follow fashion, others set trends. However, when it comes to contemporary women, every now and then they crave for new style; be it a housewife or a working women or a college going girl, each one of them has her own sense and definition of fashion. ",
                    "longdescription":"While some women follow fashion, others set trends. However, when it comes to contemporary women, every now and then they crave for new style; be it a housewife or a working women or a college going girl, each one of them has her own sense and definition of fashion. ",
                    "price":799,
                    "quantity":10,
                    "rating":0,
                    "review":[],
                    "count":0
                  },
                  {
                    //9
                    "imageurl":"https://images-na.ssl-images-amazon.com/images/I/71sAwZhIFlL._UL1500_.jpg",
                    "id":"ws9",
                    "title":"MIZAGO Women's Casual Long Sleeves Shirt",
                    "shortdescription":"If you are looking for a unique and trendy casual shirt for women, then you must pick this trendy solid color formal shirt for women/girls from Mizago. A must-have in your wardrobe, this regular-fit Casual Shirt for Women is made from Rayon that makes it easy to maintain. ",
                    "longdescription":"If you are looking for a unique and trendy casual shirt for women, then you must pick this trendy solid color formal shirt for women/girls from Mizago. A must-have in your wardrobe, this regular-fit Casual Shirt for Women is made from Rayon that makes it easy to maintain. ",
                    "price":799,
                    "quantity":10,
                    "rating":0,
                    "review":[],
                    "count":0
                  },
                  {
                    //10
                    "imageurl":"https://images-na.ssl-images-amazon.com/images/I/817IoCMeSlL._UL1500_.jpg",
                    "id":"ws10",
                    "title":"dazzio Women Orange Formal Shirt",
                    "shortdescription":"Dazzio Women Orange Formal Shirt",
                    "longdescription":"Dazzio Women Orange Formal Shirt",
                    "price":900,
                    "quantity":10,
                    "rating":0,
                    "review":[],
                    "count":0
                  }
                ],
                "pant" : [
                  {
                    //This is Details of Product 1
                    "imageurl":"https://images-na.ssl-images-amazon.com/images/I/513imnW-m-L._UL1024_.jpg",
                    "id":"wp1",
                    "title":"Broadstar Women Denim Black Jeans",
                    "shortdescription":"Take A More Relaxed Approach Towards Fashion Wearing These Colored Jeans From The House Of Broadstar. Made Of High Quality, These Jeans Will Keep You Comfortable The Entire Day. Club These Jeans With A Shirt And Peep Toes For A Stunning Look. A Stylish Enhance Your Class, These Jeans Are Perfect For Special Outing As Well As Party Also, And This Jeans Are Stretchable And Soft Against The Skin.",
                    "longdescription":"Take A More Relaxed Approach Towards Fashion Wearing These Colored Jeans From The House Of Broadstar. Made Of High Quality, These Jeans Will Keep You Comfortable The Entire Day. Club These Jeans With A Shirt And Peep Toes For A Stunning Look. A Stylish Enhance Your Class, These Jeans Are Perfect For Special Outing As Well As Party Also, And This Jeans Are Stretchable And Soft Against The Skin.",
                    "price":990,
                    "quantity":10,
                    "rating":0,
                    "review":[],
                    "count":0
                  },
                  {
                    //2
                    "imageurl":"https://images-na.ssl-images-amazon.com/images/I/510EXC6iLvL._UL1024_.jpg",
                    "id":"wp2",
                    "title":"Broadstar Women Denim Light Blue Jeans",
                    "shortdescription":"Take A More Relaxed Approach Towards Fashion Wearing These Colored Jeans From The House Of Broadstar. Made Of High Quality, These Jeans Will Keep You Comfortable The Entire Day.",
                    "longdescription":"Club These Jeans With A Shirt And Peep Toes For A Stunning Look. A Stylish Enhance Your Class, These Jeans Are Perfect For Special Outing As Well As Party Also, And This Jeans Are Stretchable And Soft Against The Skin.",
                    "price":1999,
                    "quantity":10,
                    "rating":0,
                    "review":[],
                    "count":0
                  },
                  {
                    //3
                    "imageurl":"https://images-na.ssl-images-amazon.com/images/I/61wVCV%2BQdUL._UL1400_.jpg",
                    "id":"wp3",
                    "title":"Jaipur Kurti Women's Palazzo Bottom",
                    "shortdescription":"An amazing range of women pants and palazzos in soft and solid colors that looks perfect for regular wear. With beautiful designs and patterns. These apparels are very stylish and comfortable too. Get rid of the 'regular' look this season wearing trousers and palazzos by Jaipur kurti.",
                    "longdescription":"An amazing range of women pants and palazzos in soft and solid colors that looks perfect for regular wear. With beautiful designs and patterns. These apparels are very stylish and comfortable too. Get rid of the 'regular' look this season wearing trousers and palazzos by Jaipur kurti. Showcasing formal as well as casual off: white slub cotton trouser pants, which goes well with both the tops as well as kurtas. And gives a smart and classy look. Pant length: 38 inches. Washing and care instructions: it is recommended to hand wash the product separately or wash with similar colors apparels.",
                    "price":1299,
                    "quantity":10,
                    "rating":0,
                    "review":[],
                    "count":0
                  },
                  {
                    //4
                    "imageurl":"https://images-na.ssl-images-amazon.com/images/I/61cFwj8Tv-L._UL1500_.jpg",
                    "id":"wp4",
                    "title":"Marie Claire Women's Straight Casual Trouser (MC688-M, Blue and White, Medium)",
                    "shortdescription":"Navy and white striped mid-rise peg trousers, has a partially elasticated waistband, 2 pockets, belt loops",
                    "longdescription":"Navy and white striped mid-rise peg trousers, has a partially elasticated waistband, 2 pockets, belt loops",
                    "price":1400,
                    "quantity":10,
                    "rating":0,
                    "review":[],
                    "count":0
                  },
                  {
                    //5
                    "imageurl":"https://images-na.ssl-images-amazon.com/images/I/61w-Q6n3CAL._UL1440_.jpg",
                    "id":"wp5",
                    "title":"Jaipur Kurti Women's Turquoise Blue Solid Cotton Slub Pants",
                    "shortdescription":"Jaipur Kurti Women's Turquoise Blue Solid Cotton Slub Pants. This Cotton Slub pants are Solid in pattern & Regular fit.",
                    "longdescription":"Jaipur Kurti Women's Turquoise Blue Solid Cotton Slub Pants. This Cotton Slub pants are Solid in pattern & Regular fit.",
                    "price":1100,
                    "quantity":10,
                    "rating":0,
                    "review":[],
                    "count":0
                  },
                  {
                    //6
                    "imageurl":"https://images-na.ssl-images-amazon.com/images/I/61EYccGZoOL._UL1440_.jpg",
                    "id":"wp6",
                    "title":"Jaipur Kurti Women's Cotton Casual Trouser",
                    "shortdescription":"Jaipur Kurti Women's Olive Solid Cotton Slub Pants. This Cotton Slub pants are Solid in pattern & Regular fit.",
                    "longdescription":"Jaipur Kurti Women's Olive Solid Cotton Slub Pants. This Cotton Slub pants are Solid in pattern & Regular fit.",
                    "price":1300,
                    "quantity":10,
                    "rating":0,
                    "review":[],
                    "count":0
                  },
                  {
                    //7
                    "imageurl":"https://images-na.ssl-images-amazon.com/images/I/71xUnbGXFSL._UL1440_.jpg",
                    "id":"wp7",
                    "title":"Jaipur Kurti Women's Regular Fit Cotton Pant",
                    "shortdescription":"Jaipur Kurti Women's Grey Solid Cotton Slub Pants. This Cotton Slub pants are Solid in pattern & Regular fit.",
                    "longdescription":"Jaipur Kurti Women's Grey Solid Cotton Slub Pants. This Cotton Slub pants are Solid in pattern & Regular fit.",
                    "price":1300,
                    "quantity":10,
                    "rating":0,
                    "review":[],
                    "count":0
                  },
                  {
                    //8
                    "imageurl":"https://images-na.ssl-images-amazon.com/images/I/71LUPVR5W-L._UL1500_.jpg",
                    "id":"wp8",
                    "title":"ICW New Fashion 2017 Spring Summer Stripes Ankle-Length Pants Trousers Women Skinny Elastic Waist Pencil Pants Pantalon Femme ",
                    "shortdescription":"This product is made from crepe and finished in a attractive white and black color. It features elastic closure and is targeted towards women. Furthermore, it is recommended to be kept away from extreme heat, fire and corrosive liquids to avoid any form of damage.",
                    "longdescription":"This product is made from crepe and finished in a attractive white and black color. It features elastic closure and is targeted towards women. Furthermore, it is recommended to be kept away from extreme heat, fire and corrosive liquids to avoid any form of damage.",
                    "price":500,
                    "quantity":10,
                    "rating":0,
                    "review":[],
                    "count":0
                  },
                  {
                    //9
                    "imageurl":"https://images-na.ssl-images-amazon.com/images/I/81DoQ8kVKzL._UL1500_.jpg",
                    "id":"wp9",
                    "title":"AND Women's Chino Cotton Pants",
                    "shortdescription":"Wash like color separately, wash dry iron inside out, machine wash cold, do not bleach, tumble dry low, medium ",
                    "longdescription":"Wash like color separately, wash dry iron inside out, machine wash cold, do not bleach, tumble dry low, medium ",
                    "price":2500,
                    "quantity":10,
                    "rating":0,
                    "review":[],
                    "count":0
                  },
                  {
                    //10
                    "imageurl":"https://images-na.ssl-images-amazon.com/images/I/61lrp%2BUbvIL._UL1280_.jpg",
                    "id":"wp10",
                    "title":"Annabelle By Pantaloons Women's Slim Pants",
                    "shortdescription":"Navy coloured trousers for women made out of poly rayon spandex fabric featuring a slim fit with solid pattern all over perfect for a formal.",
                    "longdescription":"Navy coloured trousers for women made out of poly rayon spandex fabric featuring a slim fit with solid pattern all over perfect for a formal.",
                    "price":1299,
                    "quantity":10,
                    "rating":0,
                    "review":[],
                    "count":0
                  }
                ]
              }
            ]
          }
        ]
    }
  ];


  constructor(private http: HttpClient) {

  }
}
