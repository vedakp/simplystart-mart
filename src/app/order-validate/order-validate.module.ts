import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrderValidatePageRoutingModule } from './order-validate-routing.module';

import { OrderValidatePage } from './order-validate.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrderValidatePageRoutingModule
  ],
  declarations: [OrderValidatePage]
})
export class OrderValidatePageModule {}
