import { Component, OnInit } from '@angular/core';
import { Campaign } from '../shared/models/campaign';
// import {DataService} from '../services/data.service';
import { Router } from '@angular/router';
import { TrackingService } from './../shared/services/tracking.service';


@Component({
  selector: 'app-list',
  templateUrl: 'buy-trade-stock.page.html',
  styleUrls: ['buy-trade-stock.page.scss']
})
export class BuyTradeStockPage implements OnInit {


  allCampaigns: Campaign[];
  campaigns: Campaign[];
  campaignEmail: string;
  listData = [];
  errorMessage = [];

  clicks = 0

  startTime! : number
  initTime! : number
  dbStartTime! : number
  contentInitTime! : number
  viewInitTime! : number
  dbloadTime!: number
  backEndErrors = 0;
  pageName: string = "buyTradeStock";

  frontEndErrors = parseInt(localStorage.getItem("frontEndErrors"))

  constructor(private router: Router, private trackingService: TrackingService) {
    this.startTime = window.performance.now()
    localStorage.setItem("startTime",JSON.stringify(this.startTime))
  }

  ngOnInit() {
    this.initTime = window.performance.now()
    localStorage.setItem("pageLoadTime", JSON.stringify((this.initTime - this.startTime)))
  }

  backButton() {
    this.clicks += 1
    localStorage.setItem("pageClicks", JSON.stringify(this.clicks))
    this.trackingService.trackCTAMetrics(this.pageName, "button", "click on back button", "buyTrade", 0);
  }

  onClear(ev2) {
    // if (localStorage.getItem("frontEndErrors") === null){
    //   localStorage.setItem("frontEndErrors",JSON.stringify(this.errorMessage))

    // }
    // else {
    //   localStorage.setItem("frontEndErrors",JSON.stringify(JSON.parse(localStorage.getItem("frontEndErrors")).concat(this.errorMessage)))

    // }

    this.errorMessage = [];

  }

  routeTradeStock() {

    this.clicks += 1
    localStorage.setItem("pageClicks", JSON.stringify(this.clicks))
    this.trackingService.trackCTAMetrics(this.pageName, "button", "click on stock item", "buyTradeStockDetails", 0);

  }

  getItems(ev) {
    // track time taken to do a retrieval from firebase
    // localStorage.setItem("getStockTime", JSON.stringify(window.performance.now()))
    // Reset items back to all of the items
    console.log(this.errorMessage)

    // set val to the value of the ev target
    var val = ev.target.value;
    // if the value is an empty string don't filter the items
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
