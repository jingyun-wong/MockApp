import { Component, OnInit } from '@angular/core';
import { Campaign } from '../shared/models/campaign';
// import {DataService} from '../services/data.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-list',
  templateUrl: 'sell-trade-stock.page.html',
  styleUrls: ['sell-trade-stock.page.scss']
})
export class SellTradeStockPage implements OnInit {


  allCampaigns: Campaign[];
  campaigns: Campaign[];
  campaignEmail:string;
  listData = [];
  errorMessage = [];
  trade_stock_route = 0;
  startTime! : number
  initTime! : number
  contentInitTime! : number
  viewInitTime! : number
  clicks = parseInt(localStorage.getItem("pageClicks"))
  frontEndErrors = parseInt(localStorage.getItem("frontEndErrors"))
  

  currencies = [{currency:"EUR",
                 units:50},
                 {currency:"USD",
                  units:60}
                 ]






  constructor(private router: Router) {
    this.startTime = window.performance.now()
    localStorage.setItem("startTime", JSON.stringify(this.startTime))

  }


//   constructor(){}

//   async loadData(){
//   this.dataService.getData().subscribe(res => {
//   this.listData = res
//   }
//   );
//   }

  ngOnInit() {
    this.initTime = window.performance.now()
    localStorage.setItem("pageLoadTime", JSON.stringify((this.initTime-this.startTime)/1000))


  }

  onClear(ev2){
    // if (localStorage.getItem("frontEndErrors") === null){
    //   localStorage.setItem("frontEndErrors",JSON.stringify(this.errorMessage))

    // }
    // else {
    //   localStorage.setItem("frontEndErrors",JSON.stringify(JSON.parse(localStorage.getItem("frontEndErrors")).concat(this.errorMessage)))

    // }

    

    this.errorMessage = [];


  }

  routeTradeStock(){
    this.clicks +=1
    localStorage.setItem("pageClicks", JSON.stringify(this.clicks))




  }

  getItems(ev) {
      // Reset items back to all of the items

      // set val to the value of the ev target
      var val = ev.target.value;



      if (val != '') {

        if (val.length > 10){
        this.errorMessage.push('Please do not enter more than 10 characters...');
        
        this.frontEndErrors += 1
        localStorage.setItem('frontEndErrors', JSON.stringify(this.frontEndErrors))


        }
        else if (val.replace(/\s/g, "").toLowerCase() != "abbn"){

        this.errorMessage.push('Stock does not exist in the portfolio');

        this.frontEndErrors += 1
        localStorage.setItem('frontEndErrors', JSON.stringify(this.frontEndErrors))


        }


     }





    }
}
