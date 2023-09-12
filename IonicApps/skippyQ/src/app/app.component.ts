import { Component } from '@angular/core';

import { Platform, MenuController } from '@ionic/angular';

import { Router } from '@angular/router';

import { filter } from 'rxjs/operators';

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';

import { Idle, DEFAULT_INTERRUPTSOURCES } from '@ng-idle/core';
import { FrontEnd } from './shared/models/front-end';
import { TrackingService } from './shared/services/tracking.service';

import { SqlService } from './shared/services/sqldb.service';
import { key } from 'localforage';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  rootPage: any = 'HomePage';
  idleState = 'Not started.';
  timedOut = false;
  abandoned = [];
  pageName: string = "tabs"

  public adminPages = [
    {
      title: 'Dashboard',
      url: '/admin-dashboard',
      icon: 'home'
    },
    {
      title: 'Charity Org List',
      url: '/admin',
      icon: 'list'
    }
  ];

  constructor(
    private platform: Platform,
    private router: Router,
    private menuController: MenuController,
    private idle: Idle,
    private trackingService: TrackingService,
    private SqlService: SqlService,
  ) {
    this.initializeApp();

    // when user place the app in the background
    this.platform.pause.subscribe(async () => {
      alert('Pause event detected');
    });
  }

  initializeApp() {
    this.platform.ready().then(async () => {
      this.router.navigate(['/user-stories'])
      localStorage.clear()
    });
  }

  endStory() {
    alert('You have chose to end this user story testing');
    var pageCount = parseInt(localStorage.getItem("pageCount"))

    var jsonbody = {
      "sessionId": JSON.parse(localStorage.getItem("sessionId")),
      "userStoryId": JSON.parse(localStorage.getItem("userStoryID")),
      "totalClicks": JSON.parse(localStorage.getItem("totalClicks")),
      "elapsedTime": ((window.performance.now() - parseFloat(localStorage.getItem("journeyElapsedTime")))/1000).toFixed(5),
      "totalLoadTime": (parseFloat(localStorage.getItem("totalLoadTime"))/1000).toFixed(5),
      "totalDBLoadTime": (parseFloat(localStorage.getItem("totalDBLoadTime"))/1000).toFixed(5),
      "totalPageVisits": pageCount,
      "insertTimestamp": Date.now(),
      "frontendErrors": JSON.parse(localStorage.getItem("frontendErrors")),
      "backendErrors": JSON.parse(localStorage.getItem("backendErrors")),
      "completedJourney": 1
    }

    console.log(jsonbody)

    this.SqlService.postJourneyTrackingMetrics(jsonbody);

    localStorage.clear()
    location.reload();
    this.router.navigate(['/user-stories'])
  }

  onHome() {
    localStorage.setItem("pageClicks", JSON.stringify(1))
    this.trackingService.trackCTAMetrics(this.pageName, "button", "click on Homepage at tabs", "home", 0);
  }

  onAssets() {
    localStorage.setItem("pageClicks", JSON.stringify(1))
    this.trackingService.trackCTAMetrics(this.pageName, "button", "click on Assets at tabs", "assets", 0);
  }

  onAccounts() {
    localStorage.setItem("pageClicks", JSON.stringify(1))
    this.trackingService.trackCTAMetrics(this.pageName, "button", "click on Accounts at tabs", "accounts", 0);
  }

  onDII() {
    localStorage.setItem("pageClicks", JSON.stringify(1))
    this.trackingService.trackCTAMetrics(this.pageName, "button", "click on DII at tabs", "investmentIdeas", 0);
  }

  onTrading() {
    localStorage.setItem("pageClicks", JSON.stringify(1))
    this.trackingService.trackCTAMetrics(this.pageName, "button", "click on trading at tabs", "tradingHome", 0);
  }
}
