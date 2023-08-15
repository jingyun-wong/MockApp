import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { InvestmentIdeasPage } from './investment-ideas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: InvestmentIdeasPage
      }
    ])
  ],
  declarations: [InvestmentIdeasPage]
})
export class InvestmentIdeasPageModule {}
