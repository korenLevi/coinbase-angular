import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user.model';
import { BitcoinService } from 'src/app/services/bitcoin.service';
import { Observable, Subscription } from 'rxjs';
@Component({
  selector: 'user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements OnInit {

  constructor(private userService: UserService, private bitcoinService: BitcoinService) { }
  user: User
  bitCoin: Object
  userSubscriber: Subscription;
  // bitCoin$: Observable<number> | number
   ngOnInit(): void {
    this.userSubscriber = this.userService.user$.subscribe(user =>{
      console.log('user',user);
      this.user = user
    } );
     this.bitcoinService.getRate(this.user.coins).toPromise().then(res => {
      console.log('this.bitCoin',res);
      this.bitCoin = res
      console.log('this.bitCoin',this.bitCoin);
      
    })

  }
  ngOnDestroy() {
    this.userSubscriber.unsubscribe();
  }
}
