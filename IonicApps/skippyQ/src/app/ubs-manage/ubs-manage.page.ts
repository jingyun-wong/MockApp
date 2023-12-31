import { Component, OnInit } from '@angular/core';
import { Campaign } from '../shared/models/campaign';
import { ConfirmationModalPage } from '../confirmation-modal/confirmation-modal.page';
import { ModalController } from '@ionic/angular';
import { TrackingService } from '../shared/services/tracking.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: 'ubs-manage.page.html',
  styleUrls: ['ubs-manage.page.scss']
})


export class UbsManagePage implements OnInit {
  editorials = [
  {name:"EdCo 15.12.22 :06 UBSManageAdvProductFamily",
  contentType:"Editorial Content",
  textType:"Teaser text",
  image:"data:image/png;base64,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"
  },
  {name:"EdCo 15.12.22 :06 UBSManageCluster",
    contentType:"Editorial Content",
    textType:"Teaser text",
    image:"data:image/png;base64,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"
  },
    {name:"pr-MA-APAC",
    contentType:"Editorial Content",
    textType:"Teaser text",
    image:"data:image/png;base64,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"
    },

  ]

startTime! : number
initTime! : number
contentInitTime! : number
viewInitTime! : number
dbStartTime! : number
clicks = parseInt(localStorage.getItem("pageClicks"))
type: string;
pageName: string = "ubsManage"

  constructor(private modalController: ModalController, public trackingService: TrackingService, public router: Router) {
    this.startTime = window.performance.now()
    localStorage.setItem("startTime", JSON.stringify(this.startTime))
    this.type = window.location.href.split('/')[4];
  }

  ngOnInit() {
    this.initTime = window.performance.now()
    localStorage.setItem("pageLoadTime", JSON.stringify((this.initTime-this.startTime)/1000))

    if (localStorage.getItem("userStoryID") == "17"){
      this.trackingService.trackJourneyMetrics(window.performance.now());
      setTimeout(() => {
        alert("You have completed the user story!") ;   
        localStorage.clear();
        location.reload();
        this.router.navigate(['/user-stories'])}
      ,700)
    }
  }

  async openPDF(){
    this.clicks +=1
    localStorage.setItem("pageClicks",JSON.stringify(this.clicks))
    localStorage.setItem("totalClicks",JSON.stringify(parseInt(localStorage.getItem("totalClicks")) + this.clicks ))
    this.trackingService.trackCTAMetrics(this.pageName, "button", "click to download report", "null", 0);

    const modal = await this.modalController.create({
      component: ConfirmationModalPage,
      componentProps: {
        message: "Report Downloaded"
      }
    })

    if (localStorage.getItem("userStoryID") == "6"){
      this.trackingService.trackJourneyMetrics(window.performance.now());
      setTimeout(() => {
        alert("You have completed the user story!") ;   
        localStorage.clear();
        location.reload();
        this.router.navigate(['/user-stories'])}
      ,500)
    }
    return await modal.present();    
  }

  routeEditorials(){
    this.clicks +=1
    localStorage.setItem("pageClicks",JSON.stringify(this.clicks))
    this.trackingService.trackCTAMetrics(this.pageName, "button", "click on editorial", "null", 0);
  }
  routeHome(){
    this.clicks +=1
    localStorage.setItem("pageClicks",JSON.stringify(this.clicks))
    this.trackingService.trackCTAMetrics(this.pageName, "button", "back to home", "home", 0);
  }

  clickOnUpdates(type){
    this.clicks +=1
    localStorage.setItem("pageClicks",JSON.stringify(this.clicks))
    this.trackingService.trackCTAMetrics(this.pageName, "button", `click on article - ${type}`, "null", 0);
  }

}
