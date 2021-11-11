import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CommonfunctionService } from './commonfunction.service';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  wishlistArr = [];
  public wishlistItemCount = new BehaviorSubject(0);
  constructor(
    public appComm : CommonfunctionService
  ) { 
    this.appComm.getLocalstorageItem('wishlist').then((wishlistJson:any)=>{
      if(wishlistJson){
        wishlistJson = JSON.parse(wishlistJson);
        if(wishlistJson && wishlistJson.length){
          this.wishlistArr = wishlistJson;
          this.wishlistItemCount.next(this.wishlistArr.length);
        }
      }
    })
  }

  addToWishlistt(product){
    let added = false;
    for (let p of this.wishlistArr) {
      if (p.id === product.id) {
        added = true;
        break;
      }
    }
    if (!added) {
      this.wishlistArr.push(product);
      this.appComm.setLocalstorageItem("wishlist",JSON.stringify(this.wishlistArr));
    }
    this.wishlistItemCount.next(this.wishlistItemCount.value + 1);
  }

  removeFromWishlist(product){
    for (let [index, p] of this.wishlistArr.entries()) {
      if (p.id === product.id) {
        this.wishlistItemCount.next(this.wishlistItemCount.value - p.amount);
        this.wishlistArr.splice(index, 1);
        this.appComm.setLocalstorageItem("wishlist",JSON.stringify(this.wishlistArr));
      }
    }
    this.wishlistItemCount.next(this.wishlistArr.length);
  }

  getWishlistItems(){
    return this.wishlistArr;
  }

  getWishlistItemsCount() {
    return this.wishlistItemCount;
  }
}
