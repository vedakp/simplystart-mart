import { Component, OnInit } from '@angular/core';
import { ToastController, AlertController } from '@ionic/angular';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  totalCost : any = 0;
  cart = [
    // {
    //     "product_id":1,
    //     "productImage":"../../../assets/products/39ed8e8d-01b0-4d86-8cb0-305b4869bb48.__CR288,248,496,496_PT0_SX300_V1___.jpg",
    //     "productName":"WF Fashion",
    //     "brand":"Bagger IN",
    //     "shortName":"Women's Handbag",
    //     "off":15,
    //     "quantity":1,
    //     "productLongDescription":"A14 Bionic, the fastest chip in a smartphone. An edge-to-edge OLED display. Ceramic Shield with four times better drop performance. And Night mode on every camera. iPhone 12 has it all — in two perfect sizes.",
    //     "productShortDescription":"A14 Bionic, the fastest chip in a smartphone. An edge-to-edge OLED display.",
    //     "regularPrice":980,
    //     "regularPrice":850
    // },
    // {
    //     "product_id":2,
    //     "productImage":"../../../assets/products/b5b4e08c1b97e8ed0c403bebda20d789.jpg",
    //     "productName":"Halife Women's Long Sleeve Boat Neck Off Shoulder Blouse Tops",
    //     "brand":"Halife US",
    //     "off":45,
    //     "quantity":2,
    //     "shortName":"Women's Long Sleeve",
    //     "productLongDescription":"A14 Bionic rockets past every other smartphone chip. The Pro camera system takes low-light photography to the next level — with an even bigger jump on iPhone 12 Pro Max. And Ceramic Shield delivers four times better drop performance. Let’s see what this thing can do.",
    //     "productShortDescription":"A14 Bionic rockets past every other smartphone chip.",
    //     "regularPrice":1200,
    //     "regularPrice":999
    // }
  ];

  constructor(public toastController: ToastController,
    public alertController: AlertController,
    public cartService: CartService
  ) { }

  ngOnInit() {
    
  }

  ionViewDidEnter(){
    this.cart = this.cartService.getCart();
    setTimeout(()=>{
      this.doTotalCalculation();
    },500)
  }

  lessQty(index) {
    if (this.cart[index].amount > 0) {
      this.cart[index].amount = this.cart[index].amount - 1;
      this.doTotalCalculation();
    }
    if (this.cart[index].amount == 0) {
      this.removeFromCart(index);
    }
    this.cartService.setCart(this.cart);
  }

  addQty(index) {
    if (this.cart[index].amount >= 0 && this.cart[index].amount <= 25) {
      this.cart[index].amount = this.cart[index].amount + 1;
    }
    this.cartService.setCart(this.cart);
    this.doTotalCalculation();
  }

  doTotalCalculation() {
    this.totalCost = 0;
    console.log("Cart",this.cart);
    for (let i = 0; i < this.cart.length; i++) {
      this.totalCost = Number(this.totalCost) + Number(((this.cart[i].regularPrice) * (this.cart[i].amount)));
      this.totalCost = parseFloat(this.totalCost).toFixed(2);
    }
  }


  async removeFromCart(i) {
    const alert = await this.alertController.create({
      header: 'Do you want to remove this item from your cart?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Action cancelled');
          }
        }, {
          text: 'Yes!',
          handler: () => {
            this.toastAlert("Item removed from cart.", i);
            this.cartService.removeProduct(this.cart[i]);
            this.doTotalCalculation();
          }
        }
      ]
    });

    await alert.present();
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

}
