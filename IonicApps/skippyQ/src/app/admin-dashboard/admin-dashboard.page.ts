import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { GoogleChartInterface } from 'ng2-google-charts';
import Chart from 'chart.js/auto';
import { TrackingService } from '../shared/services/tracking.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.page.html',
  styleUrls: ['./admin-dashboard.page.scss'],
})
export class AdminDashboardPage implements AfterViewInit {
@ViewChild('doughnutCanvas',{static: false}) private doughnutCanvas: ElementRef;

  bars: any;
  colorArray: any;
  label = [];
  data = [];
  doughnutChart: any;
  startTime!: number;
  initTime!: number;

  constructor(private trackingService: TrackingService, public router: Router) {
    this.startTime = window.performance.now()
    localStorage.setItem("startTime", JSON.stringify(this.startTime))
  }

  ngOnInit() {
    this.initTime = window.performance.now()
    localStorage.setItem("pageLoadTime", JSON.stringify((this.initTime - this.startTime)))
  }

  ngAfterViewInit() {
    this.doughnutChartMethod();
    localStorage.setItem("dbLoadTime", JSON.stringify(window.performance.now()))
    
    if (localStorage.getItem("userStoryID") == "7"){
      this.trackingService.trackJourneyMetrics(window.performance.now());
      setTimeout(() => {
        alert("You have completed the user story!") ;   
        localStorage.clear();
        this.router.navigate(['/user-stories'])}
      ,500)
    }
  }

  doughnutChartMethod() {
    this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {
      type: 'doughnut',
      data: {
        labels: ['Liquidity', 'Bonds', 'Equity', 'HF&PM', 'Real estate','PMC','Others'],
        datasets: [{
          label: '# of Votes',
          data: [50, 29, 15, 10, 7],
          backgroundColor: [
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)'
          ],
          hoverBackgroundColor: [
            '#FFCE56',
            '#FF6384',
            '#36A2EB',
            '#FFCE56',
            '#FF6384'
          ]
        }]
      }
    });
  }
}
