import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TradingEgPage } from './trading-eg.page';

const routes: Routes = [
  {
    path: '',
    component: TradingEgPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TradingEgPageRoutingModule {}
