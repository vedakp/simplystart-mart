import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PasswordSuccessPageRoutingModule } from './password-success-routing.module';

import { PasswordSuccessPage } from './password-success.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({ 
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PasswordSuccessPageRoutingModule,
    TranslateModule
  ],
  declarations: [PasswordSuccessPage]
})
export class PasswordSuccessPageModule {}
