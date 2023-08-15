import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-health-check',
  templateUrl: './health-check.page.html',
  styleUrls: ['./health-check.page.scss'],
})
export class HealthCheckPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  condition: number = 0;
  list: any[] = new Array(5);
  
  review(i) {
     this.condition = i + 1;
     // your code........
  }

}
