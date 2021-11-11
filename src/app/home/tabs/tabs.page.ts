import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { WishlistService } from 'src/app/services/wishlist.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  
  //default icons
  home = "home-outline";
  wishlist = "heart-outline";
  cart = "bag-handle-outline";
  account = "person-outline";
  cartItemCount :any = 0;
  wishlistItemCount : any =0;
  
  constructor(public router:Router,
    public cartService:CartService,
    public wishlistService:WishlistService
    ) { this.router.events.subscribe((val) => this.changeActiveIcon()) }


  ngOnInit() {
    this.changeActiveIcon();
    this.cartItemCount = this.cartService.getCartItemCount();
    this.wishlistItemCount = this.wishlistService.getWishlistItemsCount();
  }

  changeActiveIcon(){
    if(this.router.url == "/home/tabs/tab1"){
      this.home = "home";
    }else { this.home = "home-outline"; }

    if(this.router.url == "/home/tabs/tab2"){
      this.wishlist = "heart";
    }else { this.wishlist = "heart-outline"; }

    if(this.router.url == "/home/tabs/tab3"){
      this.cart = "bag-handle";
    }else { this.cart = "bag-handle-outline"; }

    if(this.router.url == "/home/tabs/tab4"){
      this.account = "person";
    }else { this.account = "person-outline"; }
  }

}
