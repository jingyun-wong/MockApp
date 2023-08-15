
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { SellTradeStockReviewPage } from './sell-trade-stock-review.page';


@NgModule({
imports: [
CommonModule,
FormsModule,
IonicModule,
RouterModule.forChild([
{
path: '',
component: SellTradeStockReviewPage
}
])
],
declarations: [SellTradeStockReviewPage]
})
export class SellTradeStockReviewPageModule {}
