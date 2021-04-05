import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { CartService } from '../services/cart.service';
import { CommonfunctionService } from '../services/commonfunction.service';
import { WoocommerceService } from '../services/woocommerce.service';

@Component({
  selector: 'app-single-product-view',
  templateUrl: './single-product-view.page.html',
  styleUrls: ['./single-product-view.page.scss'],
})
export class SingleProductViewPage implements OnInit {

  pId = "";
  constructor(
    public toastController: ToastController,
    public activatedRoute:ActivatedRoute,
    public wc:WoocommerceService,
    public appComm:CommonfunctionService,
    public cartService:CartService
    ) {}
  
  is_fav = false;
  

  currentProduct = [];

 
relatedProducts = [
  {
      "product_id":1,
      "productImage":"../../../assets/products/iphone-12-pro-blue-150x150.png",
      "productName":"Apple iPhone 12 32GB",
      "brand":"Apple",
      "shortName":"iPhone 12 32GB",
      "off":45,
      "productLongDescription":"A14 Bionic, the fastest chip in a smartphone. An edge-to-edge OLED display. Ceramic Shield with four times better drop performance. And Night mode on every camera. iPhone 12 has it all — in two perfect sizes.",
      "productShortDescription":"A14 Bionic, the fastest chip in a smartphone. An edge-to-edge OLED display.",
      "regularPrice":69000,
      "salesPrice":69900
  },
];;


ngOnInit() {

  this.activatedRoute.paramMap.subscribe((paramMap)=>{
    this.pId = paramMap.get('id');
    this.wc.getSingleProduct(this.pId).then(productRes=>{
      console.log("Product ", productRes);
      this.currentProduct = [{ 
        "id":productRes['id'],
        "product_id":productRes['id'],
        "productImage": (productRes['images'] && productRes['images'][0] && productRes['images'][0].src)?productRes['images'][0].src:'',
        "productName": productRes['name'],
        "brand": "Bagger IN",
        "shortName": productRes['name'],
        "off": parseInt(((productRes['sale_price']/productRes['regular_price'])*100).toString()),
        "productLongDescription": productRes['short_description']?productRes['short_description']:'',
        "productShortDescription": productRes['short_description'],
        "regularPrice": productRes['regular_price'],
        "salesPrice": productRes['sale_price']
      },{
        "images":productRes['images'].map((img)=> { return img.src })
      }];
      // this.getProductVariation();
    })
  })
}

getProductVariation(){
  this.wc.getProductVariation(this.pId).then((productsRes:any)=>{
    productsRes.forEach(product => {
      product.attributes.forEach(attr => {
        if(attr.name == 'Color'){
          // this.colorsAvaliable.push(attr.option)
        }
        if(attr.name == 'Size'){
          // this.sizesAvaliable.push(attr.option)
        }
      });
    });
  })
}

  async toastAlert(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }

  addFav(){
    if(this.is_fav == false){
      this.is_fav = true;
      this.toastAlert("Item added to wishlist.");
      // this.cartService.addProduct(this.currentProduct[0]);
    }else{
      this.is_fav =false;
      this.toastAlert("Item removed from wishlist.");
      // this.cartService.removeProduct(this.currentProduct[0]);
    }
  }

  addToCart(){
      this.toastAlert("Item added to Cart.");
      this.cartService.addProduct(this.currentProduct[0]);
  }
}
