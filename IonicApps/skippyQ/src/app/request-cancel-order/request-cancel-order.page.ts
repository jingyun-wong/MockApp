import { Component, OnInit } from '@angular/core';
// import {DataService} from '../services/data.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-list',
  templateUrl: 'request-cancel-order.page.html',
  styleUrls: ['request-cancel-order.page.scss']
})
export class RequestCancelOrderPage implements OnInit{

  clicks= parseInt(localStorage.getItem("pageClicks")) ;
  startTime! : number;
  initTime! : number;
  contentInitTime! : number;
  viewInitTime! : number;









//   constructor(private dataService: DataService) {
//   }

constructor(public router: Router,){
  this.startTime = window.performance.now()
  localStorage.setItem("startTime", JSON.stringify(this.startTime))
      

}




  ngOnInit() {
    this.initTime = window.performance.now()
    localStorage.setItem("pageLoadTime", JSON.stringify((this.initTime-this.startTime)/1000))


  }
  cancelSuccessful(){
    this.clicks +=1
    localStorage.setItem("pageClicks",JSON.stringify(this.clicks))

  }
  cancelAbort(){
    this.clicks +=1
    localStorage.setItem("pageClicks",JSON.stringify(this.clicks))

  }




   }


