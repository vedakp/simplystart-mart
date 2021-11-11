import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-order-success',
  templateUrl: './order-success.page.html',
  styleUrls: ['./order-success.page.scss'],
})
export class OrderSuccessPage implements OnInit {
  orderId = "";
  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { 

    this.orderId = this.route.snapshot.paramMap.get('id')!;
  }

  ngOnInit() {
  }

}
