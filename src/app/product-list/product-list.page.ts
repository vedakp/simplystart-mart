import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ActionSheetController } from "@ionic/angular";
import { CommonfunctionService } from "../services/commonfunction.service";
import { WoocommerceService } from "../services/woocommerce.service";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.page.html",
  styleUrls: ["./product-list.page.scss"],
})
export class ProductListPage implements OnInit {

  products:any = [];
  cId = "";
  categoryTitle = "Fashion";

  constructor(public actionSheetController: ActionSheetController,
    public wc:WoocommerceService,
    public activatedRoute:ActivatedRoute,
    public appCom:CommonfunctionService,
    public route:Router
    ) {}

  ngOnInit() {
    // this.activatedRoute.paramMap.subscribe((paramMap)=>{
    //   this.cId = paramMap.get('id');
    //   this.getProducts(this.cId);
    // });

    this.activatedRoute.queryParams
      .subscribe(params => {
        console.log("params",params); // { order: "popular" }
        this.cId = params.id;
        this.categoryTitle = params.name;
        this.getProducts(this.cId);
      }
    );
  }

  getProducts(id){
    this.appCom.showLoader();
    this.wc.getProductsByCategories(id).then((productsRes:any)=>{
      this.appCom.hideLoader();
        console.log("Products ",productsRes)
        productsRes.map((item)=>{
            var prodObj = {
                "product_id": item.id,
                "productImage": (item.images && item.images[0] && item.images[0].src)?item.images[0].src:'',
                "productName": item.name,
                "brand": "Bagger IN",
                "shortName": item.name,
                "off": (100 - parseInt(((item.sale_price/item.regular_price)*100).toString())),
                "productShortDescription": item.short_description,
                "regularPrice": item.sale_price,
                "salesPrice": item.regular_price
            }
            this.products.push(prodObj);
        })
        
      },err=>{
        this.appCom.hideLoader();
      })
  }

  async doFilter() {
    const actionSheet = await this.actionSheetController.create({
      header: "Sort by",
      buttons: [
        {
          text: "Featured Products",
          icon: "funnel-outline",
          handler: () => {
            console.log("Sort by: Featured");
          },
        },
        {
          text: "Price High to Low",
          icon: "trending-down-outline",
          handler: () => {
            console.log("Sort by: Price High to Low");
          },
        },
        {
          text: "Price Low to High",
          icon: "trending-up-outline",
          handler: () => {
            console.log("Sort by: Price Low to High");
          },
        },
        {
          text: "Cancel",
          icon: "close",
          role: "cancel",
          handler: () => {
            console.log("Cancelled");
          },
        },
      ],
    });
    await actionSheet.present();
  }
}
