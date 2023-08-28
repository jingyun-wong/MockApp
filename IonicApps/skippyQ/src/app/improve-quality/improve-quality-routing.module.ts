import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ImproveQualityPage } from './improve-quality.page';

const routes: Routes = [
  {
    path: '',
    component: ImproveQualityPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ImproveQualityPageRoutingModule {}
