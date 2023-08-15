
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { SellTradeStockSuccessPage } from './sell-trade-stock-success.page';


@NgModule({
imports: [
CommonModule,
FormsModule,
IonicModule,
RouterModule.forChild([
{
path: '',
component: SellTradeStockSuccessPage
}
])
],
declarations: [SellTradeStockSuccessPage]
})
export class SellTradeStockSuccessPageModule {}
