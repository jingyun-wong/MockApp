import { Component, OnInit } from '@angular/core';
// import {DataService} from '../services/data.service';
import { Router } from '@angular/router';
import { TrackingService } from './../shared/services/tracking.service';


@Component({
  selector: 'app-list',
  templateUrl: 'buy-trade-stock-success.page.html',
  styleUrls: ['buy-trade-stock-success.page.scss']
})
export class BuyTradeStockSuccessPage implements OnInit {
  listData = [];
  orderList = ["Market Order", "Limit Order",
    "Stop Loss Order", "Stop Limit Order", "Conditional Order",
    "Attached Orders", "OCA (One-Cancels-All) Order", "Trailing Stop Order"];

  errors = [];

  accountAmount = 75553;
  tradingPlace = "";
  units = 0;
  price = 23.57;
  selectOrder = "";
  askPrice = 76.57;
  bidPrice = 76.54;
  from = "";
  to = "";
  limit = "";
  triggerLimit = "";

  clicks = 0

  startTime! : number
  initTime! : number
  dbStartTime! : number
  contentInitTime! : number
  viewInitTime! : number
  dbloadTime!: number
  backEndErrors = 0;
  pageName: string = "buyTradeStockDetails";

  frontEndErrors = parseInt(localStorage.getItem('frontEndErrors'))

  isModalOpen = false;
  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

  constructor(public router: Router, private trackingService: TrackingService) {
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
    this.trackingService.trackCTAMetrics(this.pageName, "button", "click on back button", "buyTradeStock", 0);
  }

  check() {

    this.clicks += 1
    localStorage.setItem("pageClicks", JSON.stringify(this.clicks))
    this.trackingService.trackCTAMetrics(this.pageName, "button", "click on next button", "buyTradeStockReview", 0);

    this.errors = []

    if (this.units == 0 || this.tradingPlace == "" || this.selectOrder == "" || this.triggerLimit == "") {
      this.errors.push("Missing Fields")
      this.frontEndErrors += 1
      localStorage.setItem("frontEndErrors", JSON.stringify(this.frontEndErrors))

    }
    else if (this.units < 1000) {
      this.errors.push("There should be a minimum purchase of one lot")

      this.frontEndErrors += 1
      localStorage.setItem("frontEndErrors", JSON.stringify(this.frontEndErrors))

    }
    else if (this.to < this.from) {
      this.errors.push("There is error with the date")
      this.frontEndErrors += 1
      localStorage.setItem("frontEndErrors", JSON.stringify(this.frontEndErrors))

    }
    else if (this.accountAmount < this.units * this.price) {
      this.errors.push("There is insufficient funds in your account")

      this.frontEndErrors += 1
      localStorage.setItem("frontEndErrors", JSON.stringify(this.frontEndErrors))
    }

    else {
      localStorage.setItem("selectOrder", JSON.stringify(this.selectOrder))

      this.router.navigate(['/buy-trade-stock-review', {
        units: this.units,
        tradingPlace: this.tradingPlace,
        price: this.price,
        from: this.from,
        to: this.to,
        limit: this.limit,
        triggerLimit: this.triggerLimit,
        selectOrder: this.selectOrder
      }])
    }
  }
}


