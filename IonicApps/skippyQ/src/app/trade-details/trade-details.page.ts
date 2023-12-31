import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TrackingService } from './../shared/services/tracking.service';

@Component({
  selector: 'app-list',
  templateUrl: 'trade-details.page.html',
  styleUrls: ['trade-details.page.scss']
})
export class TradeDetailsPage implements OnInit {

  listData = [];
  orderList = ["Market Order", "Limit Order",
    "Stop Loss Order", "Stop Limit Order", "Conditional Order",
    "Attached Orders", "OCA (One-Cancels-All) Order", "Trailing Stop Order"];
  errors = [];
  account = "0546 00127914V UBS Current Amount for Private Clients"
  portfolio_acc = "0546 001279 001 Equity MR E-T EQT_SG_BUY_TSB"
  accountAmount = 75553;
  price = 23.57;
  askPrice = 76.57;
  bidPrice = 76.54;
  selectedDetail = "Order";

  clicks = 0

  startTime!: number
  initTime!: number
  dbStartTime!: number
  contentInitTime!: number
  viewInitTime!: number
  dbloadTime!: number
  backEndErrors = 0;
  pageName: string = "tradeDetails";

  constructor(public route: ActivatedRoute, public router: Router, private trackingService: TrackingService) {
    this.startTime = window.performance.now()
    localStorage.setItem("startTime", JSON.stringify(this.startTime))
  }

  units = this.route.snapshot.paramMap.get("units")
  validity = this.route.snapshot.paramMap.get("validity")
  portfolioType = this.route.snapshot.paramMap.get("portfolioType")
  orderType = this.route.snapshot.paramMap.get("orderType")
  orderStatus = this.route.snapshot.paramMap.get("orderStatus")
  enteredOn = this.route.snapshot.paramMap.get("enteredOn")
  marketValue = this.route.snapshot.paramMap.get("marketValue")
  settlementCurrency = this.route.snapshot.paramMap.get("settlementCurrency")
  foreignBrokerage = this.route.snapshot.paramMap.get("foreignBrokerage")
  portfolioId = this.route.snapshot.paramMap.get("portfolioId")
  quantity = this.route.snapshot.paramMap.get("quantity")
  executedStocks = this.route.snapshot.paramMap.get("executedStocks")
  triggerLimit = this.route.snapshot.paramMap.get("triggerLimit")
  priceLimit = this.route.snapshot.paramMap.get("priceLimit")
  orderNumber = this.route.snapshot.paramMap.get("orderNumber")
  tradingPlace = this.route.snapshot.paramMap.get("tradingPlace")

  orderData = {
    priceLimit: this.priceLimit,
    triggerLimit: this.triggerLimit,
    orderNumber: this.orderNumber,
    quantity: this.quantity,
    tradingCurrency: this.settlementCurrency,
    tradingPlace: this.tradingPlace,
    enteredOn: this.enteredOn,
    validity: this.validity
  }
  orderKeys = Object.keys(this.orderData)


  executedData = {
    priceLimit: this.priceLimit,
    triggerLimit: this.triggerLimit,
    executedQuantity: this.executedStocks.length,
    pendingQuantity: 0,
    averageExecutionPrice: 25.11,
    tradingCurrency: this.settlementCurrency
  }

  executedKeys = Object.keys(this.executedData)


  settlementData = {
    settledQuantity: 1,
    marketValue: this.marketValue,
    foreignBrokerage: this.foreignBrokerage,
    expensesAbroad: parseInt(this.foreignBrokerage) * 0.20,
    brokerageFee: parseInt(this.foreignBrokerage) * 0.25,
    stampDuty: parseInt(this.foreignBrokerage) * 0.07,
    gst: parseInt(this.foreignBrokerage) * 0.19,
    debitedAmount: parseInt(this.foreignBrokerage) * 0.85,
    settledTrades: this.executedStocks

  }
  settleKeys = Object.keys(this.settlementData)


  ngOnInit() {
    this.selectedDetail = "Order"
    this.initTime = window.performance.now()
    localStorage.setItem("pageLoadTime", JSON.stringify((this.initTime - this.startTime)))
  }

  order() {
    this.clicks += 1
    localStorage.setItem("pageClicks", JSON.stringify(this.clicks))
    this.trackingService.trackCTAMetrics(this.pageName, "button", "click on order filter", "view orderDetails = order", 0);
  }

  execution() {
    this.clicks += 1
    localStorage.setItem("pageClicks", JSON.stringify(this.clicks))
    this.trackingService.trackCTAMetrics(this.pageName, "button", "click on execution filter", "view orderDetails = execution", 0);
  }

  settlement() {
    this.clicks += 1
    localStorage.setItem("pageClicks", JSON.stringify(this.clicks))
    this.trackingService.trackCTAMetrics(this.pageName, "button", "click on order settlement", "view orderDetails = settlement", 0);
  }

  backButton() {
    this.clicks += 1
    localStorage.setItem("pageClicks", JSON.stringify(this.clicks))
    this.trackingService.trackCTAMetrics(this.pageName, "button", "click on back button", "tradingHome", 0);
  }

  orderOverview() {
    this.clicks += 1
    localStorage.setItem("pageClicks", JSON.stringify(this.clicks))
    this.trackingService.trackCTAMetrics(this.pageName, "button", "click on order overview button", "tradingHome", 0);
    this.router.navigate(['/trading-home'])
  }
  cancel() {
    this.clicks += 1
    localStorage.setItem("pageClicks", JSON.stringify(this.clicks))
    this.trackingService.trackCTAMetrics(this.pageName, "button", "click on cancel button", "requestCancelOrder", 0);
    this.router.navigate(['/request-cancel-order'])
  }
}


