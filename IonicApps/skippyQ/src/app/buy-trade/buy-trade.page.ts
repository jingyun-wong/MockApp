import { Component, OnInit } from '@angular/core';
import { Campaign } from '../shared/models/campaign';
import { Router } from '@angular/router';
import { TrackingService } from './../shared/services/tracking.service';
//  database things
// import {DataService} from '../services/data.service';



@Component({
  selector: 'app-list',
  templateUrl: 'buy-trade.page.html',
  styleUrls: ['buy-trade.page.scss']
})
export class BuyTradePage implements OnInit {


  allCampaigns: Campaign[];
  campaigns: Campaign[];
  campaignEmail:string;
  listData = [];

  clicks = 0

  startTime! : number
  initTime! : number
  dbStartTime! : number
  contentInitTime! : number
  viewInitTime! : number
  dbloadTime!: number
  backEndErrors = 0;
  pageName: string = "buyTrade";

  taskstartTime! : number;

  constructor(public router: Router,private trackingService: TrackingService){
    this.startTime = window.performance.now()
    localStorage.setItem("startTime",JSON.stringify(this.startTime))
    
  }
  ngOnInit() {

    this.initTime = window.performance.now()
    localStorage.setItem("pageLoadTime", JSON.stringify((this.initTime-this.startTime)))

  }


portfolioSelectionbtn(){
  this.clicks += 1
  localStorage.setItem("pageClicks",JSON.stringify(this.clicks))
  this.trackingService.trackCTAMetrics(this.pageName, "button", "click on a specific portfilio", "buyTradeStock", 0);
}

backButton(){
  this.clicks += 1
  localStorage.setItem("pageClicks",JSON.stringify(this.clicks))
  this.trackingService.trackCTAMetrics(this.pageName, "button", "click on back button", "tradingHome", 0);
}

}
