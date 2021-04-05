import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PasswordFailedPage } from './password-failed.page';

const routes: Routes = [
  {
    path: '',
    component: PasswordFailedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PasswordFailedPageRoutingModule {}
