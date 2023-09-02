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

  clicks = parseInt(localStorage.getItem("pageClicks"));
  startTime!: number;
  initTime!: number;
  contentInitTime!: number;
  viewInitTime!: number;

  constructor(private modalController: ModalController) { this.currentDate = new Date().toLocaleDateString(); }

  async presentConfirmationModal() {
    this.clickAnything();
    const modal = await this.modalController.create({
      component: ConfirmationModalPage,
      componentProps: {
        message: "Are you sure you would like to take no action (all)"
      }
    });
    modal.onDidDismiss().then((dataReturned) => {
      this.clickAnything();
      if (dataReturned && dataReturned.data && dataReturned.data.confirmed) {
        // User confirmed, show the new banner
        this.showTakeNoAction = true;
      }
    });
    return await modal.present();
  }

  ngOnInit() {
    this.startTime = window.performance.now()
    localStorage.setItem("startTime", JSON.stringify(this.startTime))
    this.initTime = window.performance.now()
    localStorage.setItem("pageLoadTime", JSON.stringify((this.initTime - this.startTime) / 1000))
  }

  condition: number = 4;
  list: any[] = new Array(5);

  clickAnything() {
    this.clicks += 1
    localStorage.setItem("pageClicks", JSON.stringify(this.clicks))
  }

}
