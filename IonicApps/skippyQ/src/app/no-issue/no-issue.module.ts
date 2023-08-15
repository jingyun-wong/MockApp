import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NoIssuePageRoutingModule } from './no-issue-routing.module';

import { NoIssuePage } from './no-issue.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NoIssuePageRoutingModule
  ],
  declarations: [NoIssuePage]
})
export class NoIssuePageModule {}
