import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WoocommerceService } from 'src/app/services/woocommerce.service';

@Component({
    selector: 'app-tab1',
    templateUrl: 'tab1.page.html',
    styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{


    constructor(private router: Router,
        public wc:WoocommerceService
    ) { }

    // categories = {
    //     "categories": [
    //         "Womens",
    //         "Mobiles",
    //         "Beauty",
    //         "Kids",
    //         "Skin care",
    //         "Home",
    //         "Fashion"
    //     ]
    // };
    slider = [];
    categories = [];

    mobiles = [
        {
            "product_id": 1,
            "productImage": "../../../assets/products/iphone-12-pro-blue-150x150.png",
            "productName": "Apple iPhone 12 32GB",
            "brand": "Apple",
            "shortName": "iPhone 12 32GB",
            "off": 45,
            "productLongDescription": "A14 Bionic, the fastest chip in a smartphone. An edge-to-edge OLED display. Ceramic Shield with four times better drop performance. And Night mode on every camera. iPhone 12 has it all — in two perfect sizes.",
            "productShortDescription": "A14 Bionic, the fastest chip in a smartphone. An edge-to-edge OLED display.",
            "regularPrice": 69000,
            "salesPrice": 69900
        },
        {
            "product_id": 2,
            "productImage": "../../../assets/products/iphone-12-mini-hero-150x150.jpeg",
            "productName": "Apple iPhone 12 Pro  64GB",
            "brand": "Apple",
            "off": 45,
            "shortName": "iPhone 12 Pro 64GB",
            "productLongDescription": "A14 Bionic rockets past every other smartphone chip. The Pro camera system takes low-light photography to the next level — with an even bigger jump on iPhone 12 Pro Max. And Ceramic Shield delivers four times better drop performance. Let’s see what this thing can do.",
            "productShortDescription": "A14 Bionic rockets past every other smartphone chip.",
            "regularPrice": 199000,
            "salesPrice": 119000
        },
        {
            "product_id": 3,
            "productImage": "../../../assets/products/iPhone-SE-2020-Red.jpg?resize=150%2C150&ssl=1",
            "productName": "Apple iPhone SE 32GB",
            "brand": "Apple",
            "off": 53,
            "shortName": "iPhone SE 32GB",
            "productLongDescription": "iPhone SE packs a remarkably powerful chip into our most popular size at our most affordable price. It’s just what you’ve been waiting for.",
            "productShortDescription": "iPhone SE packs a remarkably powerful chip into our most popular size at our most affordable price. ",
            "regularPrice": 39000,
            "salesPrice": 39000
        },
        {
            "product_id": 4,
            "productImage": "../../../assets/products/APPLE-IPHONE-11-PRO-MAX-Midnight-Green-CellucityPhoneHub-150x150.png",
            "productName": "Apple iPhone 11 32GB",
            "brand": "Apple",
            "off": 25,
            "shortName": "iPhone 11 32GB",
            "productLongDescription": "As part of our efforts to reach our environmental goals, iPhone 11 does not include a power adapter or EarPods. Included in the box is a USB‑C to Lightning cable that supports fast charging and is compatible with USB‑C power adapters and computer ports.",
            "productShortDescription": "As part of our efforts to reach our environmental goals, iPhone 11 does not include a power adapter or EarPods.",
            "regularPrice": 54000,
            "salesPrice": 50490
        },
        {
            "product_id": 5,
            "productImage": "../../../assets/products/apple-macbook-pro-silver-7-150x150.jpg",
            "productName": "iMac Intel Xeon 8GB 4K Retina",
            "brand": "Apple",
            "off": 45,
            "shortName": "Apple iMac",
            "productLongDescription": "The all-in-one for all. If you can dream it, you can do it on iMac. It’s beautifully designed, incredibly intuitive and packed with powerful tools that let you take any idea to the next level. And the new 27-inch model elevates the experience in every way, with faster processors and graphics, expanded memory and storage, enhanced audio and video capabilities, and an even more stunning Retina 5K display. It’s the desktop that does it all — better and faster than ever.",
            "productShortDescription": "The all-in-one for all. If you can dream it, you can do it on iMac.",
            "regularPrice": 99000,
            "salesPrice": 99900
        },
        {
            "product_id": 6,
            "productImage": "../../../assets/products/Apple-MacBook-Air-150x150.png",
            "productName": "Apple MacBook Air 128GB SSD",
            "brand": "Apple",
            "off": 15,
            "shortName": "MacBook Air",
            "productLongDescription": "The incredibly thin and light MacBook Air is now more powerful than ever. It features a brilliant Retina display, new Magic Keyboard, Touch ID, processors with up to twice the performance,1 faster graphics and double the storage capacity. The sleek wedge-shaped design is created from 100% recycled aluminium, making it the greenest Mac ever.2 And with all-day battery life, our most popular Mac is your perfectly portable, do-it-all notebook.",
            "productShortDescription": "The incredibly thin and light MacBook Air is now more powerful than ever.",
            "regularPrice": 99090,
            "salesPrice": 92900
        },
        {
            "product_id": 7,
            "productImage": "../../../assets/products/apple-macbook-pro-silver-7-150x150.jpg",
            "productName": "Apple MacBook Pro 512GB SSD",
            "brand": "Apple",
            "off": 22,
            "shortName": "MacBook Pro",
            "productLongDescription": "MacBook Pro elevates the notebook to a whole new level of performance and portability. Wherever your ideas take you, you’ll get there faster than ever with high‑performance processors and memory, advanced graphics, blazing‑fast storage and more — all in a compact 1.4-kilogram package.",
            "productShortDescription": "MacBook Pro elevates the notebook to a whole new level of performance and portability.",
            "regularPrice": 199000,
            "salesPrice": 199000
        }
    ];

    newArrivals = [
        // {
        //     "product_id": 1,
        //     "productImage": "../../../assets/products/39ed8e8d-01b0-4d86-8cb0-305b4869bb48.__CR288,248,496,496_PT0_SX300_V1___.jpg",
        //     "productName": "Women Fashion Handbags Tote Bag Shoulder Bag Top Handle Satchel Purse",
        //     "brand": "Bagger IN",
        //     "shortName": "Women Fashion Handbag",
        //     "off": 15,
        //     "productLongDescription": "A14 Bionic, the fastest chip in a smartphone. An edge-to-edge OLED display. Ceramic Shield with four times better drop performance. And Night mode on every camera. iPhone 12 has it all — in two perfect sizes.",
        //     "productShortDescription": "A14 Bionic, the fastest chip in a smartphone. An edge-to-edge OLED display.",
        //     "regularPrice": 980,
        //     "salesPrice": 850
        // },
    ];

    products = []


    doSearch() {
        this.router.navigateByUrl("/search");
    }

    ngOnInit(){
        this.getAppSlider();
        this.getCategories();
        this.getNewArrival();
        this.getProducts();
    }

    getCategories(){
        this.wc.getAllCategories().then((categoryData:any)=>{
            categoryData.map((item)=>{
                if(item.name != 'uncategorized'){
                    this.categories.push({src:(item.image && item.image.src)?item.image.src:'',name:item.name, id:item.id, slug:item.slug});
                }
            })
        })
    }

    getProducts(){
        this.wc.getAllStoreProducts('on_sale',1).then((productsRes:any)=>{
            console.log("Products ",productsRes)
            productsRes.map((item)=>{
                var prodObj = {
                    "product_id": item.id,
                    "productImage": (item.images && item.images[0] && item.images[0].src)?item.images[0].src:'',
                    "productName": item.name,
                    "brand": "Bagger IN",
                    "shortName": item.name,
                    "off": parseInt(((item.sale_price/item.regular_price)*100).toString()),
                    "productShortDescription": item.short_description,
                    "regularPrice": item.regular_price,
                    "salesPrice": item.sale_price
                }
                this.products.push(prodObj);
            })
            
          })
    }

    getNewArrival(){
        this.wc.getProductsByTags(90).then((productsRes:any)=>{
            console.log("Products ",productsRes)
            productsRes.map((item)=>{
                var prodObj = {
                    "product_id": item.id,
                    "productImage": (item.images && item.images[0] && item.images[0].src)?item.images[0].src:'',
                    "productName": item.name,
                    "brand": "Bagger IN",
                    "shortName": item.name,
                    "off": parseInt(((item.sale_price/item.regular_price)*100).toString()),
                    "productShortDescription": item.short_description,
                    "regularPrice": item.regular_price,
                    "salesPrice": item.sale_price
                }
                this.newArrivals.push(prodObj);
            })
            
          })
    }

    getAppSlider(){
        this.wc.getAppSliderBytags().then((res:any)=>{
            console.log("App Slider",res);
            res.map((item)=>{
                this.slider.push(item.featured_media_src_url)
            })
        })
    }

    openCategory(category){
        this.router.navigate(['product-list', category.id], { queryParams: category});
    }
}
