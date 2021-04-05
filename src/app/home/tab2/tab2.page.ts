import { Component } from '@angular/core';
import { ToastController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(public toastController: ToastController, public alertController: AlertController) {}
  wishlist = [
    {
      "product_id":1,
      "productImage":"../../../assets/products/39ed8e8d-01b0-4d86-8cb0-305b4869bb48.__CR288,248,496,496_PT0_SX300_V1___.jpg",
      "productName":"Women Fashion Handbags Tote Bag Shoulder Bag Top Handle Satchel Purse",
      "brand":"Bagger IN",
      "shortName":"Women's Handbag",
      "off":15,
      "productLongDescription":"A14 Bionic, the fastest chip in a smartphone. An edge-to-edge OLED display. Ceramic Shield with four times better drop performance. And Night mode on every camera. iPhone 12 has it all — in two perfect sizes.",
      "productShortDescription":"A14 Bionic, the fastest chip in a smartphone. An edge-to-edge OLED display.",
      "regularPrice":980,
      "salesPrice":850
  },
  {
      "product_id":2,
      "productImage":"../../../assets/products/b5b4e08c1b97e8ed0c403bebda20d789.jpg",
      "productName":"Halife Women's Long Sleeve Boat Neck Off Shoulder Blouse Tops",
      "brand":"Halife US",
      "off":45,
      "shortName":"Women's Long Sleeve",
      "productLongDescription":"A14 Bionic rockets past every other smartphone chip. The Pro camera system takes low-light photography to the next level — with an even bigger jump on iPhone 12 Pro Max. And Ceramic Shield delivers four times better drop performance. Let’s see what this thing can do.",
      "productShortDescription":"A14 Bionic rockets past every other smartphone chip.",
      "regularPrice":1200,
      "salesPrice":999
  }];

  
    async removeFromWishlist(i) {
      const alert = await this.alertController.create({
        header: 'Do you want to remove this item from your wishlist?',
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
              this.toastAlert("Item removed from wishlist.", i);
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
      this.wishlist.splice(index, 1);
    }


}
