import { Component, OnInit } from '@angular/core';
// import {DataService} from '../services/data.service';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { TrackingService } from './../shared/services/tracking.service';


@Component({
  selector: 'app-list',
  templateUrl: 'sell-trade-stock-completed.page.html',
  styleUrls: ['sell-trade-stock-completed.page.scss']
})
export class SellTradeStockCompletedPage implements OnInit {


  today = new Date();

  clicks = 0

  startTime!: number
  initTime!: number
  dbStartTime!: number
  contentInitTime!: number
  viewInitTime!: number
  dbloadTime!: number
  backEndErrors = 0;
  pageName: string = "sellTradeStockCompleted";

  constructor(public route: ActivatedRoute, public router: Router, private trackingService: TrackingService) {
    this.startTime = window.performance.now()
    localStorage.setItem("startTime", JSON.stringify(this.startTime))
  }


  ngOnInit() {
    this.initTime = window.performance.now()
    localStorage.setItem("pageLoadTime", JSON.stringify((this.initTime - this.startTime)))
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        if (this.router.url === '/sell-trade-stock-completed') {
          if (localStorage.getItem("userStoryID") == "13" && JSON.parse(localStorage.getItem("selectOrder")) == "Limit Order") {
            setTimeout(() => {
              alert('You have completed this user story!');
              this.trackingService.trackJourneyMetrics(window.performance.now());
              localStorage.clear();
              location.reload();
              this.router.navigate(['/user-stories'])
            }, 200);
          }
        }
      }
    });
  }

  crossButton() {
    this.clicks += 1
    localStorage.setItem("pageClicks", JSON.stringify(this.clicks))
    this.trackingService.trackCTAMetrics(this.pageName, "button", "click on cross button", "tradingHome", 0);
  }

  newOrder() {
    this.clicks += 1
    localStorage.setItem('pageClicks', JSON.stringify(this.clicks))
    this.trackingService.trackCTAMetrics(this.pageName, "button", "click on new order button", "sellTrade", 0);
    this.router.navigate(['/sell-trade'])
  }
}
