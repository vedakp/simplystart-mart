import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrderValidatePage } from './order-validate.page';

const routes: Routes = [
  {
    path: '',
    component: OrderValidatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrderValidatePageRoutingModule {}
