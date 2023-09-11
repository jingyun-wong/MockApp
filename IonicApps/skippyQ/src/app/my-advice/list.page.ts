import { Component, OnInit } from '@angular/core';
import { TrackingService } from '../shared/services/tracking.service';


@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {

  clicks = 0

  startTime! : number
  initTime! : number
  dbStartTime! : number
  contentInitTime! : number
  viewInitTime! : number
  dbloadTime!: number
  backEndErrors = 0;
  pageName: string = "myAdvice";

  constructor(public trackingService: TrackingService) {
    this.startTime = window.performance.now()
    localStorage.setItem("startTime", JSON.stringify(this.startTime))
    localStorage.setItem("dbLoadTime", JSON.stringify(0))
  }

  ngOnInit() {
    this.initTime = window.performance.now()
    localStorage.setItem("pageLoadTime", JSON.stringify((this.initTime - this.startTime)))
  }

  clickHome() {
    this.clicks += 1
    localStorage.setItem("pageClicks", JSON.stringify(this.clicks))
    this.trackingService.trackCTAMetrics(this.pageName, "button", "click on back button", "home", 0);
  }

  clickHC() {
    this.clicks += 1
    localStorage.setItem("pageClicks", JSON.stringify(this.clicks))
    this.trackingService.trackCTAMetrics(this.pageName, "button", "click to healthcheck", "healthCheck", 0);
  }

  clickPosition() {
    this.clicks += 1
    localStorage.setItem("pageClicks", JSON.stringify(this.clicks))
    this.trackingService.trackCTAMetrics(this.pageName, "button", "click to positions", "position", 0);
  }
}
