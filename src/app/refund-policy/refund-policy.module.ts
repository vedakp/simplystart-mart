import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RefundPolicyPageRoutingModule } from './refund-policy-routing.module';

import { RefundPolicyPage } from './refund-policy.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RefundPolicyPageRoutingModule,
    TranslateModule
  ],
  declarations: [RefundPolicyPage]
})
export class RefundPolicyPageModule {}
