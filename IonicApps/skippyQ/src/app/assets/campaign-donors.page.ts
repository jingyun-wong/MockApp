import { Component, OnInit } from '@angular/core';
import { Campaign } from '../shared/models/campaign';
import { AlertController } from '@ionic/angular';
import { TrackingService } from '../shared/services/tracking.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-campaign-donors',
  templateUrl: './campaign-donors.page.html',
  styleUrls: ['./campaign-donors.page.scss'],
})
export class CampaignDonorsPage implements OnInit {

  handlerMessage = '';
  roleMessage = '';
  startTime! : number;
  initTime! : number;
  clicks: number = 0;
  pageName: string = 'assets'

  constructor(private alertController: AlertController, public trackingService: TrackingService, public router: Router) {
    this.startTime = window.performance.now()
    localStorage.setItem("startTime", JSON.stringify(this.startTime))
    localStorage.setItem("dbLoadTime", JSON.stringify(0))
  }

  ngOnInit() {
    this.initTime = window.performance.now()
    localStorage.setItem("pageLoadTime", JSON.stringify((this.initTime-this.startTime)))

    if (localStorage.getItem("userStoryID") == "2"){
      this.trackingService.trackJourneyMetrics(window.performance.now());
      setTimeout(() => {
        alert("You have completed the user story!") ;   
        localStorage.clear();
        this.router.navigate(['/user-stories'])}
      ,200)
    }
  }

  goMyAdvice(){
    this.clicks +=1 
    localStorage.setItem("pageClicks",JSON.stringify(this.clicks))
    this.trackingService.trackCTAMetrics(this.pageName, "button", "go to My Advice", "myAdvice", 0);
  }

  goMyWay(){
    this.clicks +=1 
    localStorage.setItem("pageClicks",JSON.stringify(this.clicks))
    this.trackingService.trackCTAMetrics(this.pageName, "button", "go to My Way Porfolio", "ubsManage-myway", 0);
  }

  goMyManage(){
    this.clicks +=1 
    localStorage.setItem("pageClicks",JSON.stringify(this.clicks))
    this.trackingService.trackCTAMetrics(this.pageName, "button", "go to My Manage Porfolio", "ubsManage-myManage", 0);
  }

  async presentAlert() {
      // const alert = await this.alertController.create({
      //   header: '',
      //   buttons: [
      //     {
      //       text: 'Cancel',
      //       role: 'cancel',
      //       handler: () => {
      //         this.handlerMessage = 'Alert canceled';
      //       },
      //     },
      //     {
      //       text: 'OK',
      //       role: 'confirm',
      //       handler: () => {
      //         this.handlerMessage = 'Alert confirmed';
      //       },
      //     },
      //   ],
      // });

      // await alert.present();

      // const { role } = await alert.onDidDismiss();
      // this.roleMessage = `Dismissed with role: ${role}`;
    }
  }




