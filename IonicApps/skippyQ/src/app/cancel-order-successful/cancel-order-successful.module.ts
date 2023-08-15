
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { CancelOrderSuccessfulPage } from './cancel-order-successful.page';


@NgModule({
imports: [
CommonModule,
FormsModule,
IonicModule,
RouterModule.forChild([
{
path: '',
component: CancelOrderSuccessfulPage
}
])
],
declarations: [CancelOrderSuccessfulPage]
})
export class CancelOrderSuccessfulPageModule {}
