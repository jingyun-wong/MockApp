import { Component, OnInit } from '@angular/core';
import { Campaign } from '../shared/models/campaign';
import { TrackingService } from './../shared/services/tracking.service';
import { SqlService } from '../shared/services/sqldb.service';
import { investment } from '../shared/models/investment';
import { tradingIdea } from '../shared/models/trading-idea';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: 'investment-details-oil.page.html',
  styleUrls: ['investment-details-oil.page.scss']
})
export class InvestmentDetailsOilPage implements OnInit {

  investmentIdeaIndex: string;
  investmentIdea: investment;
  tradingIdea: tradingIdea;
  tradingIdeaList: tradingIdea[] = [];
  allCampaigns: Campaign[];
  campaigns: Campaign[];
  campaignEmail:string;
  clicks= parseInt(localStorage.getItem("pageClicks")) ;

  startTime! : number;
  initTime! : number;
  contentInitTime! : number;
  viewInitTime! : number;
  backEndErrors = 0;
  pageName: string = 'investmentDetails'

  constructor(private SqlService: SqlService, public activatedRoute: ActivatedRoute, public trackingService: TrackingService, public router: Router) {
    this.startTime = window.performance.now()
    localStorage.setItem("startTime", JSON.stringify(this.startTime))
  }

  ngOnInit() {
    this.initTime = window.performance.now()
    localStorage.setItem("pageLoadTime", JSON.stringify((this.initTime-this.startTime)/1000))

    this.activatedRoute.queryParams.subscribe(params => {
      this.investmentIdeaIndex = params["id"];

      this.SqlService.getInvestmentIdeasById(this.investmentIdeaIndex).subscribe(result => {
        var jsonbody = result['Data']['recordset']
        this.investmentIdea = jsonbody[0]
    
        this.SqlService.getTradingIdeas(this.investmentIdea.category).subscribe(result => {
          var jsonbody = result['Data']['recordset']
          var chosenList = []
          this.tradingIdeaList = []

          while (this.tradingIdeaList.length < 3){
            var idx = Math.floor(Math.random() * jsonbody.length);

            if (!chosenList.includes(idx)){
              console.log(idx, chosenList, this.tradingIdeaList)
              this.tradingIdeaList.push(jsonbody[idx])
              chosenList.push(idx)
            }
          }

          if (localStorage.getItem("userStoryId") == "5"){
            alert('You have completed this user story!');  
            this.trackingService.trackJourneyMetrics(window.performance.now());
            localStorage.clear();
            this.router.navigate(['/user-stories'])
          }
      
        }, error => {
          this.backEndErrors += 1
          localStorage.setItem("backEndErrors", JSON.stringify(this.backEndErrors))
          console.log(error)
        })
  
      }, error => {
        this.backEndErrors += 1
        localStorage.setItem("backEndErrors", JSON.stringify(this.backEndErrors))
        console.log(error)
      })
  
      this.SqlService.getTradingIdeaById(this.investmentIdeaIndex).subscribe(result => {
        var jsonbody = result['Data']['recordset']
        this.tradingIdea = jsonbody[0]  
      }, error => {
        this.backEndErrors += 1
        localStorage.setItem("backEndErrors", JSON.stringify(this.backEndErrors))
        console.log(error)
      })
    }); 
  }

  financeNewRoute(){
    this.clicks +=1 
    localStorage.setItem("pageClicks",JSON.stringify(this.clicks))
    this.trackingService.trackCTAMetrics(this.pageName, "button", "click on an DII finance tags", "financeNews", 0);
  }
  tradingIdeaRoute(){
    this.clicks +=1 
    localStorage.setItem("pageClicks",JSON.stringify(this.clicks))
    this.trackingService.trackCTAMetrics(this.pageName, "button", "click on an DII trading ideas", "investmentTradingIdea", 0);
  }
  backRoute(){
    this.clicks +=1 
    localStorage.setItem("pageClicks",JSON.stringify(this.clicks))
    this.trackingService.trackCTAMetrics(this.pageName, "button", "back to DII investment Ideas page", "investmentIdeas", 0);
  }
}


