import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-selected-issue',
  templateUrl: './selected-issue.page.html',
  styleUrls: ['./selected-issue.page.scss'],
})
export class SelectedIssuePage implements OnInit {
  issue: string;

  clicks = parseInt(localStorage.getItem("pageClicks"));
  startTime!: number;
  initTime!: number;
  contentInitTime!: number;
  viewInitTime!: number;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.issue = this.activatedRoute.snapshot.paramMap.get('issue');
    this.startTime = window.performance.now()
    localStorage.setItem("startTime", JSON.stringify(this.startTime))
    this.initTime = window.performance.now()
    localStorage.setItem("pageLoadTime", JSON.stringify((this.initTime - this.startTime) / 1000))
  }
  goToHCDetailsPage() {
    this.clickAnything()
    this.router.navigate(['/hc-details', this.issue]);
  }
  clickAnything() {
    this.clicks += 1
    localStorage.setItem("pageClicks", JSON.stringify(this.clicks))
  }

}
