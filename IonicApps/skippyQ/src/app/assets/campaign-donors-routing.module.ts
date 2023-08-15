import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CampaignDonorsPage } from './campaign-donors.page';

const routes: Routes = [
  {
    path: '',
    component: CampaignDonorsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CampaignDonorsPageRoutingModule {}
