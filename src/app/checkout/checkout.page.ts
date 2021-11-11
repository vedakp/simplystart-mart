import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { CartService } from '../services/cart.service';
import { CommonfunctionService } from '../services/commonfunction.service';
import { WoocommerceService } from '../services/woocommerce.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss'],
})
export class CheckoutPage implements OnInit {

  paymentGatways: any = [];
  constructor(
    public toastController: ToastController,
    public alertController: AlertController,
    public cartService: CartService,
    public wc: WoocommerceService,
    public appComm: CommonfunctionService,
    public router: Router
  ) { }


  ngOnInit() {
    this.doTotalCalculation();
  }

  totalCost: any = 0;
  grandTotal = 0;
  shippingCost = 45;
  cart = [];
  baseProducts:any = [];
  paymentMethod='';

  ionViewDidEnter() {
    this.getPaymentGateways();
    this.cart = this.cartService.getCart();
    setTimeout(() => {
      this.doTotalCalculation();
    }, 500)
  }

  doTotalCalculation() {
    this.totalCost = 0;
    console.log("Cart", this.cart);
    for (let i = 0; i < this.cart.length; i++) {
      this.totalCost = Number(this.totalCost) + Number(((this.cart[i].regularPrice) * (this.cart[i].amount)));
      this.totalCost = parseFloat(this.totalCost).toFixed(2);
      this.grandTotal = Number(this.shippingCost) + Number(this.totalCost);

      let newCartData = {}; 
        newCartData['product_id'] = this.cart[i].product_id;
        newCartData['price'] = parseInt(this.cart[i].price);
        newCartData['quantity'] = this.cart[i].quantity;
        this.baseProducts.push(newCartData);
    }
  }

  async toastAlert(msg, index) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
    this.cart.splice(index, 1);
    this.doTotalCalculation();
  }

  getPaymentGateways() {
    // this.appComm.showLoader();
    this.wc.getPaymentGateways().then((res:any) => {
      console.log("Payment Gateway", res);
      for(let i = 0;i<res.length;i++){
        if(res[i].enabled){
          this.paymentGatways.push(res[i]);
        }
      }
      // this.appComm.hideLoader();
    }, (err) => {
      // this.appComm.hideLoader();
    })
  }

  confirmOrder() {
    return new Promise((resolve, reject) => {
      this.appComm.getLocalstorageItem('user').then((user:any)=>{
        user = JSON.parse(user);
        console.log("User ",user);
        let userId = user['store_id'];
        var orderObj = {
          payment_method : this.paymentMethod.split(":")[0],
          payment_method_title : this.paymentMethod.split(":")[1],
          customer_id : userId,
          "billing": {
            "first_name": "John",
            "last_name": "Doe",
            "address_1": "969 Market",
            "address_2": "",
            "city": "San Francisco",
            "state": "CA",
            "postcode": "94103",
            "country": "US",
            "email": "john.doe@example.com",
            "phone": "(555) 555-5555"
          },
          "shipping": {
            "first_name": "John",
            "last_name": "Doe",
            "address_1": "969 Market",
            "address_2": "",
            "city": "San Francisco",
            "state": "CA",
            "postcode": "94103",
            "country": "US"
          },
          "shipping_lines": [
            {
              "method_id": "flat_rate",
              "method_title": "Flat Rate",
              "total": "10.00"
            }
          ],
          line_items:this.cart.map(ele=>{
            return { product_id : ele.product_id, quantity : ele.quantity}
          })
        }
        this.wc.placeOrder(orderObj).then((respData) => {
          console.log("Place Orders ",respData);
          // this.storage.clear();
          // this.storage.set('currentOrderData', respData);
          if(respData['id']){
            this.router.navigateByUrl('/order-success/'+respData['id']);
            this.appComm.setLocalstorageItem('cart',{});
          }
        }).catch((error) => {
          console.log('Problem with placing order', error);
        });
      });
    })
  }
}
