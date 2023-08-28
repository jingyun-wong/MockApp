import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ImproveQualitySuccessPage } from './improve-quality-success.page';

const routes: Routes = [
  {
    path: '',
    component: ImproveQualitySuccessPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ImproveQualitySuccessPageRoutingModule {}
