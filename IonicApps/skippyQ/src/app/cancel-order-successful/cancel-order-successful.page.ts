import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TrackingService } from './../shared/services/tracking.service';

@Component({
  selector: 'app-list',
  templateUrl: 'cancel-order-successful.page.html',
  styleUrls: ['cancel-order-successful.page.scss']
})
export class CancelOrderSuccessfulPage implements OnInit {

  clicks = 0

  startTime!: number
  initTime!: number
  dbStartTime!: number
  contentInitTime!: number
  viewInitTime!: number
  dbloadTime!: number
  backEndErrors = 0;
  pageName: string = "cancelOrderSuccessful";

  constructor(public router: Router, private trackingService: TrackingService) {
    this.startTime = window.performance.now()
    localStorage.setItem("startTime", JSON.stringify(this.startTime))
  }

  ngOnInit() {
    this.initTime = window.performance.now()
    localStorage.setItem("pageLoadTime", JSON.stringify((this.initTime - this.startTime)))
    if (localStorage.getItem("userStoryID") == "14") {
      setTimeout(() => {
        alert('You have completed this user story!');
        this.trackingService.trackJourneyMetrics(window.performance.now());
        localStorage.clear();
        location.reload();
        this.router.navigate(['/user-stories'])
      }, 200);
    }
  }

  buyTradeRoute() {
    this.clicks += 1
    localStorage.setItem("pageClicks", JSON.stringify(this.clicks))
    this.trackingService.trackCTAMetrics(this.pageName, "button", "click on new order button", "buyTrade", 0);
  }
}
