import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HcFulfilledPage } from './hc-fulfilled.page';

const routes: Routes = [
  {
    path: '',
    component: HcFulfilledPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HcFulfilledPageRoutingModule {}
