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
  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.issue = this.activatedRoute.snapshot.paramMap.get('issue');
  }
  goToHCDetailsPage() {
    this.router.navigate(['/hc-details', this.issue]);
  }

}
