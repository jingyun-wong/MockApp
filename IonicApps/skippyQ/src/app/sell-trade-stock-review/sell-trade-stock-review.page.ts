import { Component, OnInit } from '@angular/core';
// import {DataService} from '../services/data.service';
import { Router, ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-list',
  templateUrl: 'sell-trade-stock-review.page.html',
  styleUrls: ['sell-trade-stock-review.page.scss']
})
export class SellTradeStockReviewPage implements OnInit{



  listData = [];
  orderList = ["Market Order", "Limit Order",
  "Stop Loss Order", "Stop Limit Order", "Conditional Order",
  "Attached Orders", "OCA (One-Cancels-All) Order", "Trailing Stop Order"];
  errors=[];

  accountAmount=75553;
//   tradingPlace= "";
//   units="";
//   price=23.57;
  askPrice= 76.57;
  bidPrice =76.54;
//   units = this.GetURLParameter('units');
//   selectOrder =  this.GetURLParameter('selectOrder');
//   limit=this.GetURLParameter('limit');
//   triggerLimit = this.GetURLParameter('triggerLimit');
//   from = this.GetURLParameter('from');
//   to = this.GetURLParameter('to');
//   tradingPlace = this.GetURLParameter('tradingPlace');
//   price = this.GetURLParameter('price');

//   console.log(this.units)



  constructor(public route: ActivatedRoute, public router: Router){
    this.startTime = window.performance.now()
    localStorage.setItem("startTime", JSON.stringify(this.startTime))

  }


//   constructor(private dataService: DataService) {
//   }
  units = this.route.snapshot.paramMap.get("units")
  selectOrder = this.route.snapshot.paramMap.get("selectOrder")
  limit = this.route.snapshot.paramMap.get("limit")
  triggerLimit = this.route.snapshot.paramMap.get("triggerLimit")
  from = this.route.snapshot.paramMap.get("from")
  to = this.route.snapshot.paramMap.get("to")
  tradingPlace = this.route.snapshot.paramMap.get("tradingPlace")
  price = this.route.snapshot.paramMap.get("price")
  marketValue = parseInt(this.units) * parseInt(this.price)

  startTime! : number;
  initTime! : number;
  contentInitTime! : number;
  viewInitTime! : number;
  clicks = parseInt(localStorage.getItem('pageClicks'));




  ngOnInit() {
    this.initTime = window.performance.now()
    localStorage.setItem("pageLoadTime", JSON.stringify((this.initTime-this.startTime)/1000))



  }
  submit(){

  this.router.navigate(['/sell-trade-stock-completed'])
  this.clicks +=1 
  localStorage.setItem("pageClicks",JSON.stringify(this.clicks))




  }










//   async loadData(){
//   this.dataService.getData().subscribe(res => {
//   this.listData = res
//   }
//   );
//   }






   }


