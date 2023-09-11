import { AfterViewInit, Component, OnInit, Renderer2 } from '@angular/core';
import { NavController, LoadingController } from '@ionic/angular';

import { Router } from '@angular/router';
import { topDonation } from '../shared/models/topDonation';
import { donationRecord } from '../shared/models/donationRecord';
import { Campaign } from '../shared/models/campaign';
import { TrackingService } from './../shared/services/tracking.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  clicks = 0

  startTime! : number
  initTime! : number
  dbStartTime! : number
  contentInitTime! : number
  viewInitTime! : number
  dbloadTime!: number
  backEndErrors = 0;
  pageName: string = "home";

  constructor(private trackingService: TrackingService,) {
    this.startTime = window.performance.now()
    localStorage.setItem("startTime", JSON.stringify(this.startTime))
    localStorage.setItem("dbLoadTime", JSON.stringify(0))
  }

  // when the directive is instantiated.
  ngOnInit() {
    this.initTime = window.performance.now()
    localStorage.setItem("pageLoadTime", JSON.stringify((this.initTime - this.startTime)))
  }

  myManage() {
    this.clicks += 1
    localStorage.setItem("pageClicks", JSON.stringify(this.clicks));
    this.trackingService.trackCTAMetrics(this.pageName, "button", "click on My Manage at homepage", "My Manage", 0);
  }
  
  myAdvice() {
    this.clicks += 1
    localStorage.setItem("pageClicks", JSON.stringify(this.clicks))
    this.trackingService.trackCTAMetrics(this.pageName, "button", "click on My Advice at homepage", "myAdvice", 0);
  }

  myTradingPortfolio() {
    this.clicks += 1
    localStorage.setItem("pageClicks", JSON.stringify(this.clicks))
    this.trackingService.trackCTAMetrics(this.pageName, "button", "click on My Trading Porfolio at homepage", "tradingHome", 0);
  }
}
