"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.BitcoinService = void 0;
var core_1 = require("@angular/core");
var operators_1 = require("rxjs/operators");
var BitcoinService = /** @class */ (function () {
    function BitcoinService(http) {
        this.http = http;
        this.BC_API = 'https://blockchain.info/tobtc?currency=USD&value=';
    }
    // private _btc$ = new BehaviorSubject;
    // getRate(coins: number): number{
    //   console.log(this.BC_API + coins);
    //   const rate = this.http.get<{ value: number }>(this.BC_API + coins).pipe(map(res => {
    //     // return
    //     console.log('res', res,typeof res);
    //     res.value}
    //   ))
    //   // console.log(rate);
    //   return rate
    // }
    // getRate(coins: number):Observable<number> {
    //   // console.log(this.BC_API + coins);
    //   return this.http.get<{ value: number }>(this.BC_API + coins).pipe(map(res => res.value
    //   ))
    // }
    BitcoinService.prototype.getRate = function (coins) {
        // console.log(this.BC_API + coins);
        return this.http.get(this.BC_API + coins).pipe(operators_1.map(function (res) { return res; }));
    };
    BitcoinService.prototype.getMarketPrice = function () {
        // const crypro = require('../data/market-price-new.json')
        // console.log('crypro', crypro);
        // return crypro
        // ?timespan=5months&format=json&cors=true
        return this.http.get('https://api.blockchain.info/charts/market-price?timespan=5months&format=json&cors=true')
            .pipe(operators_1.map(function (res) { return res.values; }));
        // console.log(data);
    };
    BitcoinService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], BitcoinService);
    return BitcoinService;
}());
exports.BitcoinService = BitcoinService;
