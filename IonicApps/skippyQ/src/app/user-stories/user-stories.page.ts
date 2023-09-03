import { Component, OnInit } from '@angular/core';
import { SqlService } from '../shared/services/sqldb.service';
import { userStories } from '../shared/models/user-stories';

@Component({
  selector: 'app-list',
  templateUrl: 'user-stories.page.html',
  styleUrls: ['user-stories.page.scss']
})


export class UserStoriesPage implements OnInit {

  userStories: {[key:string]: userStories[]} = {};

  constructor(private SqlService: SqlService){
    
  }

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
}