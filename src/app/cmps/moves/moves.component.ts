import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Input } from '@angular/core';
import { Contact } from 'src/app/models/contact.model';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user.model';
import { ContactService } from 'src/app/services/contact.service';
import { NgForm } from '@angular/forms';
import { BitcoinService } from 'src/app/services/bitcoin.service';
import { Observable, delay } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
// import { resolve } from 'dns';
import { ElementRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { ViewChild } from '@angular/core';
@Component({
  selector: 'moves',
  templateUrl: './moves.component.html',
  styleUrls: ['./moves.component.scss']
})
export class MovesComponent implements OnInit {
  @Output() onClose = new EventEmitter<boolean>()
  @Input() contact: Contact
  @ViewChild('loading') span : any;
  constructor(private ContactService: ContactService, private BitcoinService: BitcoinService, private UserService: UserService,private ref: ElementRef) { }
  crypto: Object
  user: User
  userSubscriber: Subscription;
  isClick = false
  async ngOnInit() {
    // alert('f')
    // this.user = this.UserService.getUser().
    this.userSubscriber = this.UserService.user$.subscribe(user => this.user = user)
    // console.log('this.userSubscribe',this.userSubscriber);
    console.log('contact', this.user,this.userSubscriber);
    this.cryptoCalc(this.user.coins)

    // debugger
  }
  async onSubmit(form: NgForm): Promise<void> {
    // readonly
    this.isClick = true

    // const contact = { ...this.contact, ...form.value }
    console.log('contact', this.contact, form);
    setTimeout(() => {
      this.UserService.addMove(this.contact, form.value.usd)
      this.onClose.emit()
      
      // form.reset()
    }, 3000);
    // this.delayInputs()
    // await this.ContactService.saveContact(contact)
    // await delay(5000)
    // console.log('dddd');


  }

  delayInputs(){
    // const el = document.get('.loading-span')
    const el = this.ref.nativeElement
    
    console.log(this.span);
    

  }
  
  async cryptoCalc(val) {
    console.log('this.crypto', val);
    // console.log(await this.BitcoinService.getRate(5));

    //  this.crypto = await this.BitcoinService.getRate(val)
    await this.BitcoinService.getRate(val).toPromise().then(res => {
      this.crypto = res
      console.log(this.crypto);
    })

  }
  ngOnDestroy() {
    this.userSubscriber.unsubscribe();
  }
}
