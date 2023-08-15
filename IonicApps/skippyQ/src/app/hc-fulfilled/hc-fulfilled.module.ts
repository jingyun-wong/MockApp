import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HcFulfilledPageRoutingModule } from './hc-fulfilled-routing.module';

import { HcFulfilledPage } from './hc-fulfilled.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HcFulfilledPageRoutingModule
  ],
  declarations: [HcFulfilledPage]
})
export class HcFulfilledPageModule {}
