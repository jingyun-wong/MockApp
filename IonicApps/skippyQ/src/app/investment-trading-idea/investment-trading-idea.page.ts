import { Component, OnInit } from '@angular/core';
import { Campaign } from '../shared/models/campaign';
import { ActivatedRoute, Router } from '@angular/router';
import { tradingIdea } from '../shared/models/trading-idea';
import { TrackingService } from '../shared/services/tracking.service';

@Component({
  selector: 'app-list',
  templateUrl: 'investment-trading-idea.page.html',
  styleUrls: ['investment-trading-idea.page.scss']
})
export class InvestmentTradingIdeaPage implements OnInit {

  allCampaigns: Campaign[];
  campaigns: Campaign[];
  campaignEmail:string;
  tradingIdeaName: string;
  tradingIdeaType: string;

  startTime! : number
  initTime! : number
  dbStartTime! : number
  contentInitTime! : number
  viewInitTime! : number
  dbloadTime!: number
  backEndErrors =0;
  clicks = parseInt(localStorage.getItem('pageClicks'))
  pageName: string = "investmentTradingIdea"

  constructor(private activatedRoute: ActivatedRoute, public trackingService: TrackingService, public router: Router) {
    this.startTime = window.performance.now()
    localStorage.setItem("startTime", JSON.stringify(this.startTime))
    localStorage.setItem("dbLoadTime", JSON.stringify(0))
    this.activatedRoute.queryParams.subscribe(params => {
      this.tradingIdeaName = params["name"];
      this.tradingIdeaType = params["type"];
    });  
  }

  ngOnInit() {
    this.initTime = window.performance.now()
    localStorage.setItem("pageLoadTime", JSON.stringify((this.initTime-this.startTime)/1000))
  }

  buyTradeRoute(){
    this.clicks +=1 
    localStorage.setItem("pageClicks",JSON.stringify(this.clicks))
    this.trackingService.trackCTAMetrics(this.pageName, "button",  `click on buy trade on DII`, "buyTrade", 0);
    
    if (localStorage.getItem("userStoryID") == "16"){
      alert('You have completed this user story!');  
      this.trackingService.trackJourneyMetrics(window.performance.now());
      localStorage.clear();
      // location.reload();
      this.router.navigate(['/user-stories'])
    }
  }

  tradingRouteEg(){
    this.clicks +=1 
    localStorage.setItem("pageClicks",JSON.stringify(this.clicks))
    this.trackingService.trackCTAMetrics(this.pageName, "button",  `click on more details on DII`, "tradingEg", 0);
  }

  backInvestment(){
    this.clicks +=1 
    localStorage.setItem("pageClicks",JSON.stringify(this.clicks))
    this.trackingService.trackCTAMetrics(this.pageName, "button",  `back tn an DII article page`, "investmentDetails", 0);
  }
}
