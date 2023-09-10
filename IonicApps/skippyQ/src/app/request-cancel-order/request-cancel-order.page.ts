import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TrackingService } from './../shared/services/tracking.service';


@Component({
  selector: 'app-list',
  templateUrl: 'request-cancel-order.page.html',
  styleUrls: ['request-cancel-order.page.scss']
})
export class RequestCancelOrderPage implements OnInit {

  clicks = 0

  startTime!: number
  initTime!: number
  dbStartTime!: number
  contentInitTime!: number
  viewInitTime!: number
  dbloadTime!: number
  backEndErrors = 0;
  pageName: string = "requestCancelOrder";

  constructor(public router: Router, private trackingService: TrackingService) {
    this.startTime = window.performance.now()
    localStorage.setItem("startTime", JSON.stringify(this.startTime))
  }

  ngOnInit() {
    this.initTime = window.performance.now()
    localStorage.setItem("pageLoadTime", JSON.stringify((this.initTime - this.startTime)))
  }

  cancelSuccessful() {
    this.clicks += 1
    localStorage.setItem("pageClicks", JSON.stringify(this.clicks))
    this.trackingService.trackCTAMetrics(this.pageName, "button", "click on yes button", "cancelOrderSuccessful", 0);
  }
  cancelAbort() {
    this.clicks += 1
    localStorage.setItem("pageClicks", JSON.stringify(this.clicks))
    this.trackingService.trackCTAMetrics(this.pageName, "button", "click on no button", "tradingHome", 0);
  }
}


