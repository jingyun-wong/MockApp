import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InProgressMsgPage } from './in-progress-msg.page';

const routes: Routes = [
  {
    path: '',
    component: InProgressMsgPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InProgressMsgPageRoutingModule {}
