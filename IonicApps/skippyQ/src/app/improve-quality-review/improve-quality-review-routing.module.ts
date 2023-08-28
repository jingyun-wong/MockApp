import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ImproveQualityReviewPage } from './improve-quality-review.page';

const routes: Routes = [
  {
    path: '',
    component: ImproveQualityReviewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ImproveQualityReviewPageRoutingModule {}
