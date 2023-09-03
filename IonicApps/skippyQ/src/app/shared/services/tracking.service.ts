import { Injectable } from '@angular/core';
import { Router, RouterEvent, NavigationEnd, RoutesRecognized } from '@angular/router';
import { SqlService } from './sqldb.service'

import { FrontEnd } from '../models/front-end';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';
import { filter, pairwise } from "rxjs/operators";
import { url } from 'inspector';
import { observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class TrackingService {

  private cache: { [id: number]: { description: string, time: number } } = {};


  urlConvert(currentUrl) {
    if (currentUrl.includes(';')) {
      return String(currentUrl.split(';')[0])
    }

    return currentUrl

  }

  constructor(private router: Router, private SqlService: SqlService) {

    // change in screens
    this.router.events.pipe(filter((evt: any) => evt instanceof RoutesRecognized), pairwise()).subscribe((events: RoutesRecognized[]) => {
      console.log('previous url', events[0].urlAfterRedirects);
      console.log('current url', events[1].urlAfterRedirects);
      var pageName = ""
      var domainName = ""

  
      // get total time spent on the page
      var url = this.urlConvert(events[0].urlAfterRedirects)

      if (url == "/home"){
        pageName = "home"
        domainName = "home"  
      }

      // view Trades task - eTrading
      else if (url == "/trading-home"){
        pageName = "tradingHome"
        domainName = "eTrading"
      // view Trades task - eTrading
      else if (url == "/trading-home") {
        pageName = "tradingHome"
        domainName = "eTrading"

      }
      else if (url == "/trade-details") {
        pageName = "tradeDetails"
        domainName = "eTrading"

      }
      // buy trade Task - eTrading
      else if (url == "/buy-trade") {
        pageName = "buyTrade"
        domainName = "eTrading"

      }
      else if (url == "/buy-trade-stock") {
        pageName = "buyTradeStock"
        domainName = "eTrading"

      }
      else if (url == "/buy-trade-stock-success") {
        pageName = "buyTradeStockSuccess"
        domainName = "eTrading"
      }

      else if (url == "/buy-trade-stock-review") {
        pageName = "buyTradeStockReview"
        domainName = "eTrading"
      }

      else if (url == "/buy-trade-stock-completed") {
        pageName = "buyTradeStockCompleted"
        domainName = "eTrading"

      }

      // sell trade flow
      else if (url == '/sell-trade') {
        pageName = "sellTrade"
        domainName = "eTrading"
      }
      else if (url == "/sell-trade-stock") {
        pageName = "sellTradeStock"
        domainName = "eTrading"

      }
      else if (url == "/sell-trade-stock-review") {
        pageName = "sellTradeStockReview"
        domainName = "eTrading"
      }

      else if (url == "/sell-trade-stock-completed") {
        pageName = "sellTradeStockCompleted"
        domainName = "eTrading"
      }
      else if (url == "/sell-trade-stock-success") {
        pageName = "sellTradeStockSuccess"
        domainName = "eTrading"
      }
      // cancel order task - eTrading

      else if (url == '/request-cancel-order') {
        pageName = "requestCancelOrder"
        domainName = "eTrading"
      }

      else if (url == '/cancel-order-successful') {
        pageName = "cancelOrderSuccessful"
        domainName = "eTrading"
      }

      // view investment Ideas - DII

      else if (url == "/investment-ideas") {
        pageName = "investmentIdeas"
        domainName = "Direct Investment Insights (DII)"
      }
      else if (url == "/investment-details-oil") {
        pageName = "investmentDetails"
        domainName = "Direct Investment Insights (DII)"
      }
      else if (url == "/investment-trading-idea") {
        pageName = "investmentTradingIdea"
        domainName = "Direct Investment Insights (DII)"
      }

      else if (url == "/trading-eg") {
        pageName = "tradingEg"
        domainName = "Direct Investment Insights (DII)"
      }
      else if (url == "finance-news") {
        pageName = "financeNews"
        domainName = "Direct Investment Insights (DII)"
      }


      //  ubs manage

      else if (url == "/ubs-manage") {
        pageName = "ubsManage"
        domainName = "UBS Manage"

      }
      else if (url == '/my-advice') {
        pageName = "myAdvice"
        domainName = "UBS Manage/Health Check"

      }

      // Health Check
      else if (url == '/health-check') {
        pageName = "healthCheck"
        domainName = "Health Check"

      }

      else if (url == '/star') {
        pageName = "hcStar"
        domainName = "Health Check"

      }

      else if (url == '/no-issue') {
        pageName = "hcNoIssue"
        domainName = "Health Check"

      }

      else if (url.match(/selected-issue*/)) {
        pageName = "hcSelectedIssue"
        domainName = "Health Check"

      }

      else if (url.match(/hc-details*/)) {
        pageName = "hcDetails"
        domainName = "Health Check"
      }

      else if (url == '/request-proposal') {
        pageName = "hcRequestProposal"
        domainName = "Health Check"
      }

      else if (url == '/improve-quality') {
        pageName = "hcImproveQuality"
        domainName = "Health Check"
      }

      else if (url == '/improve-quality-review') {
        pageName = "hcImproveQualityReview"
        domainName = "Health Check"
      }

      else if (url == '/improve-quality-regulatory') {
        pageName = "hcImproveQualityRegulatory"
        domainName = "Health Check"
      }

      else if (url == '/improve-quality-success') {
        pageName = "hcImproveQualitySuccess"
        domainName = "Health Check"
      }

      this.SqlService.postTrackingMetrics(this.trackPageMetrics(pageName, domainName))
    });

  }

  makeid(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
  }

  // set a current session 
  setUser() {
    // local storage can only handle strings
    localStorage.setItem("sessionId", JSON.stringify(this.makeid(28)));
    // localStorage.setItem("customerId", JSON.stringify(Math.floor(Math.random() * (1010 - 1000 + 1) + 1000)));
    localStorage.setItem("customerId", JSON.stringify(2295));
    localStorage.setItem("dateEntered", new Date().toISOString());
    localStorage.setItem("pageCount", JSON.stringify(0));
    localStorage.setItem("pageClicks", JSON.stringify(0));
    localStorage.setItem("frontEndErrors", JSON.stringify(0));
    localStorage.setItem("backEndErrors", JSON.stringify(0))
    localStorage.setItem("dbLoadTime", JSON.stringify(0))
    localStorage.setItem('pageLoadTime', JSON.stringify(0))

  }

  trackPageMetrics(pageName, domainName) {
    // getting the button details  
    var pageCount = parseInt(localStorage.getItem("pageCount"))

    var jsonbody = {
      "sessionId": JSON.parse(localStorage.getItem("sessionId")),
      "customerId": JSON.parse(localStorage.getItem("customerId")),
      "domainName": domainName,
      "pageName": pageName,
      "pageNo": pageCount,
      "clicks": parseInt(localStorage.getItem("pageClicks")),
      "elapsedDuration": Number(((window.performance.now() - parseFloat(localStorage.getItem("startTime"))) / 1000).toFixed(5)),
      "dbLoadTime": Number(((parseFloat(localStorage.getItem("dbLoadTime")) / 1000)).toFixed(5)),
      "frontEndErrors": parseInt(localStorage.getItem("frontEndErrors")),
      "backEndErrors": parseInt(localStorage.getItem("backEndErrors")),
      "renderDuration": Number(parseFloat(localStorage.getItem("pageLoadTime")).toFixed(5))

    }

    console.log(jsonbody)

    localStorage.setItem("pageClicks", JSON.stringify(0));
    localStorage.setItem("frontEndErrors", JSON.stringify(0));
    localStorage.setItem("backEndErrors", JSON.stringify(0))
    localStorage.setItem("pageCount", JSON.stringify(pageCount + 1))
    localStorage.setItem('dbLoadTime', JSON.stringify(0))

    return jsonbody
  }

}