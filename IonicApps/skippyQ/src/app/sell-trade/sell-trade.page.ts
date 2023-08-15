import { Component, OnInit } from '@angular/core';
// import {DataService} from '../services/data.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-list',
  templateUrl: 'sell-trade.page.html',
  styleUrls: ['sell-trade.page.scss']
})
export class SellTradePage implements OnInit{

  portfolioSelectionClicks=0
  sellTradeVisits = localStorage.getItem("sellTradePageVisits")
  
  startTime! : number;
  initTime! : number;
  contentInitTime! : number;
  viewInitTime! : number;
  taskstartTime! : number;
  clicks = parseInt(localStorage.getItem("pageClicks"))










  ngOnInit() {
    this.initTime = window.performance.now()
    localStorage.setItem("pageLoadTime", JSON.stringify((this.initTime-this.startTime)/1000))


  }

    constructor(public router: Router,){
      this.startTime = window.performance.now()
      localStorage.setItem("startTime", JSON.stringify(this.startTime))

    }


    portfolioSelectionbtn(){
      this.clicks += 1
      localStorage.setItem("pageClicks",JSON.stringify(this.clicks))


  }






   }


