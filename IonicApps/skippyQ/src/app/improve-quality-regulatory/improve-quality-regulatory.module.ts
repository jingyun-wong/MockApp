import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ImproveQualityRegulatoryPageRoutingModule } from './improve-quality-regulatory-routing.module';

import { ImproveQualityRegulatoryPage } from './improve-quality-regulatory.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ImproveQualityRegulatoryPageRoutingModule
  ],
  declarations: [ImproveQualityRegulatoryPage]
})
export class ImproveQualityRegulatoryPageModule {}
