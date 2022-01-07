"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.ChartPageComponent = void 0;
var core_1 = require("@angular/core");
var chart_js_1 = require("chart.js");
// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend
// );
chart_js_1.Chart.register(chart_js_1.LineController, chart_js_1.LineElement, chart_js_1.PointElement, chart_js_1.LinearScale, chart_js_1.Title, chart_js_1.CategoryScale);
var ChartPageComponent = /** @class */ (function () {
    // @ViewChild("chart") chart: ChartComponent;
    // public chartOptions: Partial<ChartOptions>;
    function ChartPageComponent(bitcoinService) {
        this.bitcoinService = bitcoinService;
        this.options = {
            responsive: true,
            maintainAspectRatio: false
        };
    }
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
    ChartPageComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, Promise, function () {
            var _this = this;
            return __generator(this, function (_a) {
                // const b = this.bitcoinService.getMarketPrice()
                this.bitcoinService.getMarketPrice().subscribe(function (answer) {
                    console.log(answer, typeof answer);
                    _this.answer = answer;
                    _this.chartData = _this.loadChart2();
                    // const ctx = document.getElementById('myChart')
                    // const container = document.querySelector('container')
                    //  const ctx = container.childNodes[0]
                    // const ctx = document.getElementsByTagName('canvas')[0].getContext('2d')
                    // console.log(ctx);
                    // const myChart = new ChartJS(ctx,this.chartData)
                    // console.log(this.chartData.data.labels.length);
                });
                return [2 /*return*/];
            });
        });
    };
    ChartPageComponent.prototype.loadChart2 = function () {
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
                labels: this.answer.map(function (item) { return new Date(item.x * 1000).toLocaleDateString(); }),
                datasets: [{
                        label: 'Bit Coin',
                        data: this.answer.map(function (item) { return item.y; }),
                        backgroundColor: 'rgba(50, 99, 132, 0.2)',
                        borderColor: 'rgba(1, 99, 132, 1)'
                    }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                interaction: {
                    mode: 'index',
                    intersect: false
                },
                scales: {
                    y: {
                        beginAtZero: true
                    }
                },
                plugins: {
                    legend: {
                        position: 'top'
                    },
                    title: {
                        display: true,
                        text: 'Chart.js Line Chart'
                    }
                }
            }
        };
        // this.chartData.data = myChart.data
        // this.chartData = myChart
        // this.chartData.options = myChart.options
        // this.chartData.type = myChart.type
        // console.log(this.chartData);
        // .attached
        // myChart.render()
    };
    ChartPageComponent.prototype.getDates = function () {
        return this.answer.map(function (item) { return new Date(item.x * 1000).toLocaleDateString(); });
    };
    ChartPageComponent.prototype.loadChart = function () {
        var labels = this.answer.map(function (item) { return new Date(item.x * 1000).toLocaleDateString(); });
        var data = {
            labels: labels,
            datasets: [
                {
                    label: 'Bitcoin',
                    data: this.answer.map(function (item) { return item.y; }),
                    borderColor: 'rgb(255, 99, 132)',
                    backgroundColor: 'rgba(255, 99, 132, 0.5)'
                },
            ]
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
        var d = {
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: [{
                    label: '# of Votes',
                    data: this.answer.map(function (item) { return item.y; }),
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
        };
        return {
            type: 'line',
            data: {
                labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                datasets: [{
                        label: '# of Votes',
                        data: this.answer.map(function (item) { return item.y; }),
                        backgroundColor: 'rgba(255, 99, 132, 0.2)',
                        borderColor: 'rgba(255, 99, 132, 1)'
                    }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'top'
                    },
                    title: {
                        display: true,
                        text: 'Chart.js Line Chart'
                    }
                }
            }
        };
    };
    ChartPageComponent = __decorate([
        core_1.Component({
            selector: 'chart-page',
            templateUrl: './chart-page.component.html',
            styleUrls: ['./chart-page.component.scss']
        })
    ], ChartPageComponent);
    return ChartPageComponent;
}());
exports.ChartPageComponent = ChartPageComponent;
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
