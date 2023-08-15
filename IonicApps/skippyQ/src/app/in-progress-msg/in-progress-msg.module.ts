import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InProgressMsgPageRoutingModule } from './in-progress-msg-routing.module';

import { InProgressMsgPage } from './in-progress-msg.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InProgressMsgPageRoutingModule
  ],
  declarations: [InProgressMsgPage]
})
export class InProgressMsgPageModule {}
