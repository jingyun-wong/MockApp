import { Component, OnInit } from '@angular/core';
import { Campaign } from '../shared/models/campaign';
import { TrackingService } from '../shared/services/tracking.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-list',
  templateUrl: 'finance-news.page.html',
  styleUrls: ['finance-news.page.scss']
})
export class FinanceNewsPage implements OnInit {

  allCampaigns: Campaign[];
  campaigns: Campaign[];
  campaignEmail:string;
  startTime! : number;
  initTime! : number;
  pageName: string = 'financeNews'


  constructor(public trackingService: TrackingService, public router: Router) {
    this.startTime = window.performance.now()
    localStorage.setItem("startTime", JSON.stringify(this.startTime))
    localStorage.setItem("dbLoadTime", JSON.stringify(0))
  }

  ngOnInit() {
    this.initTime = window.performance.now()
    localStorage.setItem("pageLoadTime", JSON.stringify((this.initTime-this.startTime)))

    if (localStorage.getItem("userStoryID") == "15"){
      this.trackingService.trackJourneyMetrics(window.performance.now());
      setTimeout(() => {
        alert("You have completed the user story!") ;   
        localStorage.clear();
        this.router.navigate(['/user-stories'])}
      ,500)
    }
  }
}
