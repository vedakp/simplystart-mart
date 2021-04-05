import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyAddressesPage } from './my-addresses.page';

const routes: Routes = [
  {
    path: '',
    component: MyAddressesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyAddressesPageRoutingModule {}
