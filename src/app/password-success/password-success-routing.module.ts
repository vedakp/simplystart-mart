import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PasswordSuccessPage } from './password-success.page';

const routes: Routes = [
  {
    path: '',
    component: PasswordSuccessPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PasswordSuccessPageRoutingModule {}
