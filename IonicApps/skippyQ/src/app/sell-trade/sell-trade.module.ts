
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { SellTradePage } from './sell-trade.page';


@NgModule({
imports: [
CommonModule,
FormsModule,
IonicModule,
RouterModule.forChild([
{
path: '',
component: SellTradePage
}
])
],
declarations: [SellTradePage]
})
export class SellTradePageModule {}
