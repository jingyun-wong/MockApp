import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HcDetailsPageRoutingModule } from './hc-details-routing.module';

import { HcDetailsPage } from './hc-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HcDetailsPageRoutingModule
  ],
  declarations: [HcDetailsPage]
})
export class HcDetailsPageModule {}
