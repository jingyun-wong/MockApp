import { Component } from '@angular/core';

import { Platform, MenuController } from '@ionic/angular';

import { Router } from '@angular/router';

import {filter} from 'rxjs/operators';

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';

import {Idle, DEFAULT_INTERRUPTSOURCES } from '@ng-idle/core';
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
  rootPage:any = 'HomePage';

  idleState = 'Not started.';
  timedOut = false;

  abandoned = [];


  public adminPages = [
    {
      title: 'Dashboard',
      url: '/admin-dashboard',
      icon:'home'
    },
    {
      title: 'Charity Org List',
      url: '/admin',
      icon:'list'
    }
  ];

  constructor(
    private platform: Platform,
    private router: Router,
    private menuController: MenuController,
    private idle: Idle,
    private trackingService: TrackingService,
    private SqlService : SqlService,
  

  ) {


    this.initializeApp();

    

     // when user place the app in the background
    this.platform.pause.subscribe(async () => {
          alert('Pause event detected');
    });

    // set the idle period
    
    idle.setIdle(20);
    idle.setTimeout(20);
    idle.setInterrupts(DEFAULT_INTERRUPTSOURCES);

    idle.watch();

    idle.onTimeoutWarning.subscribe((countdown: number) => {
            console.log('Timeout Warning - ' + countdown);
    });



    idle.onTimeout.subscribe(() => {
          
          alert('Timeout');

        

    
    
          idle.stop();
          localStorage.clear();
          this.initializeApp()
           
    });

  

    
  }




  initializeApp() {
    

    this.platform.ready().then(async () => {
      
  
      this.router.navigate(['/user-stories'])
      localStorage.clear()
      this.trackingService.setUser();
      

    });


  }


}
