import { Component, OnInit } from '@angular/core';
import { TrackingService } from './../shared/services/tracking.service';

@Component({
  selector: 'app-no-issue',
  templateUrl: './no-issue.page.html',
  styleUrls: ['./no-issue.page.scss'],
})
export class NoIssuePage implements OnInit {

  clicks = 0

  startTime!: number
  initTime!: number
  dbStartTime!: number
  contentInitTime!: number
  viewInitTime!: number
  dbloadTime!: number
  backEndErrors = 0;
  pageName: string = "noIssue";

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
    this.trackingService.trackCTAMetrics(this.pageName, "button", "click on back button", "healthCheck", 0);
  }

}
