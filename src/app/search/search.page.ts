import { Component, OnInit } from '@angular/core';
import { WoocommerceService } from '../services/woocommerce.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  search = '';
  products = [];
  onSearch = false;
  skeleton = [0,1,2,3];
  constructor(
    public wc:WoocommerceService
  ) { }

  ngOnInit() {
  }

  getProducts(){
    this.products = [];
    if(this.search){
      this.onSearch = true;
      this.wc.getSearchedProducts(this.search).then((productsRes:any)=>{
        this.onSearch = false;
        console.log("Products ",productsRes)
        this.products = [];
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
        
      },err=>{
        this.onSearch = false;
      })
    }
  }

  reset(){
    this.search = "";
    this.products = [];
  }

}
