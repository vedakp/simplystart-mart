import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-track-order',
  templateUrl: './track-order.page.html',
  styleUrls: ['./track-order.page.scss'],
})
export class TrackOrderPage implements OnInit {

  constructor() { }

  productDetails = [
    {
        "product_id":1,
        "productImage":"../../../assets/products/iphone-12-mini-hero-150x150.jpeg",
        "productName":"Apple iPhone SE",
        "brand":"Apple",
        "shortName":"iPhone SE 32GB",
        "off":15,
        "quantity":1,
        "productLongDescription":"A14 Bionic, the fastest chip in a smartphone. An edge-to-edge OLED display. Ceramic Shield with four times better drop performance. And Night mode on every camera. iPhone 12 has it all — in two perfect sizes.",
        "productShortDescription":"A14 Bionic, the fastest chip in a smartphone. An edge-to-edge OLED display.",
        "regularPrice":980,
        "salesPrice":460
    },
    {
        "product_id":2,
        "productImage":"../../../assets/products/b5b4e08c1b97e8ed0c403bebda20d789.jpg",
        "productName":"Halife Women's Long Sleeve Boat Neck Off Shoulder Blouse Tops",
        "brand":"Halife US",
        "off":45,
        "quantity":2,
        "shortName":"Women's Long Sleeve",
        "productLongDescription":"A14 Bionic rockets past every other smartphone chip. The Pro camera system takes low-light photography to the next level — with an even bigger jump on iPhone 12 Pro Max. And Ceramic Shield delivers four times better drop performance. Let’s see what this thing can do.",
        "productShortDescription":"A14 Bionic rockets past every other smartphone chip.",
        "regularPrice":1200,
        "salesPrice":1000
    }];

    orderDetails = {
      "orderId": "OD5422SS5323EF",
      "grandTotal": 2500,
      "subTotal": 2460,
      "payMode": "Netbanking",
      "shippingCost":40
    };

  ngOnInit() {
  }

}
