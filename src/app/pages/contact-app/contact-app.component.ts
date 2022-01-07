import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';
import { Contact } from 'src/app/models/contact.model';
import { Observable, Subscription } from 'rxjs';



// import {OrderListModule} from 'primeng/orderlist';
// import {MatList}from '@angular/material'
@Component({
  selector: 'contact-app',
  templateUrl: './contact-app.component.html',
  styleUrls: ['./contact-app.component.scss']
})
export class ContactAppComponent implements OnInit {
  isContactAdding = false
  // contacts: Contact[]
  contacts$: Observable<Contact[]>

  constructor(private contactService: ContactService) { }
  filterBy: string = ''
  ngOnInit(): void {
    this.contactService.loadContacts()
    this.contacts$ = this.contactService.contacts$
    // console.log('contacts: ', this.contacts$);
  }
  filterContacts(): void {
    console.log('this.filterBy', this.filterBy);
    const filter = { term: this.filterBy }
    this.contactService.loadContacts(filter)
  }
  onCloseModal(event) {
    this.isContactAdding = false
  }

}
