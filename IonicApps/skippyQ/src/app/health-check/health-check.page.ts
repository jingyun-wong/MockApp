import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ConfirmationModalPage } from '../confirmation-modal/confirmation-modal.page';

@Component({
  selector: 'app-health-check',
  templateUrl: './health-check.page.html',
  styleUrls: ['./health-check.page.scss'],
})
export class HealthCheckPage implements OnInit {
  showFinancialHealthBanner: boolean = false;
  showImprovementBanner: boolean = false;
  showTakeNoAction: boolean = false;
  currentDate: string;

  constructor(private modalController: ModalController) {this.currentDate = new Date().toLocaleDateString();}

  async presentConfirmationModal() {
    const modal = await this.modalController.create({
      component: ConfirmationModalPage,
      componentProps: {
        message: "Are you sure you would like to take no action (all)"
      }
    });
    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned && dataReturned.data && dataReturned.data.confirmed) {
        // User confirmed, show the new banner
        this.showTakeNoAction = true;
      }
    });
    return await modal.present();
  }
  
  ngOnInit() {
  }

  condition: number = 0;
  list: any[] = new Array(5);
  
  review(i) {
     this.condition = i + 1;
     // your code........
  }

}
