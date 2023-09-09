import { AfterViewInit, Component, OnInit, Renderer2 } from '@angular/core';
import { NavController, LoadingController } from '@ionic/angular';

import { Router } from '@angular/router';
import { topDonation } from '../shared/models/topDonation';
import { donationRecord } from '../shared/models/donationRecord';
import { Campaign } from '../shared/models/campaign';
import { TrackingService } from './../shared/services/tracking.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  topDonations: topDonation[];
  campaignImage: string;
  donationHistory: donationRecord[];
  endingCampaigns: Campaign[];
  private actionId: number;

  clicks = parseInt(localStorage.getItem("pageClicks"));
  startTime!: number;
  initTime!: number;
  contentInitTime!: number;
  viewInitTime!: number;

  constructor(
    private loadingCtrl: LoadingController,
    private router: Router,
    private trackingService: TrackingService,
  ) {
    this.startTime = window.performance.now()
    localStorage.setItem("startTime", JSON.stringify(this.startTime))
    // console.log(this.startTime/1000)

  }
  // when the directive is instantiated.
  ngOnInit() {
    this.initTime = window.performance.now()
    localStorage.setItem("pageLoadTime", JSON.stringify((this.initTime - this.startTime) / 1000))
  }

  myManage() {
    this.clicks += 1
    localStorage.setItem("pageClicks", JSON.stringify(this.clicks))
  }
  
  myAdvice() {
    this.clicks += 1
    localStorage.setItem("pageClicks", JSON.stringify(this.clicks))
  }
  myTradingPortfolio() {
    this.clicks += 1
    localStorage.setItem("pageClicks", JSON.stringify(this.clicks))
  }

}
