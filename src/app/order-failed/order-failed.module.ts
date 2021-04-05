import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrderFailedPageRoutingModule } from './order-failed-routing.module';

import { OrderFailedPage } from './order-failed.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrderFailedPageRoutingModule,
    TranslateModule
  ],
  declarations: [OrderFailedPage]
})
export class OrderFailedPageModule {}
