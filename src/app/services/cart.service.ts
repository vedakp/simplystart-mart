import { Injectable } from '@angular/core';
// import { Storage } from '@ionic/storage';
import { BehaviorSubject } from 'rxjs';
import { CommonfunctionService } from './commonfunction.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  data = [
    // { id: 0, name: 'Pizza Salami', price: 8.99, amount: 0 },
    // { id: 1, name: 'Pizza Classic', price: 5.49, amount: 0 },
    // { id: 2, name: 'Sliced Bread', price: 4.99, amount: 0 },
    // { id: 3, name: 'Salad', price: 6.99, amount: 0 }
  ];

  public cart = [];
  public cartItemCount = new BehaviorSubject(0);
 
  constructor(
    public appComm:CommonfunctionService
  ) {
    this.appComm.getLocalstorageItem('cart').then((cartItems:any)=>{
      if(cartItems){
        cartItems = JSON.parse(cartItems);
        if(cartItems && cartItems.length > 0){

          this.cart = cartItems;
          this.cartItemCount.next(this.cart.length);
        }
      }
    });
  }
 
  getProducts() {
    return this.data;
  }
 
  getCart() {
    return this.cart;
  }
 
  setCart(cart){
    this.cart = cart;
    this.appComm.setLocalstorageItem("cart",JSON.stringify(this.cart));
  }

  getCartItemCount() {
    return this.cartItemCount;
  }
 
  addProduct(product) {
    let added = false;
    for (let p of this.cart) {
      if (p.id === product.id) {
        p.amount += 1;
        added = true;
        break;
      }
    }
    if (!added) {
      product.amount = 1;
      this.cart.push(product);
      this.appComm.setLocalstorageItem("cart",JSON.stringify(this.cart));
    }
    this.cartItemCount.next(this.cartItemCount.value + 1);
  }
 
  decreaseProduct(product) {
    for (let [index, p] of this.cart.entries()) {
      if (p.id === product.id) {
        p.amount -= 1;
        if (p.amount == 0) {
          this.cart.splice(index, 1);
          this.appComm.setLocalstorageItem("cart",JSON.stringify(this.cart));
        }
      }
    }
    this.cartItemCount.next(this.cartItemCount.value - 1);
  }
 
  removeProduct(product) {
    for (let [index, p] of this.cart.entries()) {
      if (p.id === product.id) {
        this.cartItemCount.next(this.cartItemCount.value - p.amount);
        this.cart.splice(index, 1);
        this.appComm.setLocalstorageItem("cart",JSON.stringify(this.cart));
      }
    }
    this.cartItemCount.next(this.cartItemCount.value - 1);
  }
}
