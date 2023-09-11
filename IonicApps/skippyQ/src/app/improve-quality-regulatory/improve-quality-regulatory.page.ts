import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TrackingService } from './../shared/services/tracking.service';

@Component({
  selector: 'app-improve-quality-regulatory',
  templateUrl: './improve-quality-regulatory.page.html',
  styleUrls: ['./improve-quality-regulatory.page.scss'],
})
export class ImproveQualityRegulatoryPage implements OnInit {
  toggleState: boolean = false;

  clicks = 0

  startTime!: number
  initTime!: number
  dbStartTime!: number
  contentInitTime!: number
  viewInitTime!: number
  dbloadTime!: number
  backEndErrors = 0;
  pageName: string = "improveQualityRegulatory";

  constructor(public router: Router, private trackingService: TrackingService,) {
    this.startTime = window.performance.now()
    localStorage.setItem("startTime", JSON.stringify(this.startTime))
  }

  ngOnInit() {
    this.initTime = window.performance.now()
    localStorage.setItem("pageLoadTime", JSON.stringify((this.initTime - this.startTime)))
  }


  backButton() {
    this.clicks += 1
    localStorage.setItem("pageClicks", JSON.stringify(this.clicks))
    this.trackingService.trackCTAMetrics(this.pageName, "button", "click on back button", "improveQualityReview", 0);
  }

  clientAdvisor() {
    this.clicks += 1
    localStorage.setItem("pageClicks", JSON.stringify(this.clicks))
    this.trackingService.trackCTAMetrics(this.pageName, "button", "click on contact client advisor button", "contact client advisor", 0);
    if (localStorage.getItem("userStoryID") == "11") {
      setTimeout(() => {
        alert('You have completed this user story!');
        this.trackingService.trackJourneyMetrics(window.performance.now());
        localStorage.clear();
        location.reload();
        this.router.navigate(['/user-stories'])
      }, 200);
    }
  }

  transmitOrders() {
    this.clicks += 1
    localStorage.setItem("pageClicks", JSON.stringify(this.clicks))
    this.trackingService.trackCTAMetrics(this.pageName, "button", "click on next button", "improveQualitySuccess", 0);
  }

  clickToggle() {
    this.clicks += 1
    localStorage.setItem("pageClicks", JSON.stringify(this.clicks))
    this.trackingService.trackCTAMetrics(this.pageName, "button", "click on toggle", "confirm receiving documentation", 0);
  }

}
