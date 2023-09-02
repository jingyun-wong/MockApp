import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-no-issue',
  templateUrl: './no-issue.page.html',
  styleUrls: ['./no-issue.page.scss'],
})
export class NoIssuePage implements OnInit {

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
