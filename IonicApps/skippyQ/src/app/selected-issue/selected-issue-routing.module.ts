import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelectedIssuePage } from './selected-issue.page';

const routes: Routes = [
  {
    path: '',
    component: SelectedIssuePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelectedIssuePageRoutingModule {}
