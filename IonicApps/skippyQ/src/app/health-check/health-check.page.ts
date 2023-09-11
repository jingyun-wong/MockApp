import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ConfirmationModalPage } from '../confirmation-modal/confirmation-modal.page';
import { Router } from '@angular/router';
import { TrackingService } from './../shared/services/tracking.service';

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
  showRequestIssue: boolean = false;
  showImproveIssue: boolean = false;

  clicks = 0

  startTime!: number
  initTime!: number
  dbStartTime!: number
  contentInitTime!: number
  viewInitTime!: number
  dbloadTime!: number
  backEndErrors = 0;
  pageName: string = "healthCheck";

  constructor(public router: Router, private modalController: ModalController, private trackingService: TrackingService,) {
    this.currentDate = new Date().toLocaleDateString();
    this.startTime = window.performance.now()
    localStorage.setItem("startTime", JSON.stringify(this.startTime))
  }

  async presentConfirmationModal() {
    this.clicks += 1
    localStorage.setItem("pageClicks", JSON.stringify(this.clicks))
    this.trackingService.trackCTAMetrics(this.pageName, "button", "click on take no action (all) button", "confirmationModal", 0);
    const modal = await this.modalController.create({
      component: ConfirmationModalPage,
      componentProps: {
        message: "Are you sure you would like to take no action (all)"
      }
    });
    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned && dataReturned.data && dataReturned.data.confirmed) {
        this.showTakeNoAction = true;
        this.clicks += 1
        localStorage.setItem("pageClicks", JSON.stringify(this.clicks))
        this.trackingService.trackCTAMetrics(this.pageName, "button", "click on confirm button", "healthCheck", 0);
      }
      else {
        this.clicks += 1
        localStorage.setItem("pageClicks", JSON.stringify(this.clicks))
        this.trackingService.trackCTAMetrics(this.pageName, "button", "click on cancel button", "healthCheck", 0);
      }
    });
    return await modal.present();
  }

  ngOnInit() {
    this.initTime = window.performance.now()
    localStorage.setItem("pageLoadTime", JSON.stringify((this.initTime - this.startTime)))
    if (localStorage.getItem("userStoryID") == "3") {
      this.showFinancialHealthBanner = true
      setTimeout(() => {
        alert('You have completed this user story!');
        this.trackingService.trackJourneyMetrics(window.performance.now());
        localStorage.clear();
        location.reload();
        this.router.navigate(['/user-stories'])
      }, 200);
    }
    if (localStorage.getItem("userStoryID") == "8") {
      this.showRequestIssue = true
    }
    if (localStorage.getItem("userStoryID") == "9") {
      this.showRequestIssue = true
    }
    if (localStorage.getItem("userStoryID") == "10") {
      this.showImproveIssue = true
    }
    if (localStorage.getItem("userStoryID") == "11") {
      this.showImproveIssue = true
    }
  }

  condition: number = 4;
  list: any[] = new Array(5);

  clickOnIssue() {
    this.clicks += 1
    localStorage.setItem("pageClicks", JSON.stringify(this.clicks))
    this.trackingService.trackCTAMetrics(this.pageName, "button", "click on a specific issue", "selectedIssue", 0);
  }

  clickNoIssue() {
    this.clicks += 1
    localStorage.setItem("pageClicks", JSON.stringify(this.clicks))
    this.trackingService.trackCTAMetrics(this.pageName, "button", "click on no issue button", "noIssue", 0);
  }

  clickStar() {
    this.clicks += 1
    localStorage.setItem("pageClicks", JSON.stringify(this.clicks))
    this.trackingService.trackCTAMetrics(this.pageName, "button", "click on star", "star", 0);
  }

  backButton() {
    this.clicks += 1
    localStorage.setItem("pageClicks", JSON.stringify(this.clicks))
    this.trackingService.trackCTAMetrics(this.pageName, "button", "click on back button", "myAdvice", 0);
  }

  clientAdvisor() {
    this.clicks += 1
    localStorage.setItem("pageClicks", JSON.stringify(this.clicks))
    this.trackingService.trackCTAMetrics(this.pageName, "button", "click on contact client advisor button", "contact client advisor", 0);
    if (localStorage.getItem("userStoryID") == "8") {
      setTimeout(() => {
        alert('You have completed this user story!');
        this.trackingService.trackJourneyMetrics(window.performance.now());
        localStorage.clear();
        location.reload();
        this.router.navigate(['/user-stories'])
      }, 200);
    }
  }

}
