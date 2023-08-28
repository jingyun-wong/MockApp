import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ImproveQualityRegulatoryPage } from './improve-quality-regulatory.page';

const routes: Routes = [
  {
    path: '',
    component: ImproveQualityRegulatoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ImproveQualityRegulatoryPageRoutingModule {}
