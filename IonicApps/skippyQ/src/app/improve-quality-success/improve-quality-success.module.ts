import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ImproveQualitySuccessPageRoutingModule } from './improve-quality-success-routing.module';

import { ImproveQualitySuccessPage } from './improve-quality-success.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ImproveQualitySuccessPageRoutingModule
  ],
  declarations: [ImproveQualitySuccessPage]
})
export class ImproveQualitySuccessPageModule {}
