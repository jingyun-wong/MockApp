import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TradingEgPageRoutingModule } from './trading-eg-routing.module';

import { TradingEgPage } from './trading-eg.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TradingEgPageRoutingModule
  ],
  declarations: [TradingEgPage]
})
export class TradingEgPageModule {}
