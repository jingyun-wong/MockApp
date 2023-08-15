import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { GoogleChartInterface } from 'ng2-google-charts';
import Chart from 'chart.js/auto';


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

//   constructor(private adminServ: AdminService) { }

  ngOnInit() {

  }

  ngAfterViewInit() {
    this.doughnutChartMethod();
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
