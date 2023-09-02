import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-request-proposal',
  templateUrl: './request-proposal.page.html',
  styleUrls: ['./request-proposal.page.scss'],
})
export class RequestProposalPage implements OnInit {

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
