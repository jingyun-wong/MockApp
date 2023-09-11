import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Chart from 'chart.js/auto';
import { TrackingService } from '../shared/services/tracking.service';

@Component({
  selector: 'app-trading-eg',
  templateUrl: './trading-eg.page.html',
  styleUrls: ['./trading-eg.page.scss'],
})
export class TradingEgPage implements AfterViewInit {

  @ViewChild('lineCanvas',{static: false}) private lineCanvas: ElementRef;

    bars: any;
    colorArray: any;
    label = [];
    data = [];
    doughnutChart: any;
    lineChart: any;
    name: string;
    startTime! : number;
    initTime! : number;  
    pageName: string = 'tradingEg'
    clicks: number = 0;
  
    constructor(private activatedRoute: ActivatedRoute, public trackingService: TrackingService, public router: Router) { 
      this.startTime = window.performance.now()
      localStorage.setItem("startTime", JSON.stringify(this.startTime))  
    }
  
    ngOnInit() {
      this.initTime = window.performance.now()
      localStorage.setItem("pageLoadTime", JSON.stringify((this.initTime-this.startTime)))
  
      this.activatedRoute.queryParams.subscribe(params => {
        console.log(params)
        this.name = params["name"];
      });  
    }
  
    ngAfterViewInit() {
      this.lineChartMethod();
      localStorage.setItem("dbLoadTime", JSON.stringify(window.performance.now() - this.initTime))
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

    backButton(){
      this.clicks +=1 
      localStorage.setItem("pageClicks",JSON.stringify(this.clicks))
      this.trackingService.trackCTAMetrics(this.pageName, "button",  `back to investment trading ideas`, "investmentTradingIdea", 0);  
    }
}
