import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PasswordFailedPageRoutingModule } from './password-failed-routing.module';

import { PasswordFailedPage } from './password-failed.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PasswordFailedPageRoutingModule,
    TranslateModule
  ],
  declarations: [PasswordFailedPage]
})
export class PasswordFailedPageModule {}
