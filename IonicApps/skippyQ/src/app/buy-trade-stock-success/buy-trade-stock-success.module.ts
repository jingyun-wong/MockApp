
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { BuyTradeStockSuccessPage } from './buy-trade-stock-success.page';


@NgModule({
imports: [
CommonModule,
FormsModule,
IonicModule,
RouterModule.forChild([
{
path: '',
component: BuyTradeStockSuccessPage
}
])
],
declarations: [BuyTradeStockSuccessPage]
})
export class BuyTradeStockSuccessPageModule {}
