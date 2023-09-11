import { Component, OnInit } from '@angular/core';
import { TrackingService } from './../shared/services/tracking.service';

@Component({
  selector: 'app-improve-quality',
  templateUrl: './improve-quality.page.html',
  styleUrls: ['./improve-quality.page.scss'],
})
export class ImproveQualityPage implements OnInit {

  clicks = 0

  startTime!: number
  initTime!: number
  dbStartTime!: number
  contentInitTime!: number
  viewInitTime!: number
  dbloadTime!: number
  backEndErrors = 0;
  pageName: string = "improveQuality";

  constructor(private trackingService: TrackingService,) {
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
    this.trackingService.trackCTAMetrics(this.pageName, "button", "click on back button", "selectedIssue", 0);
  }

  clientAdvisor() {
    this.clicks += 1
    localStorage.setItem("pageClicks", JSON.stringify(this.clicks))
    this.trackingService.trackCTAMetrics(this.pageName, "button", "click on contact client advisor button", "contact client advisor", 0);
  }

  nextButton() {
    this.clicks += 1
    localStorage.setItem("pageClicks", JSON.stringify(this.clicks))
    this.trackingService.trackCTAMetrics(this.pageName, "button", "click on next button", "improveQualityReview", 0);
  }
  
}
