import { Component, OnInit } from '@angular/core';
import { Campaign } from '../shared/models/campaign';
import { investment } from '../shared/models/investment';
import { Router, RouterEvent, NavigationEnd, RoutesRecognized} from '@angular/router';
import {SqlService} from '../shared/services/sqldb.service'


@Component({
  selector: 'app-list',
  templateUrl: 'investment-ideas.page.html',
  styleUrls: ['investment-ideas.page.scss']
})
export class InvestmentIdeasPage implements OnInit {



  clicks = 0
  investment:investment[]=[];
  

  startTime! : number
  initTime! : number
  dbStartTime! : number
  contentInitTime! : number
  viewInitTime! : number
  dbloadTime!: number
  backEndErrors =0;



  





  constructor(private router: Router, private SqlService :SqlService) {
    this.startTime = window.performance.now()
    localStorage.setItem("startTime", JSON.stringify(this.startTime))

  }


  ngOnInit() {

  this.initTime = window.performance.now()

  

  this.SqlService.getInvestmentIdeas().subscribe(result => {

   
    var jsonbody = result['Data']['recordset']
    
    for (var i = 0; i < jsonbody.length; i++){

    console.log(jsonbody[i])

    var newInvestment = new investment(jsonbody[i]['category'],jsonbody[i]['img'],jsonbody[i]['post'],jsonbody[i]['title'],jsonbody[i]['details'])
    this.investment.push(newInvestment)
    

  }

  }, error => {
    this.backEndErrors += 1
    localStorage.setItem("backEndErrors", JSON.stringify(this.backEndErrors))
    console.log(error)
    
  })
  

  localStorage.setItem("pageLoadTime", JSON.stringify((this.initTime-this.startTime)/1000))
  localStorage.setItem("dbLoadTime",JSON.stringify(window.performance.now()-parseFloat(localStorage.getItem("dbLoadTime"))))
  


 

  }

  investmentDetails(){

      this.clicks += 1
      localStorage.setItem("pageClicks", JSON.stringify(this.clicks))

 

  }





}