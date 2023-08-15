import { Component, OnInit } from '@angular/core';
// import {DataService} from '../services/data.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-list',
  templateUrl: 'cancel-order-successful.page.html',
  styleUrls: ['cancel-order-successful.page.scss']
})
export class CancelOrderSuccessfulPage implements OnInit{
  clicks= parseInt(localStorage.getItem("pageClicks")) ;
  startTime! : number;
  initTime! : number;
  contentInitTime! : number;
  viewInitTime! : number;



constructor(public router: Router,){
  this.startTime = window.performance.now()
  localStorage.setItem("startTime", JSON.stringify(this.startTime))
      
}




  ngOnInit() {
    this.initTime = window.performance.now()
    localStorage.setItem("pageLoadTime", JSON.stringify((this.initTime-this.startTime)/1000))


  }

  buyTradeRoute(){
    this.clicks +=1
    localStorage.setItem("pageClicks",JSON.stringify(this.clicks))
  }





   }


