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
import { LineControllerDatasetOptions } from 'chart.js'
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTitleSubtitle,
  ApexStroke,
  ApexGrid,
  ApexAnnotations
} from "ng-apexcharts";
// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend
// );
ChartJS.register(LineController, LineElement, PointElement, LinearScale, Title, CategoryScale);

@Component({
  selector: 'chart-page',
  templateUrl: './chart-page.component.html',
  styleUrls: ['./chart-page.component.scss']
})
export class ChartPageComponent implements OnInit {

  // @Input() answer: Chart[]
  // answer: Chart[] | Object[]
  answer: Array<Chart>
  answer$: Observable<Object> | Promise<Object>

  // @ViewChild("chart") chart: ChartComponent;
  // public chartOptions: Partial<ChartOptions>;

  constructor(private bitcoinService: BitcoinService) { }

  // public chartData = {
  //   type: 'line',
  //   data: {},
  //   options: {
  //     responsive: true,
  //     plugins: {
  //       legend: {
  //         position: 'top',
  //       },
  //       title: {
  //         display: true,
  //         text: 'Chart.js Line Chart'
  //       }
  //     }
  //   },
  // }

  public chartData:any

  public options = {
    responsive: true,
    maintainAspectRatio: false
  };
  // data = {
  //   labels: ["January", "February", "March", "April", "May", "June", "July"],
  //   datasets: [
  //     {
  //       label: "My First dataset",
  //       data: [65, 59, 80, 81, 56, 55, 40]
  //     }
  //   ]
  // };
  // data:Object = this.loadChart()
  // console.log(data);
  //  ctx = document.getElementById('myChart').getContext('2d');


  async ngOnInit(): Promise<void> {
    // const b = this.bitcoinService.getMarketPrice()
    this.bitcoinService.getMarketPrice().subscribe(answer => {
      console.log(answer, typeof answer);
      this.answer = answer
      this.chartData = this.loadChart2()
      // const ctx = document.getElementById('myChart')
      // const container = document.querySelector('container')
    //  const ctx = container.childNodes[0]
      // const ctx = document.getElementsByTagName('canvas')[0].getContext('2d')
      // console.log(ctx);
      
      // const myChart = new ChartJS(ctx,this.chartData)
      // console.log(this.chartData.data.labels.length);
      
    })
    // this.chartData.data = this.loadChart()
    // const dd = this.loadChart()
  

    // console.log(this.answer.map(item => item.y));




    // console.log(b);

  }

  loadChart2():any {
      
    // const ctx = document.getElementsByTagName('canvas')[0].getContext('2d')
    // console.log(ctx);
    // console.log(this.answer,);

    // const myChart =
    //  return new ChartJS(ctx, {
    //   type: 'line',
    //   data: {
    //     labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    //     datasets: [{
    //       label: '# of Votes',
    //       data: this.answer.map(item => item.y),
    //       backgroundColor: 'rgba(255, 99, 132, 0.2)',
    //       borderColor: 'rgba(255, 99, 132, 1)'
    //     }]
    //   },
    //   options: {
    //     responsive: true,
    //     plugins: {
    //       legend: {
    //         position: 'top',
    //       },
    //       title: {
    //         display: true,
    //         text: 'Chart.js Line Chart'
    //       }
    //     }
    //   }
    // })
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
    // this.chartData.data = myChart.data
    // this.chartData = myChart
    // this.chartData.options = myChart.options
    // this.chartData.type = myChart.type
    // console.log(this.chartData);
    // .attached
    // myChart.render()
  }

  getDates() {
    return this.answer.map(item => new Date(item.x * 1000).toLocaleDateString())
  }

  loadChart() {

    const labels = this.answer.map(item => new Date(item.x * 1000).toLocaleDateString())

    const data = {
      labels: labels,
      datasets: [
        {
          label: 'Bitcoin',
          data: this.answer.map(item => item.y),
          borderColor: 'rgb(255, 99, 132)',
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
      ],
    };


    // const ctx = document.getElementById('myChart')
    // const ctx = document.querySelector('.myChart')
    // const ctx = document.getElementsByTagName('canvas')[0].getContext('2d')
    //  console.log(ctx);


    // var myChart = new ChartJS("myChart", {
    //   type: 'line',
    //   data: {
    //     labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    //     datasets: [{
    //       label: '# of Votes',
    //       data: this.answer.map(item => item.y),
    //       backgroundColor: 
    //       // [
    //         'rgba(255, 99, 132, 0.2)',
    //         // 'rgba(54, 162, 235, 0.2)',
    //         // 'rgba(255, 206, 86, 0.2)',
    //         // 'rgba(75, 192, 192, 0.2)',
    //         // 'rgba(153, 102, 255, 0.2)',
    //         // 'rgba(255, 159, 64, 0.2)'
    //       // ],
    //       borderColor:
    //       //  [
    //         'rgba(255, 99, 132, 1)'
    //         // 'rgba(54, 162, 235, 1)',
    //         // 'rgba(255, 206, 86, 1)',
    //         // 'rgba(75, 192, 192, 1)',
    //         // 'rgba(153, 102, 255, 1)',
    //         // 'rgba(255, 159, 64, 1)'
    //       // ]
    //     ,
    //       borderWidth: 1
    //     }]
    //   },
    //   options: {
    //     scales: {
    //       y: {
    //         beginAtZero: true
    //       }
    //     }
    //   }
    // });
    const d = {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: '# of Votes',
        data: this.answer.map(item => item.y),
        backgroundColor:
          // [
          'rgba(255, 99, 132, 0.2)',
        // 'rgba(54, 162, 235, 0.2)',
        // 'rgba(255, 206, 86, 0.2)',
        // 'rgba(75, 192, 192, 0.2)',
        // 'rgba(153, 102, 255, 0.2)',
        // 'rgba(255, 159, 64, 0.2)'
        // ],
        borderColor:
          //  [
          'rgba(255, 99, 132, 1)'
        // 'rgba(54, 162, 235, 1)',
        // 'rgba(255, 206, 86, 1)',
        // 'rgba(75, 192, 192, 1)',
        // 'rgba(153, 102, 255, 1)',
        // 'rgba(255, 159, 64, 1)'
        // ]
        ,
        borderWidth: 1
      }]
    }
    return {
      type: 'line',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
          label: '# of Votes',
          data: this.answer.map(item => item.y),
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgba(255, 99, 132, 1)'
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Chart.js Line Chart'
          }
        }
      },
    }
  }

}
// var myChart = new ChartJS("myChart", {
//   type: 'bar',
//   data: {
//       labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//       datasets: [{
//           label: '# of Votes',
//           data: this.answer.map(item => item.y),
//           backgroundColor: [
//               'rgba(255, 99, 132, 0.2)',
//               'rgba(54, 162, 235, 0.2)',
//               'rgba(255, 206, 86, 0.2)',
//               'rgba(75, 192, 192, 0.2)',
//               'rgba(153, 102, 255, 0.2)',
//               'rgba(255, 159, 64, 0.2)'
//           ],
//           borderColor: [
//               'rgba(255, 99, 132, 1)',
//               'rgba(54, 162, 235, 1)',
//               'rgba(255, 206, 86, 1)',
//               'rgba(75, 192, 192, 1)',
//               'rgba(153, 102, 255, 1)',
//               'rgba(255, 159, 64, 1)'
//           ],
//           borderWidth: 1
//       }]
//   },
//   options: {
//       scales: {
//           y: {
//               beginAtZero: true
//           }
//       }
//   }
// });









