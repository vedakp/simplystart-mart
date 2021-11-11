import { Component, OnInit } from '@angular/core';
import { WoocommerceService } from '../services/woocommerce.service';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.page.html',
  styleUrls: ['./my-orders.page.scss'],
})
export class MyOrdersPage implements OnInit {

  myOrders : any = [];
  constructor(
    public wc:WoocommerceService
  ) { }

  ngOnInit() {
    this.wc.getOrder().then(res=>{
      console.log("My Orders",res);
      this.myOrders = res;
    })
  }

}
