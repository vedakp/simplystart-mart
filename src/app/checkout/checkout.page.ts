import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss'],
})
export class CheckoutPage implements OnInit {

  constructor(public toastController: ToastController, public alertController: AlertController) { }

  
  ngOnInit(){
    this.doTotalCalculation();
  }

  totalCost = 0;
  grandTotal = 0;
  shippingCost = 45;
  cart = [
    {
        "product_id":1,
        "productImage":"https://m.media-amazon.com/images/S/aplus-media/sota/39ed8e8d-01b0-4d86-8cb0-305b4869bb48.__CR288,248,496,496_PT0_SX300_V1___.jpg",
        "productName":"Women Fashion Handbags Tote Bag Shoulder Bag",
        "brand":"Bagger IN",
        "shortName":"Women Fashion Handbag",
        "off":15,
        "quantity":1,
        "productLongDescription":"A14 Bionic, the fastest chip in a smartphone. An edge-to-edge OLED display. Ceramic Shield with four times better drop performance. And Night mode on every camera. iPhone 12 has it all — in two perfect sizes.",
        "productShortDescription":"A14 Bionic, the fastest chip in a smartphone. An edge-to-edge OLED display.",
        "regularPrice":980,
        "salesPrice":850
    },
    {
        "product_id":2,
        "productImage":"https://i.pinimg.com/474x/b5/b4/e0/b5b4e08c1b97e8ed0c403bebda20d789.jpg",
        "productName":"Halife Women's Long Sleeve Boat Neck Off Shoulder Blouse Tops",
        "brand":"Halife US",
        "off":45,
        "quantity":2,
        "shortName":"Women's Long Sleeve",
        "productLongDescription":"A14 Bionic rockets past every other smartphone chip. The Pro camera system takes low-light photography to the next level — with an even bigger jump on iPhone 12 Pro Max. And Ceramic Shield delivers four times better drop performance. Let’s see what this thing can do.",
        "productShortDescription":"A14 Bionic rockets past every other smartphone chip.",
        "regularPrice":1200,
        "salesPrice":999
    }];

    lessQty(index){
      if(this.cart[index].quantity > 0){
        this.cart[index].quantity = this.cart[index].quantity-1;
        this.doTotalCalculation(); 
      }
      if(this.cart[index].quantity == 0){
       this.removeFromCart(index);
      }  
         
    }

    addQty(index){ 
      if(this.cart[index].quantity >= 0 && this.cart[index].quantity <= 25){
        this.cart[index].quantity = this.cart[index].quantity+1;
    }
    this.doTotalCalculation();
    }

    doTotalCalculation(){
      this.totalCost = 0;
      this.grandTotal = 0;
      for(let item of this.cart){
        this.totalCost += (item.salesPrice * item.quantity);
      }
      this.grandTotal = (this.shippingCost + this.totalCost);
    }

  
    async removeFromCart(i) {
      const alert = await this.alertController.create({
        header: 'Do you want to remove this item?',
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
