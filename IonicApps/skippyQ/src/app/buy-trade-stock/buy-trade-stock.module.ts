
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { BuyTradeStockPage } from './buy-trade-stock.page';


@NgModule({
imports: [
CommonModule,
FormsModule,
IonicModule,
RouterModule.forChild([
{
path: '',
component: BuyTradeStockPage
}
])
],
declarations: [BuyTradeStockPage]
})
export class BuyTradeStockPageModule {}
