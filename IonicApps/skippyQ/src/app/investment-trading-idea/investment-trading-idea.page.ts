import { Component, OnInit } from '@angular/core';
import { Campaign } from '../shared/models/campaign';


@Component({
  selector: 'app-list',
  templateUrl: 'investment-trading-idea.page.html',
  styleUrls: ['investment-trading-idea.page.scss']
})
export class InvestmentTradingIdeaPage implements OnInit {

  allCampaigns: Campaign[];
  campaigns: Campaign[];
  campaignEmail:string;

  startTime! : number
  initTime! : number
  dbStartTime! : number
  contentInitTime! : number
  viewInitTime! : number
  dbloadTime!: number
  backEndErrors =0;
  clicks = parseInt(localStorage.getItem('pageClicks'))


  constructor() {
    this.startTime = window.performance.now()
    localStorage.setItem("startTime", JSON.stringify(this.startTime))
  }

  ngOnInit() {
  this.initTime = window.performance.now()
  localStorage.setItem("pageLoadTime", JSON.stringify((this.initTime-this.startTime)/1000))

  }

  buyTradeRoute(){
    this.clicks +=1 
    localStorage.setItem("pageClicks",JSON.stringify(this.clicks))

  }
  tradingRouteEg(){
    this.clicks +=1 
    localStorage.setItem("pageClicks",JSON.stringify(this.clicks))

  }
  backInvestment(){
    this.clicks +=1 
    localStorage.setItem("pageClicks",JSON.stringify(this.clicks))

  }
  
}
