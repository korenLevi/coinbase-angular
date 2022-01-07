import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user.model';
import { BitcoinService } from 'src/app/services/bitcoin.service';
import { Observable, Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(private userService: UserService, private bitcoinService: BitcoinService) { }
  user: User
  bitCoin: Object
  userSubscriber: Subscription;
  // bitCoin$: Observable<number> | number
  async ngOnInit(): Promise<void> {
    //  this.user = this.userService.getLoggedinUser()
    //  this.bitCoin = this.bitcoinService.getRate(this.user.coins)
    // this.bitcoinService.getRate(this.user.coins).subscribe(answer => {
    //   console.log('answer',answer);
      
    //   this.bitCoin = answer
    // })
    this.userSubscriber = this.userService.user$.subscribe(user =>{
      console.log('user',user);
      if(!user){
        user = this.userService.getDemoUser()
      }
      this.user = user
    } );
    await this.bitcoinService.getRate(this.user.coins).toPromise().then(res => {
      this.bitCoin = res
    })


    // this.BitcoinService.getBitCoinRate().subscribe((rate) => this.rate = +(1 / rate).toFixed(2));

    
    // .subscribe(answer => {
    // this.bitCoin = answer
    // console.log(answer,this.bitCoin);  
    // })

    // this.bitCoin$ = this.bitcoinService.getRate(this.user.coins)
    // console.log(this.bitCoin$);
    
    // .subscribe(answer => {
    //   console.log('answer',answer);
      
    // })
    // this.bitCoin = answer
    //  console.log('this.bitCoin',this.bitCoin);
     
  }

}
