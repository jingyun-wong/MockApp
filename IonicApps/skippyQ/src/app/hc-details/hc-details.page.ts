import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-hc-details',
  templateUrl: './hc-details.page.html',
  styleUrls: ['./hc-details.page.scss'],
})
export class HcDetailsPage implements OnInit {

  @ViewChild('lineCanvas',{static: false}) private lineCanvas: ElementRef;
  
    bars: any;
    colorArray: any;
    label = [];
    data = [];
    doughnutChart: any;
    lineChart: any;
  
  //   constructor(private adminServ: AdminService) { }
  
    ngOnInit() {
  
    }
  
    ngAfterViewInit() {
      this.lineChartMethod();
    }
  
   
  
    lineChartMethod() {
      this.lineChart = new Chart(this.lineCanvas.nativeElement, {
        type: 'line',
        data: {
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'November', 'December'],
          datasets: [
            {
              label: 'Sell per week',
              fill: false,
              backgroundColor: 'rgba(75,192,192,0.4)',
              borderColor: 'rgba(75,192,192,1)',
              borderCapStyle: 'butt',
              borderDash: [],
              borderDashOffset: 0.0,
              borderJoinStyle: 'miter',
              pointBorderColor: 'rgba(75,192,192,1)',
              pointBackgroundColor: '#fff',
              pointBorderWidth: 1,
              pointHoverRadius: 5,
              pointHoverBackgroundColor: 'rgba(75,192,192,1)',
              pointHoverBorderColor: 'rgba(220,220,220,1)',
              pointHoverBorderWidth: 2,
              pointRadius: 1,
              pointHitRadius: 10,
              data: [65, 59, 80, 81, 56, 55, 40, 10, 5, 50, 10, 15],
              spanGaps: false,
            }
          ]
        }
      });
    }
}
