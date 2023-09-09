import { Component, OnInit } from '@angular/core';
import { SqlService } from '../shared/services/sqldb.service';
import { userStories } from '../shared/models/user-stories';
import { Idle, DEFAULT_INTERRUPTSOURCES } from '@ng-idle/core';
import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';
import { TrackingService } from '../shared/services/tracking.service';

@Component({
  selector: 'app-list',
  templateUrl: 'user-stories.page.html',
  styleUrls: ['user-stories.page.scss']
})

export class UserStoriesPage implements OnInit {

  userStories: {[key:string]: userStories[]} = {};

  constructor(
    private SqlService: SqlService,
    private idle: Idle,
    private platform: Platform,
    private router: Router,
    private trackingService: TrackingService,
  ){}

  ngOnInit() {
    this.SqlService.getUserStories().subscribe(result => {
      var jsonbody = result['Data']['recordset']

      for (var i = 0; i < jsonbody.length; i++){
        var userStory = new userStories(jsonbody[i]['userStoryID'], jsonbody[i]['userStoryName'], jsonbody[i]['userStoryDesc'], jsonbody[i]['journeyName'])
        if (userStory.journey in this.userStories){
          this.userStories[userStory.journey].push(userStory)
        }
        else{
          this.userStories[userStory.journey] = [userStory]
        }
      }

      console.log(this.userStories)
    })
  }

  toHomePage(userStoryId){
    // set the idle period
    localStorage.clear();
    this.trackingService.setUser(userStoryId);
    this.idle.setIdle(20);
    this.idle.setTimeout(20);
    this.idle.setInterrupts(DEFAULT_INTERRUPTSOURCES);

    this.idle.watch();

    this.idle.onTimeoutWarning.subscribe((countdown: number) => {
      console.log('Timeout Warning - ' + countdown);
    });

    this.idle.onTimeout.subscribe(() => {
      alert('Timeout');  
      this.idle.stop();
      localStorage.clear();
      this.initializeApp() 
    });
  }

  initializeApp() {   
    this.platform.ready().then(async () => {
      this.router.navigate(['/user-stories'])
      localStorage.clear()
    });
  }
}