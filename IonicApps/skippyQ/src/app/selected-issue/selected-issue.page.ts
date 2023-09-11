import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { TrackingService } from './../shared/services/tracking.service';

@Component({
  selector: 'app-selected-issue',
  templateUrl: './selected-issue.page.html',
  styleUrls: ['./selected-issue.page.scss'],
})
export class SelectedIssuePage implements OnInit {
  issue: string;

  clicks = 0

  startTime!: number
  initTime!: number
  dbStartTime!: number
  contentInitTime!: number
  viewInitTime!: number
  dbloadTime!: number
  backEndErrors = 0;
  pageName: string = "selectedIssue";

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private trackingService: TrackingService,) {
    this.startTime = window.performance.now()
    localStorage.setItem("startTime", JSON.stringify(this.startTime))
  }

  ngOnInit() {
    this.issue = this.activatedRoute.snapshot.paramMap.get('issue');
    this.initTime = window.performance.now()
    localStorage.setItem("pageLoadTime", JSON.stringify((this.initTime - this.startTime)))
  }
  goToHCDetailsPage() {
    this.clicks += 1
    localStorage.setItem("pageClicks", JSON.stringify(this.clicks))
    this.trackingService.trackCTAMetrics(this.pageName, "button", "click on issue title", "hcDetails", 0);
    this.router.navigate(['/hc-details', this.issue]);
  }
  backButton() {
    this.clicks += 1
    localStorage.setItem("pageClicks", JSON.stringify(this.clicks))
    this.trackingService.trackCTAMetrics(this.pageName, "button", "click on back button", "healthCheck", 0);
  }
  requestProposal() {
    this.clicks += 1
    localStorage.setItem("pageClicks", JSON.stringify(this.clicks))
    this.trackingService.trackCTAMetrics(this.pageName, "button", "click on request proposal", "requestProposal", 0);
  }
  improveQuality() {
    this.clicks += 1
    localStorage.setItem("pageClicks", JSON.stringify(this.clicks))
    this.trackingService.trackCTAMetrics(this.pageName, "button", "click on improve quality", "improveQuality", 0);
  }
  clientAdvisor() {
    this.clicks += 1
    localStorage.setItem("pageClicks", JSON.stringify(this.clicks))
    this.trackingService.trackCTAMetrics(this.pageName, "button", "click on contact client advisor button", "contact client advisor", 0);
  }

}
