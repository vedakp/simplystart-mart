import { Component } from '@angular/core';
import { ToastController, AlertController } from '@ionic/angular';
import { WishlistService } from 'src/app/services/wishlist.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(public toastController: ToastController, 
    public wishlistService:WishlistService,
    public alertController: AlertController) {}
  wishlist = [];

  ngOnInit(){

  }

  ionViewDidEnter(){
    this.wishlist = this.wishlistService.getWishlistItems();
  }

  
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
              // this.toastAlert("Item removed from wishlist.", i);
              this.wishlistService.removeFromWishlist(this.wishlist[i]);
              this.wishlist = this.wishlistService.getWishlistItems();
            }
          }
        ]
      });
  
      await alert.present();
    }

    // async toastAlert(msg, index) {
    //   const toast = await this.toastController.create({
    //     message: msg,
    //     duration: 2000
    //   });
    //   toast.present();
    //   this.wishlist.splice(index, 1);
    // }


}
