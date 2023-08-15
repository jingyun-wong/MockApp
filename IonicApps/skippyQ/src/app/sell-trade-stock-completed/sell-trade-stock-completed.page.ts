import { Component, OnInit } from '@angular/core';
// import {DataService} from '../services/data.service';
import { Router, ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-list',
  templateUrl: 'sell-trade-stock-completed.page.html',
  styleUrls: ['sell-trade-stock-completed.page.scss']
})
export class SellTradeStockCompletedPage implements OnInit{


today = new Date();

startTime! : number;
initTime! : number;
contentInitTime! : number;
viewInitTime! : number;


clicks = parseInt(localStorage.getItem('pageClicks'))







constructor(public route: ActivatedRoute, public router: Router ){
  this.startTime = window.performance.now()
  localStorage.setItem("startTime", JSON.stringify(this.startTime))
  console.log(this.startTime/1000)
}


//   constructor(private dataService: DataService) {
//   }



ngOnInit() {
  this.initTime = window.performance.now()
  localStorage.setItem("pageLoadTime", JSON.stringify((this.initTime-this.startTime)/1000))


}
newOrder(){
this.router.navigate(['/sell-trade'])
this.clicks +=1
localStorage.setItem('pageClicks', JSON.stringify(this.clicks))


}











   }


