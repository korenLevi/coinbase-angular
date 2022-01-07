// import { Component, OnInit } from '@angular/core';
import { BitcoinService } from 'src/app/services/bitcoin.service';
import { Observable } from 'rxjs';
import { Component, ViewChild, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Chart } from 'src/app/models/chart.model';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  LineController,
  Title,
  Tooltip,
  Legend,

} from 'chart.js';
// import { LineControllerDatasetOptions } from 'chart.js'
// import {
//   ChartComponent,
//   ApexAxisChartSeries,
//   ApexChart,
//   ApexXAxis,
//   ApexDataLabels,
//   ApexTitleSubtitle,
//   ApexStroke,
//   ApexGrid,
//   ApexAnnotations
// } from "ng-apexcharts";

ChartJS.register(LineController, LineElement, PointElement, LinearScale, Title, CategoryScale);

@Component({
  selector: 'chart-page',
  templateUrl: './chart-page.component.html',
  styleUrls: ['./chart-page.component.scss']
})
export class ChartPageComponent implements OnInit {

  answer: Array<Chart>
  answer$: Observable<Object> | Promise<Object>
  constructor(private bitcoinService: BitcoinService) { }

 

  public chartData:any

  public options = {
    responsive: true,
    maintainAspectRatio: false
  };


  async ngOnInit(): Promise<void> {
    // const b = this.bitcoinService.getMarketPrice()
    this.bitcoinService.getMarketPrice().subscribe(answer => {
      console.log(answer, typeof answer);
      this.answer = answer
      this.chartData = this.loadChart()
      
    })
  }

  loadChart():any {

   return {
      type: 'line',
      data: {
        labels: this.answer.map(item => new Date(item.x * 1000).toLocaleDateString()),
        datasets: [{
          label: 'Bit Coin',
          data: this.answer.map(item => item.y),
          backgroundColor: 'rgba(50, 99, 132, 0.2)',
          borderColor: 'rgba(1, 99, 132, 1)'
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        interaction: {
          mode: 'index',
          intersect: false,
        },
        scales: {
          y: {
              beginAtZero: true
          }
      },
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Chart.js Line Chart'
          }
        }
      }
    }

  }

  getDates() {
    return this.answer.map(item => new Date(item.x * 1000).toLocaleDateString())
  }


}






