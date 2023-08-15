
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { RequestCancelOrderPage } from './request-cancel-order.page';


@NgModule({
imports: [
CommonModule,
FormsModule,
IonicModule,
RouterModule.forChild([
{
path: '',
component: RequestCancelOrderPage
}
])
],
declarations: [RequestCancelOrderPage]
})
export class RequestCancelOrderPageModule {}
