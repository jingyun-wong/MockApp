import { Component, OnInit } from '@angular/core';
// import {DataService} from '../services/data.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-list',
  templateUrl: 'sell-trade-stock-success.page.html',
  styleUrls: ['sell-trade-stock-success.page.scss']
})
export class SellTradeStockSuccessPage implements OnInit{



  listData = [];
  orderList = ["Market Order", "Limit Order",
  "Stop Loss Order", "Stop Limit Order", "Conditional Order",
  "Attached Orders", "OCA (One-Cancels-All) Order", "Trailing Stop Order"];

  errors=[];

  accountAmount=75553;
  tradingPlace= "";
  units=0;
  price=23.57 ;
  selectOrder= "";
  askPrice= 76.57;
  bidPrice =76.54;
  from= "";
  to= "";
  limit= "";
  triggerLimit= "";
  position = 21;
  startTime! : number;
  initTime! : number;
  contentInitTime! : number;
  viewInitTime! : number;
  clicks = parseInt(localStorage.getItem('pageClicks'));
  frontEndErrors = parseInt(localStorage.getItem('frontEndErrors'))




  constructor(public router: Router,){

    this.startTime = window.performance.now()
    localStorage.setItem("startTime", JSON.stringify(this.startTime))
    
  }

//   constructor(private dataService: DataService) {
//   }
   isModalOpen = false;
    setOpen(isOpen: boolean) {
      this.isModalOpen = isOpen;
    }


  ngOnInit() {
    this.initTime = window.performance.now()
    localStorage.setItem("pageLoadTime", JSON.stringify((this.initTime-this.startTime)/1000))


  }



//   async loadData(){
//   this.dataService.getData().subscribe(res => {
//   this.listData = res
//   }
//   );
//   }

    check() {
    // or whatever name you assign to it in    component
    this.errors = []

    if (this.units==0||this.tradingPlace==""||this.selectOrder==""){
        this.errors.push("Missing Fields")
        this.frontEndErrors += 1
        localStorage.setItem("frontEndErrors",JSON.stringify(this.frontEndErrors))
   }
   else if (this.units > this.position){
      this.errors.push("You are selling more than the units that you have owned")
      this.frontEndErrors += 1
      localStorage.setItem("frontEndErrors",JSON.stringify(this.frontEndErrors))

    }
   else if (this.to < this.from){
        this.errors.push("There is error with the date")
        this.frontEndErrors += 1
        localStorage.setItem("frontEndErrors",JSON.stringify(this.frontEndErrors))

   }
   else if (this.accountAmount< this.units*this.price){

     this.errors.push("There is insufficient funds in your account")

     this.frontEndErrors += 1
     localStorage.setItem("frontEndErrors",JSON.stringify(this.frontEndErrors))

    }
   else{
      this.clicks += 1
      localStorage.setItem("pageClicks", JSON.stringify(this.clicks))

        this.router.navigate(['/sell-trade-stock-review',{units:this.units,
        tradingPlace:this.tradingPlace,
        price:this.price,
        from:this.from,
        to:this.to,
        limit:this.limit,
        triggerLimit:this.triggerLimit,
        selectOrder:this.selectOrder}])



      }
    }
   }


