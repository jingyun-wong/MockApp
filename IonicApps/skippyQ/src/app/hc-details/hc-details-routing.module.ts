import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HcDetailsPage } from './hc-details.page';

const routes: Routes = [
  {
    path: '',
    component: HcDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HcDetailsPageRoutingModule {}
