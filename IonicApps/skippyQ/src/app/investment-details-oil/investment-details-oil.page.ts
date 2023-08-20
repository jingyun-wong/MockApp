import { Component, OnInit } from '@angular/core';
import { Campaign } from '../shared/models/campaign';
import { TrackingService } from './../shared/services/tracking.service';

@Component({
  selector: 'app-list',
  templateUrl: 'investment-details-oil.page.html',
  styleUrls: ['investment-details-oil.page.scss']
})
export class InvestmentDetailsOilPage implements OnInit {

  investmentIdeaIndex: string;
  allCampaigns: Campaign[];
  campaigns: Campaign[];
  campaignEmail:string;
  clicks= parseInt(localStorage.getItem("pageClicks")) ;

  startTime! : number;
  initTime! : number;
  contentInitTime! : number;
  viewInitTime! : number;

  constructor() {
    this.startTime = window.performance.now()
    localStorage.setItem("startTime", JSON.stringify(this.startTime))
  }

  ngOnInit() {
    this.initTime = window.performance.now()
    localStorage.setItem("pageLoadTime", JSON.stringify((this.initTime-this.startTime)/1000))
    this.investmentIdeaIndex = window.location.href.split("/")[4];
  }


  financeNewRoute(){
    this.clicks +=1 
    localStorage.setItem("pageClicks",JSON.stringify(this.clicks))
  }
  tradingIdeaRoute(){
    this.clicks +=1 
    localStorage.setItem("pageClicks",JSON.stringify(this.clicks))
  }
  backRoute(){
    this.clicks +=1 
    localStorage.setItem("pageClicks",JSON.stringify(this.clicks))
  }
}


