import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ImproveQualityReviewPageRoutingModule } from './improve-quality-review-routing.module';

import { ImproveQualityReviewPage } from './improve-quality-review.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ImproveQualityReviewPageRoutingModule
  ],
  declarations: [ImproveQualityReviewPage]
})
export class ImproveQualityReviewPageModule {}
