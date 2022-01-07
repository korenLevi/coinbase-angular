import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'auth-modal',
  templateUrl: './auth-modal.component.html',
  styleUrls: ['./auth-modal.component.scss']
})
// export class AuthModalComponent implements OnInit {

//   constructor(private fb: FormBuilder) { }
//   form: FormGroup
//   ngOnInit(): void {
//     this.form = this.fb.group({
//       fname: ['Shalom', [Validators.required]],
//       lname: '',
//       email: '',
//       password: '',
//       userAgreement: false
//     })
//   }

// }
export class AuthModalComponent implements OnInit {
  @Output() onClose = new EventEmitter<boolean>()
  constructor(private UserService: UserService) { }
  form: FormGroup
  fname = "koren"
  isSigningIn = false
  ngOnInit(): void {
   
  }
  onSubmit(form: NgForm) {
    if(this.isSigningIn){

      const fullname = form.value.fname + ' ' + form.value.lname
      this.UserService.signup(fullname)
    }else{
      const fullname = form.value.fname + ' ' + form.value.lname
      this.UserService.signup(fullname)
    
    }
    window.location.reload()
    
    this.onClose.emit()
    form.reset()
  }

}
