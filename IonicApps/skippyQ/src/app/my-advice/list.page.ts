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
  campaignEmail: string;

  clicks = parseInt(localStorage.getItem("pageClicks"));
  startTime!: number;
  initTime!: number;
  contentInitTime!: number;
  viewInitTime!: number;

  constructor() { }

  ngOnInit() {
    this.startTime = window.performance.now()
    localStorage.setItem("startTime", JSON.stringify(this.startTime))
    this.initTime = window.performance.now()
    localStorage.setItem("pageLoadTime", JSON.stringify((this.initTime - this.startTime) / 1000))

  }

  clickAnything() {
    this.clicks += 1
    localStorage.setItem("pageClicks", JSON.stringify(this.clicks))
  }
}
