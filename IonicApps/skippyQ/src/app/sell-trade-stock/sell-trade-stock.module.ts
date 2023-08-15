
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { SellTradeStockPage } from './sell-trade-stock.page';


@NgModule({
imports: [
CommonModule,
FormsModule,
IonicModule,
RouterModule.forChild([
{
path: '',
component: SellTradeStockPage
}
])
],
declarations: [SellTradeStockPage]
})
export class SellTradeStockPageModule {}
