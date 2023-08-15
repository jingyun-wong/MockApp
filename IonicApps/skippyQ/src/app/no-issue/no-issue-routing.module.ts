import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NoIssuePage } from './no-issue.page';

const routes: Routes = [
  {
    path: '',
    component: NoIssuePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NoIssuePageRoutingModule {}
