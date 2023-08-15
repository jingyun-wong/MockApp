import { Component, OnInit } from '@angular/core';
import { Campaign } from '../shared/models/campaign';


@Component({
  selector: 'app-list',
  templateUrl: 'finance-news.page.html',
  styleUrls: ['finance-news.page.scss']
})
export class FinanceNewsPage implements OnInit {

  allCampaigns: Campaign[];
  campaigns: Campaign[];
  campaignEmail:string;

  constructor() {}

  ngOnInit() {


  }
}
