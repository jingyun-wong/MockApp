import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CampaignDonorsPageRoutingModule } from './campaign-donors-routing.module';

import { CampaignDonorsPage } from './campaign-donors.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CampaignDonorsPageRoutingModule
  ],
  declarations: [CampaignDonorsPage]
})
export class CampaignDonorsPageModule {}
