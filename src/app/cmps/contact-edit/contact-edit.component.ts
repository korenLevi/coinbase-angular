import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { Contact } from 'src/app/models/contact.model';
import { ContactService } from 'src/app/services/contact.service';
import { ActivatedRoute, Router } from '@angular/router';
// import { ContactService } from 'src/app/services/contact.service';
@Component({
  selector: 'contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.scss']
})
export class ContactEditComponent implements OnInit {
  isMove = false
  @Output() onClose = new EventEmitter<boolean>()
  @Output() onMove = new EventEmitter<boolean>()
  @Input() contact: Contact
  @Input() isContactAdding:boolean
  form: FormGroup
  isAdding = false
  isEditing = false
  constructor(private ContactService: ContactService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    // console.log(this.contact);
    // this.route.data.subscribe(({ contact }) => {
    //   console.log(contact);

    //   this.contact = contact._id ? contact : this.ContactService.getEmptyContact() as Contact
    // })


  }
  async onSubmit(form: NgForm): Promise<void> {
    const contact = { ...this.contact, ...form.value }
    console.log('contact',contact,this.isMove);

    await this.ContactService.saveContact(contact)
    this.onClose.emit()
    // form.reset()
  }

  async removeContact() {
    await this.ContactService.deleteContact(this.contact._id)
    this.onClose.emit()
  }
  openMoveModal() {
    this.isMove = true
    // this.onClose.emit(this.isMove)
    // this.onClose.emit(this.isMove)
  }
}
