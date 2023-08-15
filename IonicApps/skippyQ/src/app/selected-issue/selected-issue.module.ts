import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelectedIssuePageRoutingModule } from './selected-issue-routing.module';

import { SelectedIssuePage } from './selected-issue.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelectedIssuePageRoutingModule
  ],
  declarations: [SelectedIssuePage]
})
export class SelectedIssuePageModule {}
