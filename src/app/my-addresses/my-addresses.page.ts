import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-my-addresses',
  templateUrl: './my-addresses.page.html',
  styleUrls: ['./my-addresses.page.scss'],
})
export class MyAddressesPage implements OnInit {

  constructor(public actionSheetController: ActionSheetController) { }
  primaryAddress = 1;
  addresses = [{
    id:1,
    name: "Mr. Karthikeyan",
    line_1: "3423 Jehovah Drive",
    line_2: "Roanoke, Virginia - 24019",
    primary_phone: "+1 540-529-3606",
    icon: "home-outline"
  },
  { id:2,
    name: "Mrs. Noelle",
    line_1: "849 Koontz Lane",
    line_2: "Burbank, California - 91502",
    primary_phone: "+1 818-840-1357",
    icon: "business-outline"
  },
  { id:3,
    name: "Mr. Jared",
    line_1: "2627 Norman Street",
    line_2: "Burbank, California - 91502",
    primary_phone: "+1 323-252-1691",
    icon: "location-outline"
  },
];


async makePrimary(id) {
  const actionSheet = await this.actionSheetController.create({
    header: 'Choose your primary address',
    buttons: [{
      text: 'Make this primary',
      handler: () => {
        this.primaryAddress = id;
      }
      }, {
      text: 'Cancel',
      icon: 'close',
      role: 'cancel',
      handler: () => {
        console.log('Cancel clicked');
      }
    }]
  });
  await actionSheet.present();
}


  ngOnInit() {
  }

}
