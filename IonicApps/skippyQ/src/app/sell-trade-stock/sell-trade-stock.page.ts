import { Component, OnInit } from '@angular/core';
import { Campaign } from '../shared/models/campaign';
// import {DataService} from '../services/data.service';
import { Router } from '@angular/router';
import { TrackingService } from './../shared/services/tracking.service';


@Component({
  selector: 'app-list',
  templateUrl: 'sell-trade-stock.page.html',
  styleUrls: ['sell-trade-stock.page.scss']
})
export class SellTradeStockPage implements OnInit {

  allCampaigns: Campaign[];
  campaigns: Campaign[];
  campaignEmail: string;
  listData = [];
  errorMessage = [];
  trade_stock_route = 0;

  clicks = 0

  startTime! : number
  initTime! : number
  dbStartTime! : number
  contentInitTime! : number
  viewInitTime! : number
  dbloadTime!: number
  backEndErrors = 0;
  pageName: string = "sellTradeStock";

  frontEndErrors = parseInt(localStorage.getItem("frontEndErrors"))

  currencies = [{
    currency: "EUR",
    units: 50
  },
  {
    currency: "USD",
    units: 60
  }
  ]
  constructor(private router: Router, private trackingService: TrackingService) {
    this.startTime = window.performance.now()
    localStorage.setItem("startTime",JSON.stringify(this.startTime))
  }


  ngOnInit() {
    this.initTime = window.performance.now()
    localStorage.setItem("pageLoadTime", JSON.stringify((this.initTime - this.startTime)))
  }

  onClear(ev2) {
    this.errorMessage = [];
  }

  backButton() {
    this.clicks += 1
    localStorage.setItem("pageClicks", JSON.stringify(this.clicks))
    this.trackingService.trackCTAMetrics(this.pageName, "button", "click on back button", "sellTrade", 0);
  }

  routeTradeStock() {
    this.clicks += 1
    localStorage.setItem("pageClicks", JSON.stringify(this.clicks))
    this.trackingService.trackCTAMetrics(this.pageName, "button", "click on stock item", "sellTradeStockDetails", 0);
  }

  getItems(ev) {
    var val = ev.target.value;
    if (val != '') {
      if (val.length > 10) {
        this.errorMessage.push('Please do not enter more than 10 characters...');
        this.frontEndErrors += 1
        localStorage.setItem('frontEndErrors', JSON.stringify(this.frontEndErrors))
      }
      else if (val.replace(/\s/g, "").toLowerCase() != "abbn") {

        this.errorMessage.push('Stock does not exist in the portfolio');

        this.frontEndErrors += 1
        localStorage.setItem('frontEndErrors', JSON.stringify(this.frontEndErrors))
      }
    }
  }
}
