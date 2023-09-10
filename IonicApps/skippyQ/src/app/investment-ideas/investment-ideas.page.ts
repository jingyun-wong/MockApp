import { Component, OnInit } from '@angular/core';
import { Campaign } from '../shared/models/campaign';
import { investment } from '../shared/models/investment';
import { Router, RouterEvent, NavigationEnd, RoutesRecognized} from '@angular/router';
import {SqlService} from '../shared/services/sqldb.service'
import { TrackingService } from '../shared/services/tracking.service';


@Component({
  selector: 'app-list',
  templateUrl: 'investment-ideas.page.html',
  styleUrls: ['investment-ideas.page.scss']
})
export class InvestmentIdeasPage implements OnInit {

  clicks = 0
  allInvestment:{[key:string]:any[]}={};
  investment:investment[] = []
  mostRead: investment[] = []

  startTime! : number
  initTime! : number
  dbStartTime! : number
  contentInitTime! : number
  viewInitTime! : number
  dbloadTime!: number
  backEndErrors = 0;
  pageName: string = "investmentIdeas";

  constructor(private SqlService :SqlService, public trackingService: TrackingService) {
    this.startTime = window.performance.now()
    localStorage.setItem("startTime", JSON.stringify(this.startTime))
  }

  ngOnInit() {
    this.initTime = window.performance.now()
    localStorage.setItem("pageLoadTime", JSON.stringify((this.initTime-this.startTime) / 1000))

    this.SqlService.getInvestmentIdeas().subscribe(result => {
      var jsonbody = result['Data']['recordset']
      for (var i = 0; i < jsonbody.length; i++){
        console.log(jsonbody[i])
        var newInvestment = new investment(jsonbody[i]['id'],jsonbody[i]['category'],jsonbody[i]['img'],jsonbody[i]['post'],jsonbody[i]['title'],jsonbody[i]['details'])
        if (newInvestment.category in this.allInvestment){
          this.allInvestment[newInvestment.category].push(newInvestment)
        }
        else{
          this.allInvestment[newInvestment.category] = [newInvestment]
        }
      }

      for ( let topic in this.allInvestment ){
        var random = Math.floor(Math.random() * this.allInvestment['sustainability'].length)
        this.investment.push(this.allInvestment[topic][random])
      }

      for ( let topic in this.allInvestment ){
        var random = Math.floor(Math.random() * this.allInvestment['sustainability'].length)
        this.mostRead.push(this.allInvestment[topic][random])
      }

      localStorage.setItem("dbLoadTime", JSON.stringify(window.performance.now()))
    }, error => {
      this.backEndErrors += 1
      localStorage.setItem("backEndErrors", JSON.stringify(this.backEndErrors))
      console.log(error)
    })

    localStorage.setItem("dbLoadTime",JSON.stringify(parseFloat(localStorage.getItem("dbLoadTime")) - this.initTime))
  }

  investmentDetails(){
      this.clicks += 1
      localStorage.setItem("pageClicks", JSON.stringify(this.clicks));
      this.trackingService.trackCTAMetrics(this.pageName, "button", "click on an DII Article", "investmentDetails", 0);
  }
}