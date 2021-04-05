import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrderFailedPage } from './order-failed.page';

const routes: Routes = [
  {
    path: '',
    component: OrderFailedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrderFailedPageRoutingModule {}
