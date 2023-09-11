import { Component, OnInit } from '@angular/core';
// import {DataService} from '../services/data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { TrackingService } from './../shared/services/tracking.service';

@Component({
  selector: 'app-list',
  templateUrl: 'sell-trade-stock-review.page.html',
  styleUrls: ['sell-trade-stock-review.page.scss']
})
export class SellTradeStockReviewPage implements OnInit {

  listData = [];
  orderList = ["Market Order", "Limit Order",
    "Stop Loss Order", "Stop Limit Order", "Conditional Order",
    "Attached Orders", "OCA (One-Cancels-All) Order", "Trailing Stop Order"];
  errors = [];

  accountAmount = 75553;
  askPrice = 76.57;
  bidPrice = 76.54;

  units = this.route.snapshot.paramMap.get("units")
  selectOrder = this.route.snapshot.paramMap.get("selectOrder")
  limit = this.route.snapshot.paramMap.get("limit")
  triggerLimit = this.route.snapshot.paramMap.get("triggerLimit")
  from = this.route.snapshot.paramMap.get("from")
  to = this.route.snapshot.paramMap.get("to")
  tradingPlace = this.route.snapshot.paramMap.get("tradingPlace")
  price = this.route.snapshot.paramMap.get("price")
  marketValue = parseInt(this.units) * parseInt(this.price)

  clicks = 0

  startTime!: number
  initTime!: number
  dbStartTime!: number
  contentInitTime!: number
  viewInitTime!: number
  dbloadTime!: number
  backEndErrors = 0;
  pageName: string = "sellTradeStockReview";

  constructor(public route: ActivatedRoute, public router: Router, private trackingService: TrackingService) {
    this.startTime = window.performance.now()
    localStorage.setItem("startTime", JSON.stringify(this.startTime))
  }

  ngOnInit() {
    this.initTime = window.performance.now()
    localStorage.setItem("pageLoadTime", JSON.stringify((this.initTime - this.startTime)))
  }

  backButton() {
    this.clicks += 1
    localStorage.setItem("pageClicks", JSON.stringify(this.clicks))
    this.trackingService.trackCTAMetrics(this.pageName, "button", "click on back button", "sellTradeStockDetails", 0);
  }

  submit() {
    this.clicks += 1
    localStorage.setItem("pageClicks", JSON.stringify(this.clicks))
    this.trackingService.trackCTAMetrics(this.pageName, "button", "click on submit button", "sellTradeStockCompleted", 0);
    this.router.navigate(['/sell-trade-stock-completed'])
  }
}