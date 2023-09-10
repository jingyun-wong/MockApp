import { Component, OnInit } from '@angular/core';
// import {DataService} from '../services/data.service';
import { Router } from '@angular/router';
import { TrackingService } from './../shared/services/tracking.service';


@Component({
  selector: 'app-list',
  templateUrl: 'sell-trade.page.html',
  styleUrls: ['sell-trade.page.scss']
})
export class SellTradePage implements OnInit {

  portfolioSelectionClicks = 0
  sellTradeVisits = localStorage.getItem("sellTradePageVisits")

  clicks = 0

  startTime! : number
  initTime! : number
  dbStartTime! : number
  contentInitTime! : number
  viewInitTime! : number
  dbloadTime!: number
  backEndErrors = 0;
  pageName: string = "sellTrade";

  taskstartTime!: number;

  constructor(public router: Router, private trackingService: TrackingService) {
    this.startTime = window.performance.now()
    localStorage.setItem("startTime", JSON.stringify(this.startTime))
  }

  ngOnInit() {
    this.initTime = window.performance.now()
    localStorage.setItem("pageLoadTime", JSON.stringify((this.initTime - this.startTime)))
  }
  portfolioSelectionbtn() {
    this.clicks += 1
    localStorage.setItem("pageClicks", JSON.stringify(this.clicks))
    this.trackingService.trackCTAMetrics(this.pageName, "button", "click on a specific portfilio", "sellTradeStock", 0);
  }
  backButton() {
    this.clicks += 1
    localStorage.setItem("pageClicks", JSON.stringify(this.clicks))
    this.trackingService.trackCTAMetrics(this.pageName, "button", "click on back button", "tradingHome", 0);
  }

}


