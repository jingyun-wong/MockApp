
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { SellTradeStockCompletedPage } from './sell-trade-stock-completed.page';


@NgModule({
imports: [
CommonModule,
FormsModule,
IonicModule,
RouterModule.forChild([
{
path: '',
component: SellTradeStockCompletedPage
}
])
],
declarations: [SellTradeStockCompletedPage]
})
export class SellTradeStockCompletedPageModule {}
