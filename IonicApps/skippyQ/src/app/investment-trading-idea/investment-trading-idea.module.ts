import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { InvestmentTradingIdeaPage } from './investment-trading-idea.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: InvestmentTradingIdeaPage
      }
    ])
  ],
  declarations: [InvestmentTradingIdeaPage]
})
export class InvestmentTradingIdeaPageModule {}
