import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ImproveQualityPageRoutingModule } from './improve-quality-routing.module';

import { ImproveQualityPage } from './improve-quality.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ImproveQualityPageRoutingModule
  ],
  declarations: [ImproveQualityPage]
})
export class ImproveQualityPageModule {}
