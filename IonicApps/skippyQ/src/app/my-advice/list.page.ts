import { Component, OnInit } from '@angular/core';
import { Campaign } from '../shared/models/campaign';


@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {

  allCampaigns: Campaign[];
  campaigns: Campaign[];
  campaignEmail:string;

  constructor() {}

  ngOnInit() {


  }
}
