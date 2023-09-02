import { Component, OnInit, SimpleChange } from '@angular/core';
import { NavController, LoadingController } from '@ionic/angular';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';
import { Router } from '@angular/router';
import { TrackingService } from './../shared/services/tracking.service';
import { collection, getDocs } from "firebase/firestore";
import { trading } from '../shared/models/trading';
import { InterceptorService } from '../shared/services/interceptor.service';
import { Storage } from '@ionic/storage';
import { HttpClient, HttpRequest, HttpHandler, HttpEvent, HttpHeaders } from '@angular/common/http';
import { from, Observable, catchError, } from 'rxjs';
import { SqlService } from '../shared/services/sqldb.service'



interface HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>
}

@Component({
  selector: 'app-home',
  templateUrl: 'trading-home.page.html',
  styleUrls: ['trading-home.page.scss'],
})
export class TradingHomePage implements OnInit {

  clicks = parseInt(localStorage.getItem("pageClicks"))

  startTime!: number
  initTime!: number
  contentInitTime!: number
  viewInitTime!: number
  dbStartTime!: number

  orderStatus = "";
  item = [];
  orderType = "";
  portfolioType = "";
  portfolioId = "";
  units = "";
  validity = "";
  backEndErrors = 0;



  constructor(public http: HttpClient, public router: Router, private trackingService: TrackingService, private SqlService: SqlService) {
    this.startTime = window.performance.now()
    localStorage.setItem("startTime", JSON.stringify(this.startTime))
    console.log(this.startTime / 1000)
  }


  details = new Array<any>();;
  trading = new Array<any>();
  selectedArray = new Array<any>();



  ngOnInit() {

    this.initTime = window.performance.now()
    this.orderStatus = "pending"


    this.SqlService.getTrading().subscribe(result => {

      var jsonbody = result['Data']['recordset']

      for (var i = 0; i < jsonbody.length; i++) {
        var newTrade = new trading(jsonbody[i]['foreignBrokerage'], jsonbody[i]['marketValue'], jsonbody[i]['orderNumber'],
          jsonbody[i]['orderStatus'], jsonbody[i]['orderType'], jsonbody[i]['portfolioId'], jsonbody[i]['portfolioType'], jsonbody[i]['priceLimit'],
          jsonbody[i]['quantity'], jsonbody[i]['settlementCurrency'], jsonbody[i]['tradingPlace'], jsonbody[i]['triggerLimit'],
          jsonbody[i]['units'], jsonbody[i]['validity'], jsonbody[i]['enteredOn'], jsonbody[i]['executedStocks'])
        this.details.push(newTrade)
      }

      this.pending(false)

    }, error => {
      this.backEndErrors += 1
      localStorage.setItem("backEndErrors", JSON.stringify(this.backEndErrors))
    })

    localStorage.setItem("pageLoadTime", JSON.stringify((this.initTime - this.startTime) / 1000))
    localStorage.setItem("dbLoadTime", JSON.stringify(window.performance.now() - parseFloat(localStorage.getItem("dbLoadTime"))))
  }


  pending(count = true) {
    this.selectedArray = this.details.filter(detail => detail.orderStatus === "Pending")
    if (count == true) {
      this.clicks += 1
      localStorage.setItem("pageClicks", JSON.stringify(this.clicks))
      console.log("In pending: ", this.clicks)
    }
  }

  executed() {
    this.selectedArray = this.details.filter(detail => detail.orderStatus == "Executed" || detail.orderStatus == "Partially Executed")
    this.clicks += 1
    localStorage.setItem("pageClicks", JSON.stringify(this.clicks))
    console.log("In executed: ", this.clicks)
  }


  closed() {
    this.selectedArray = this.details.filter(detail => detail.orderStatus === "Closed")
    this.clicks += 1
    localStorage.setItem("pageClicks", JSON.stringify(this.clicks))
    console.log("In closed: ", this.clicks)
  }

  viewAll() {

    this.selectedArray = this.details
    this.clicks += 1

    localStorage.setItem("pageClicks", JSON.stringify(this.clicks))
  }

  buyRoute() {
    this.clicks += 1
    localStorage.setItem("pageClicks", JSON.stringify(this.clicks))
  }


  sellRoute() {
    this.clicks += 1
    localStorage.setItem("pageClicks", JSON.stringify(this.clicks))
  }


  modify(index) {

    this.clicks += 1

    localStorage.setItem("pageClicks", JSON.stringify(this.clicks))

    this.router.navigate(['/trade-details',
      {
        enteredOn: this.selectedArray[index].enteredOn,
        quantity: this.selectedArray[index].quantity,
        settlementCurrency: this.selectedArray[index].settlementCurrency,
        foreignBrokerage: this.selectedArray[index].foreignBrokerage,
        executedStocks: this.selectedArray[index].executedStocks,
        orderType: this.selectedArray[index].orderType,
        portfolioType: this.selectedArray[index].portfolioType,
        portfolioId: this.selectedArray[index].portfolioId,
        orderStatus: this.selectedArray[index].orderStatus,
        units: this.selectedArray[index].units,
        validity: this.selectedArray[index].validity,
        marketValue: this.selectedArray[index].marketValue,
        triggerLimit: this.selectedArray[index].triggerLimit,
        priceLimit: this.selectedArray[index].priceLimit

      }
    ])
  }

}
