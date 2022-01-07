import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, map } from 'rxjs/operators';
import { BehaviorSubject, Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BitcoinService {

  constructor(private http: HttpClient) { }

  private BC_API = 'https://blockchain.info/tobtc?currency=USD&value=';

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
  getRate(coins){
    // console.log(this.BC_API + coins);
    return this.http.get(this.BC_API + coins).pipe(map((res) => res))
 
  }
  getMarketPrice() {
    // const crypro = require('../data/market-price-new.json')
    // console.log('crypro', crypro);
    // return crypro
    // ?timespan=5months&format=json&cors=true
    return this.http.get<any>
      ('https://api.blockchain.info/charts/market-price?timespan=5months&format=json&cors=true')
      .pipe(map(res => res.values))

    // console.log(data);
  }
  // { values: [x: number, y: number]  }
}
